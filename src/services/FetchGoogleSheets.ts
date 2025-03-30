import axios from 'axios';

/**
 * Interface pour la configuration d'une Google Sheet à récupérer.
 */
export interface GoogleSheetConfig {
    sheetId: string;
    sheetGids?: number[];
    columns?: string;
    rows?: string;
    returnObjects?: boolean;
}

/**
 * Récupère des données spécifiques d'un Google Sheet sous forme de tableau de strings.
 * @param config Configuration contenant l'ID de la feuille, les colonnes, les lignes et les GID.
 * @returns Un tableau de données combinées de toutes les feuilles demandées.
 */
export interface GoogleSheetConfig {
    sheetId: string;
    sheetGids?: number[]; // GIDs des feuilles à récupérer
    columns?: string; // Colonnes à récupérer (ex: "A,C,D")
    rows?: string; // Plages de lignes à récupérer (optionnel)
    returnObjects?: boolean; // Si true, retour sous forme d'objet avec les en-têtes comme clés
}

/**
 * Fonction qui vérifie si une chaîne est une URL d'image valide.
 */
function isImageUrl(url: string): boolean {
    return /\.(jpg|jpeg|png|gif|bmp|tiff|webp)$/i.test(url);
}

/**
 * Récupère des données spécifiques d'un Google Sheet sous forme de tableau de strings.
 * @param config Configuration contenant l'ID de la feuille, les colonnes, les lignes et les GID.
 * @returns Un tableau de données combinées de toutes les feuilles demandées.
 */
export async function fetchGoogleSheetData(
    config: GoogleSheetConfig
): Promise<string[] | { image: string, nom: string, description: string, style: string }[]> {
    try {
        const { sheetId, columns, rows, sheetGids, returnObjects = false } = config;

        let range = '';

        // Gestion de la plage de données (colonnes/lignes)
        if (!columns && !rows) {
            range = 'A:Z'; // Toute la feuille
        } else if (columns && !rows) {
            range = columns
                .split(',')
                .map(col => col.trim())
                .map(col => (col.includes(':') ? col : `${col}:${col}`))
                .join(',');
        } else if (!columns && rows) {
            range = rows
                .split(',')
                .map(row => row.trim())
                .map(row => (row.includes(':') ? `A${row}:Z${row}` : `A${row}:Z${row}`))
                .join(',');
        } else if (columns && rows) {
            const columnsArray = columns.split(',').map(col => col.trim());
            const rowsArray = rows.split(',').map(row => row.trim());
            range = columnsArray
                .map(col =>
                    rowsArray
                        .map(row => (row.includes(':') ? `${col}${row}` : `${col}${row}:${col}${row}`))
                        .join(',')
                )
                .join(',');
        }

        // Liste des `gid` à traiter (si aucune n'est renseignée, prendre `gid=0` par défaut)
        const gids = sheetGids && sheetGids.length > 0 ? sheetGids : [0];

        let allData: string[] | { [key: string]: string }[] = [];

        for (const gid of gids) {
            const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&range=${range}&gid=${gid}`;
            const response = await axios.get<string>(url);

            if (response.data.includes(')]}')) {
                const errorMessage = response.data.split(')]}')[1];
                throw new Error(`Erreur API Google Sheets : ${errorMessage}`);
            }

            // Manipulation de la donnée pour éviter le découpage incorrect
            const rowsData: string[][] = response.data
                .trim()
                .split('\n')
                .map(row => {
                    // Utilisation de regex pour gérer les champs contenant des virgules et des guillemets
                    const regex = /(?:,)(?=(?:(?:[^"]*"){2})*[^"]*$)/g;
                    return row.split(regex).map(value => value.replace(/(^"|"$)/g, '').trim());
                });

            // Séparation correcte des colonnes
            if (returnObjects) {
                const headers = rowsData.shift(); // Première ligne = en-têtes
                if (!headers) throw new Error('Impossible de récupérer les en-têtes de la feuille.');

                // Récupération des données sous forme d'objets avec des en-têtes comme clés
                const objectsData = rowsData.map(row =>
                    headers.reduce<{ [key: string]: string }>((acc, header, index) => {
                        // Si une cellule contient une URL d'image, on la retourne telle quelle
                        const cellValue = row[index] || '';
                        acc[header] = isImageUrl(cellValue) ? cellValue : cellValue;
                        return acc;
                    }, {}));

                allData = [...(allData as { [key: string]: string }[]), ...objectsData];
            } else {
                // Concatenate the rows into one flat list of strings
                const flattenedData = rowsData.map(row =>
                    row.map(cell => {
                        const cellValue = cell.trim();
                        return isImageUrl(cellValue) ? cellValue : cellValue;
                    })
                );

                // On récupère chaque colonne séparément sans fusionner
                const columnsArray = columns?.split(',').map(col => col.trim()) || [];

                const separatedColumns = columnsArray.map((column, colIndex) => {
                    return flattenedData.map(row => row[colIndex] || '');
                });

                allData = [...(allData as string[]), ...separatedColumns.flat()];
            }
        }

        return allData as { image: string, nom: string, description: string, style: string }[]; // Retourne les données sans modification
    } catch (error) {
        console.error('❌ Erreur lors de la récupération des données Google Sheets:', error);
        return [];
    }
}