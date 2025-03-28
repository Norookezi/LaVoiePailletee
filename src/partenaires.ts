import { fetchGoogleSheetData, GoogleSheetConfig } from "./services/FetchGoogleSheets";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

// Type for partner
export interface partnerType {
  name: string;
  image: string;
  description: string;
  className?: string;
  socials?: {
    name: string;
    icon: IconDefinition;
    href: string;
    className?: string;
  }[];
}

// Configuration of googleSheet api call
const sheetConfig: GoogleSheetConfig = {
  sheetId: "1ggCnsqJmcA-Xxjv50NV_P9pqIZf9tc2rCz6PaYhZzNY", 
  sheetGids: [412412823],
  columns: "A,B,C,D",
  returnObjects: true,
};

// Dynamically get partners and return it
export const getPartenaires = async (): Promise<partnerType[]> => {
  // Object initialization
  let partners: partnerType[] = [];
  try {
    // Fetch datas
    const data = await fetchGoogleSheetData(sheetConfig);

    // Map all data
    partners = data.map((partner: any) => {
      // Default image path
      let imageUrl = `${window.location.origin}/images/partenaires/default-image.webp`;

      // Check if image header is not empty or "N/A"
      if (partner.image && partner.image !== "N/A" && partner.image.trim() !== "") {
        const imageLink = partner.image.trim();
        
        // If image is from google drive, convert it for display
        if (imageLink.includes("drive.google.com")) {
          const regex = /https:\/\/drive\.google\.com\/file\/d\/([^/]+)/;
          const match = imageLink.match(regex);

          if (match && match[1]) {
            const fileId = match[1];
            imageUrl = `https://drive.google.com/thumbnail?id=${fileId}&export=view&authuser=0`;
          }
        } else {
          // another image link, just display it
          imageUrl = imageLink;
        }
      }

      // return of all datas
      return {
        name: partner.nom || "Nom inconnu",
        image: imageUrl,
        description: partner.description || "Description manquante",
        className: partner.style || "",
      };
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des données : ", error);
  }
  return partners;
};
