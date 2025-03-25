import axios from "axios";

/**
 * Interface pour la configuration d'une Google Sheet à récupérer.
 */
export interface GoogleSheetConfig {
    sheetId: string;
    sheetGids?: number[];
    columns?: string;
    rows?: string;    
}



/**
 * Récupère des données spécifiques d'un Google Sheet sous forme de tableau de strings.
 * @param config Configuration contenant l'ID de la feuille, les colonnes, les lignes et les GID.
 * @returns Un tableau de données combinées de toutes les feuilles demandées.
 */
export async function fetchGoogleSheetData(config: GoogleSheetConfig): Promise<string[]> {
    try {
        const { sheetId, columns, rows, sheetGids } = config;

        let range = "";

        // Gestion de la plage de données (colonnes/lignes)
        if (!columns && !rows) {
            range = "A:Z"; // Toute la feuille
        } else if (columns && !rows) {
            range = columns
                .split(",")
                .map(col => col.trim())
                .map(col => (col.includes(":") ? col : `${col}:${col}`))
                .join(",");
        } else if (!columns && rows) {
            range = rows
                .split(",")
                .map(row => row.trim())
                .map(row => (row.includes(":") ? `A${row}:Z${row}` : `A${row}:Z${row}`))
                .join(",");
        } else if (columns && rows) {
            const columnsArray = columns.split(",").map(col => col.trim());
            const rowsArray = rows.split(",").map(row => row.trim());
            range = columnsArray
                .map(col =>
                    rowsArray
                        .map(row => (row.includes(":") ? `${col}${row}` : `${col}${row}:${col}${row}`))
                        .join(",")
                )
                .join(",");
        }

        // Liste des `gid` à traiter (si aucune n'est renseignée, prendre `gid=0` par défaut)
        const gids = sheetGids && sheetGids.length > 0 ? sheetGids : [0];

        let allData: string[] = [];

        for (const gid of gids) {
            const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&range=${range}&gid=${gid}`;
            const response = await axios.get(url);

            if (response.data.includes(")]}")) {
                const errorMessage = response.data.split(")]}")[1];
                throw new Error(`Erreur API Google Sheets : ${errorMessage}`);
            }

            const rowsData: string[][] = response.data
                .trim()
                .split("\n")
                .map((row: string) => row.split(",").map(value => value.replace(/(^"|"$)/g, "")));

            const flattenedData = rowsData.flat().filter(item => item.trim() !== "");

            allData = [...allData, ...flattenedData];
        }

        return allData;
    } catch (error: any) {
        console.error("❌ Erreur lors de la récupération des données Google Sheets:", error.message || error);
        return [];
    }
}