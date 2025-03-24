import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

interface partnerType {
    name: string;
    image: string;
    description: string;
    className?: string;
    socials?: {
      name: string;
      icon: IconDefinition;
      href: string;
      className?: string;
    }[]
}

const partenaires: partnerType[] = [
    {
      name: "le loup des balkans",
      image: "/images/partenaires/le_loup_des_balkans.webp",
      description:
        "war shore everybody mice rising brown night how warm roll imagine while until instance dug division girl sit race fence check palace surface influence.\ncow government body oxygen easily street war age baby climate coat point hollow wore bare sale music enter chemical rising tightly noise excellent practice",
    },
    {
      name: "epitech strasbourg",
      image: "/images/partenaires/epitech_strasbourg.webp",
      description:
        "zoo giving fort automobile almost single supper date roar happened mood mine tune plus cave softly slipped sunlight asleep factor figure sit where certain",
      className: "!bg-blue-700",
    },
    {
      name: "level gaming corner",
      image: "/images/partenaires/level_gaming_corner.webp",
      description:
        "image happy practical fed met sister cost several for itself thee on came smoke cattle let raw peace poem remain terrible nuts select willing",
    },
    {
      name: "la cybergrange",
      image: "/images/partenaires/la_cybergrange.webp",
      description:
        "contrast mill according shot answer rock strip human certain gave strength applied earlier monkey almost over occasionally consist plain poet fully man blow wish",
    },
    {
      name: "afb",
      image: "/images/partenaires/afb.webp",
      description:
        "scared statement raise after transportation mine past country fact for society one exclaimed lonely shoot travel different page combination dress bank sheet take simple",
    },
    {
      name: "ai licia",
      image: "/images/partenaires/ai_licia.webp",
      description:
        "do changing nervous single mouth call station them sick printed flat teach environment lamp sink hardly create wonderful younger night age together nor prize",
    },
    {
      name: "east games",
      image: "/images/partenaires/east_games.webp",
      description:
        "balance just price brush coat everybody before blue close equally rough turn book pure slope sing spider enjoy thread broad nearer warm heart related",
    },
    {
      name: "hotel graffalgar",
      image: "/images/partenaires/hotel_graffalgar.webp",
      description:
        "doubt brown selection have including exciting sick they theory basic thank definition frame movement route fast create entire ago lost stronger proud however slide",
    },
    {
      name: "iconic",
      image: "/images/partenaires/iconic.webp",
      description:
        "distant tales getting garage feature popular captured public official put wonderful pencil rubber although century lead clay silly music tropical lunch practical yard bone",
    },
    {
      name: "le shadok",
      image: "/images/partenaires/le_shadok.webp",
      description:
        "married massage lose human queen if slow inch run hungry quarter improve little useful tell attached leather when thou loose official appropriate sale specific",
    },
    {
      name: "skillcamp",
      image: "/images/partenaires/skillcamp.webp",
      description:
        "combination subject cold clock bus slipped angle leaving pass form fruit hall vowel load account fellow pound headed desk race swept creature pressure harder",
    },
    {
      name: "vent divin",
      image: "/images/partenaires/vent_divin.webp",
      description:
        "come afternoon scared team grade you hung pilot ill pan recognize attached feed had rubbed mine original wealth village people heavy flame moon cut",
    },
  ];
  
export { partenaires };