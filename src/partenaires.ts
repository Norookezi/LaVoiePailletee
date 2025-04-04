import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { fetchGoogleSheetData, GoogleSheetConfig } from './services/FetchGoogleSheets';
import { faInstagram, faTwitch, IconDefinition } from '@fortawesome/free-brands-svg-icons';

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
    sheetId: '1ggCnsqJmcA-Xxjv50NV_P9pqIZf9tc2rCz6PaYhZzNY', 
    sheetGids: [412412823],
    columns: 'A:Z',
    query: 'SELECT *'
};

function setSocial(socials: string[][]): { name: string, icon: IconDefinition, href: string, className?: string }[] {
    const listSocials = socials.map((v): { name: string, icon: IconDefinition, href: string, className?: string } => {
        const domain: string = v[1].includes('://') ? v[1] : `https://${v[1]}`;
        const name: string = v[1].split('.').reverse()[1];
        let icon: IconDefinition = faGlobe;
        
        switch (name) {
        case 'twitch':
            icon = faTwitch;
            break;

        case 'instagram':
            icon = faInstagram;
            break;
        }

        return {
            href: domain,
            name: name,
            icon: icon
        };
    });


    return listSocials;
}

// Dynamically get partners and return it
export const getPartenaires = async (): Promise<partnerType[]> => {
    // Object initialization
    let partners: partnerType[] = [];
    try {
    // Fetch datas
        const data: {[key: string]: string}[] = (await fetchGoogleSheetData(sheetConfig))[0];
        // Map all data
        if (typeof data != 'string') {
            return data.map((partner: {[key: string]: string}): partnerType =>{
                const image: string | undefined = partner['image'].match(/drive\.google\.com\/file\/d\/([A-Za-z0-9-_]{1,})/)?.[1];
                return {
                    name: partner['nom'],
                    image: image ? `https://lh3.googleusercontent.com/d/${image}` : '',
                    description: partner['description']??'',
                    className: partner['style'],
                    socials: setSocial(Object.entries(partner).filter(([key,value]) => key.startsWith('emptyHeader_') && value != '' ))
                };});
        }    
    } catch (error) {
        console.error('Erreur lors de la récupération des données : ', error);
    }
    return partners;
};
