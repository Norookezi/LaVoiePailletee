import api from "./TwitchAuth";
import { fetchGoogleSheetData } from "./FetchGoogleSheets";

export interface Streamer {
    id: string;
    name: string;
    avatar: string;
    isLive: boolean;
}

export const fetchStreamersData = async (): Promise<Streamer[]> => {
    try {

      // 1️⃣ Récupérer les noms des streamers depuis la Google Sheet
      const streamerLogins = await fetchGoogleSheetData({
        sheetId: "1ggCnsqJmcA-Xxjv50NV_P9pqIZf9tc2rCz6PaYhZzNY",
        columns: "a",
        rows: "1:300"
      });

      if (streamerLogins.length === 0) {
          console.warn("⚠️ Aucun streamer trouvé dans la Google Sheet.");
          return [];
      }

      console.log("✅ Streamers récupérés depuis Google Sheet :", streamerLogins);
  
      // Récupérer les informations des utilisateurs
      const userResponse = await api.get("/users", {
        params: { login: streamerLogins },
      });
      const users = userResponse.data.data;
  
      // Récupérer les streams actifs
      const streamsResponse = await api.get("/streams", {
        params: { user_login: streamerLogins },
      });

      const liveStreamers = streamsResponse.data.data.map((stream: any) => stream.user_id);
  
      // Construire la liste des streamers avec leur statut
      return users.map((user: any) => ({
        id: user.id,
        name: user.display_name,
        avatar: user.profile_image_url,
        isLive: liveStreamers.includes(user.id),
      }));
    } catch (error) {
      console.error("Erreur lors de la récupération des streamers:", error);
      return [];
    }
  };