import snakePlant from "@assets/generated_images/snake_plant_in_a_beige_pot.png";
import peaceLily from "@assets/generated_images/peace_lily_in_a_beige_pot.png";
import monstera from "@assets/generated_images/monstera_deliciosa_in_a_beige_pot.png";
import fiddleLeaf from "@assets/generated_images/fiddle_leaf_fig_in_a_beige_pot.png";

export interface Product {
  id: number;
  name: string;
  scientificName: string;
  price: number;
  image: string;
  description: string;
  benefits: string[];
  care: {
    light: string;
    water: string;
    level: string;
  };
  purificationScore: number; // 1-10
}

export const products: Product[] = [
  {
    id: 1,
    name: "Snake Plant",
    scientificName: "Sansevieria Trifasciata",
    price: 35.00,
    image: snakePlant,
    description: "The Snake Plant is an architectural beauty that's virtually indestructible. It's one of the few plants that release oxygen at night, making it perfect for bedrooms.",
    benefits: ["Removes formaldehyde", "Releases oxygen at night", "Drought tolerant"],
    care: {
      light: "Low to bright indirect",
      water: "Low (every 2-3 weeks)",
      level: "Beginner",
    },
    purificationScore: 9,
  },
  {
    id: 2,
    name: "Peace Lily",
    scientificName: "Spathiphyllum",
    price: 42.00,
    image: peaceLily,
    description: "With its elegant white blooms and dark green leaves, the Peace Lily is a classic air purifier. It tells you when it's thirsty by drooping slightly.",
    benefits: ["Removes mold spores", "Filters ammonia", "Increases humidity"],
    care: {
      light: "Low to medium indirect",
      water: "Medium (weekly)",
      level: "Beginner",
    },
    purificationScore: 8,
  },
  {
    id: 3,
    name: "Monstera Deliciosa",
    scientificName: "Monstera Deliciosa",
    price: 55.00,
    image: monstera,
    description: "The iconic 'Swiss Cheese Plant' brings instant tropical vibes. Its large leaves are excellent at trapping dust and particulate matter from the air.",
    benefits: ["Traps dust particles", "Humidifies air", "Statement piece"],
    care: {
      light: "Bright indirect",
      water: "Medium (weekly)",
      level: "Intermediate",
    },
    purificationScore: 7,
  },
  {
    id: 4,
    name: "Fiddle Leaf Fig",
    scientificName: "Ficus Lyrata",
    price: 89.00,
    image: fiddleLeaf,
    description: "A stunning structural plant with large, violin-shaped leaves. It's a powerful air purifier that commands attention in any room.",
    benefits: ["High oxygen production", "Absorbs noise", "Visual impact"],
    care: {
      light: "Bright indirect",
      water: "Medium (when top inch dry)",
      level: "Advanced",
    },
    purificationScore: 8,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah J.",
    role: "Interior Designer",
    text: "Oxygen's plants completely transformed my studio. The air feels lighter, and the aesthetic is unmatched.",
  },
  {
    id: 2,
    name: "David K.",
    role: "Architect",
    text: "I recommend Oxygen to all my clients. It's not just decor; it's a functional health upgrade for any home.",
  },
  {
    id: 3,
    name: "Elena R.",
    role: "Wellness Coach",
    text: "The quality of these plants is incredible. You can feel the difference in air quality within days.",
  },
];
