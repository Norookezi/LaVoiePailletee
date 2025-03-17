import api from "./TwitchAuth";

export interface Streamer {
    id: string;
    name: string;
    avatar: string;
    isLive: boolean;
}

const streamerLogins = ["mehdoche", "camak", "h0ldhaven", "petounio", "thainozis", "agwab", "chatoningame", "terracid", "roi_louis", "zerator", "antoinedaniel", "joueur_du_grenier", "alexclick"];

export const fetchStreamersData = async (): Promise<Streamer[]> => {
    try {
  
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