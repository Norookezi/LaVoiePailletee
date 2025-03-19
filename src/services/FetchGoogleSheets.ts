import axios from "axios";

/**
 * Interface pour la configuration d'une Google Sheet à récupérer.
 */
export interface GoogleSheetConfig {
    sheetId: string;
    columns?: string;
    rows?: string;    
}



/**
 * Récupère des données spécifiques d'un Google Sheet sous forme de tableau de strings.
 * @param config Configuration contenant l'ID de la feuille, les colonnes et les lignes.
 * @returns Un tableau de données.
 */
export async function fetchGoogleSheetData(config: GoogleSheetConfig): Promise<string[]> {
    try {
        const { sheetId, columns, rows } = config;

        let range = "";

        // Cas où ni les colonnes ni les lignes ne sont spécifiées
        if (!columns && !rows) {
            range = "A:Z";  // Toute la feuille
        }

        // Cas où les colonnes sont spécifiées mais pas les lignes
        else if (columns && !rows) {
            const columnsArray = columns.split(',').map(col => col.trim()); // Séparateur "," pour les colonnes
            range = columnsArray
                .map(col => {
                    if (col.includes(':')) {
                        return col; // Plage de colonnes (ex: A:C)
                    } else {
                        return `${col}:${col}`; // Une seule colonne (ex: A)
                    }
                })
                .join(',');  // Joindre les différentes plages de colonnes par des virgules
        }

        // Cas où les lignes sont spécifiées mais pas les colonnes
        else if (!columns && rows) {
            const rowsArray = rows.split(',').map(row => row.trim()); // Séparateur "," pour les lignes
            range = rowsArray
                .map(row => {
                    if (row.includes(':')) {
                        const [startRow, endRow] = row.split(':');
                        return `A${startRow}:Z${endRow}`; // Plage de lignes (ex: 1:4)
                    } else {
                        return `A${row}:Z${row}`; // Une seule ligne (ex: 1)
                    }
                })
                .join(',');  // Joindre les différentes plages de lignes par des virgules
        }

        // Cas où les colonnes et les lignes sont spécifiées
        else if (columns && rows) {
            const columnsArray = columns.split(',').map(col => col.trim()); // Séparateur "," pour les colonnes
            const rowsArray = rows.split(',').map(row => row.trim()); // Séparateur "," pour les lignes

            // Construire une plage combinée (ex: A1, A2, B1, B2, ...)
            const ranges = columnsArray.map(col => {
                return rowsArray.map(row => {
                    if (row.includes(':')) {
                        const [startRow, endRow] = row.split(':');
                        return `${col}${startRow}:${col}${endRow}`;  // Plage de lignes pour chaque colonne (ex: A2:A4)
                    } else {
                        return `${col}${row}:${col}${row}`;  // Une seule cellule pour chaque colonne (ex: A2:A2)
                    }
                }).join(','); // Joindre toutes les lignes pour une colonne
            }).join(','); // Joindre toutes les colonnes

            range = ranges; // Plage combinée
        }

        // Si la plage est plus complexe et inclut des colonnes multiples (ex: A:C), formater de manière correcte
        if (columns && rows && columns.includes(":")) {
            const columnsArray = columns.split(',');
            const colRange = columnsArray.map(col => {
                if (col.includes(":")) {
                    const [startCol, endCol] = col.split(":");
                    const colStartCode = startCol.charCodeAt(0);
                    const colEndCode = endCol.charCodeAt(0);

                    // Générer toutes les colonnes entre startCol et endCol
                    const colLetters = [];
                    for (let i = colStartCode; i <= colEndCode; i++) {
                        colLetters.push(String.fromCharCode(i));
                    }
                    return colLetters.join(',');
                } else {
                    return col;
                }
            }).join(',');

            const rowsArray = rows.split(',').map(row => row.trim()); // Séparateur "," pour les lignes
            const ranges = colRange.split(',').map(col => {
                return rowsArray.map(row => {
                    if (row.includes(':')) {
                        const [startRow, endRow] = row.split(':');
                        return `${col}${startRow}:${col}${endRow}`;  // Plage de lignes pour chaque colonne (ex: A2:A4)
                    } else {
                        return `${col}${row}:${col}${row}`;  // Une seule cellule pour chaque colonne (ex: A2:A2)
                    }
                }).join(',');
            }).join(',');

            range = ranges;
        }

        // Construire l'URL avec la plage spécifiée
        const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&range=${range}`;

        const response = await axios.get(url);

        // Vérification si une erreur interne est déclenchée par l'API Google Sheets
        if (response.data.includes(")]}")) {
            const errorMessage = response.data.split(")]}")[1];
            throw new Error(`Erreur API Google Sheets : ${errorMessage}`);
        }

        // Transformation du CSV en tableau de lignes et colonnes
        const rowsData: string[][] = response.data
            .trim()
            .split("\n")
            .map((row: string) => row.split(",").map(value => value.replace(/(^"|"$)/g, "")));

        // Aplatir le tableau de tableaux en un tableau simple et éliminer les valeurs vides
        const flattenedData = rowsData.flat().filter(item => item.trim() !== "");

        return flattenedData;
    } catch (error: any) {
        // Log l'erreur et retourne un tableau vide
        console.error("❌ Erreur lors de la récupération des données Google Sheet:", error.message || error);
        return [];
    }
}