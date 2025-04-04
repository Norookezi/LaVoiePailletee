import axios from 'axios';

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
    query?: string; // Si true, retour sous forme d'objet avec les en-têtes comme clés
}

/**
 * Parse un CSV en tableau de chaînes de caractères, en gérant les retours à la ligne et les guillemets.
 * @param csv - Le texte CSV brut
 * @returns Tableau 2D des valeurs du CSV
 */
export function parseCSV(csv: string): string[][] {
    const rows: string[][] = [];
    let currentRow: string[] = [];
    let currentCell = '';
    let insideQuotes = false;
    console.log(csv);

    for (let i = 0; i < csv.length; i++) {
        const char = csv[i];
        const nextChar = csv[i + 1];

        if (char === '"' && nextChar === '"') {
            // Gérer les guillemets échappés (ex: "" -> ")
            currentCell += '';
            i++; // Sauter le prochain guillemet
        } else if (char === '"') {
            // Changer l'état insideQuotes
            insideQuotes = !insideQuotes;
        } else if (char === ',' && !insideQuotes) {
            // Nouvelle colonne
            currentRow.push(currentCell);
            currentCell = '';
        } else if (char === '\n' && !insideQuotes) {
            // Nouvelle ligne
            currentRow.push(currentCell);
            rows.push(currentRow);
            currentRow = [];
            currentCell = '';
        } else {
            // Ajouter le caractère à la cellule actuelle
            currentCell += char;
        }
    }

    // Ajouter la dernière cellule et la dernière ligne
    if (currentCell || currentRow.length > 0) {
        currentRow.push(currentCell);
        rows.push(currentRow);
    }

    return rows;
}

/**
 * Récupère des données spécifiques d'un Google Sheet sous forme de tableau de strings.
 * @param config Configuration contenant l'ID de la feuille, les colonnes, les lignes et les GID.
 * @returns Un tableau de données combinées de toutes les feuilles demandées.
 */
export async function fetchGoogleSheetData(
    config: GoogleSheetConfig
): Promise<Array<{[key: string]: string}[]>> {
    try {
        const { sheetId, columns, rows, sheetGids, query } = config;

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

        return Promise.all(gids.map(async (gid)=>{
            const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?range=${range}&gid=${gid}${query?`&tq=${query}`:''}`;
            const response = await axios.get<string>(url);
    
            if (response.data.includes(')]}')) {
                const errorMessage = response.data.split(')]}')[1];
                throw new Error(`Erreur API Google Sheets : ${errorMessage}`);
            }
            
            const body = JSON.parse(response.data.match(/\((.*)\)/)![1]);
            
            const rows = body.table.rows;
            const header = rows[0].c.map((headerCell: { v: string; } ,index: number)=>{ return headerCell?.v??`emptyHeader_${index}`;});
            
            return rows.slice(1).map((row: { c: {v: string}[]; })=>{
                return Object.assign({}, ...row.c.map((cell, i) => {
                    return {[header[i]]: cell?.v ?? ''};
                }));
            });
        }));        
    } catch (error) {
        console.error('❌ Erreur lors de la récupération des données Google Sheets:', error);
        return [];
    }
}