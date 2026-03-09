import ladduImg from "@/assets/products/laddu.png";
import kajuKatliImg from "@/assets/products/kaju_katli.png";
import mangoPickleImg from "@/assets/products/mango_pickle.png";
import chickenPickleImg from "@/assets/products/chicken_pickle.png";
import bobbattluImg from "@/assets/products/bobbattlu.png";
import pootharekuluImg from "@/assets/products/pootharekulu.png";
import mysorePakImg from "@/assets/products/mysore_pak.png";
import badushaImg from "@/assets/products/badusha.png";
import jangriImg from "@/assets/products/jangri.png";
import jalebiImg from "@/assets/products/jalebi.png";
import rasgullaImg from "@/assets/products/rasgulla.png";
import kalakandImg from "@/assets/products/kalakand.png";
import dryFruitSweetImg from "@/assets/products/dry_fruit_sweet.png";
import tomatoPickleImg from "@/assets/products/tomato_pickle.png";
import lemonPickleImg from "@/assets/products/lemon_pickle.png";

export interface Product {
  id: string;
  name: string;
  description: string;
  category: "sweets" | "veg-pickles" | "nonveg-pickles";
  image: string;
  weights: string[];
  prices: Record<string, number>;
}

export const products: Product[] = [
  // Sweets
  { id: "s1", name: "Bobbattlu", description: "Authentic traditional stuffed flatbread", category: "sweets", image: bobbattluImg, weights: ["250g", "500g", "1kg"], prices: { "250g": 160, "500g": 300, "1kg": 580 } },
  { id: "s2", name: "Pootharekulu", description: "Thin paper-like sweet stuffed with dry fruits", category: "sweets", image: pootharekuluImg, weights: ["250g", "500g", "1kg"], prices: { "250g": 180, "500g": 350, "1kg": 680 } },
  { id: "s3", name: "Laddu", description: "Traditional besan laddu with ghee", category: "sweets", image: ladduImg, weights: ["250g", "500g", "1kg"], prices: { "250g": 150, "500g": 280, "1kg": 520 } },
  { id: "s4", name: "Kaju Katli", description: "Premium cashew barfi slices", category: "sweets", image: kajuKatliImg, weights: ["250g", "500g", "1kg"], prices: { "250g": 250, "500g": 480, "1kg": 900 } },
  { id: "s5", name: "Boondi Laddu", description: "Sweet boondi shaped into laddus", category: "sweets", image: ladduImg, weights: ["250g", "500g", "1kg"], prices: { "250g": 140, "500g": 260, "1kg": 500 } },
  { id: "s6", name: "Mysore Pak", description: "Soft melt-in-mouth mysore pak", category: "sweets", image: mysorePakImg, weights: ["250g", "500g", "1kg"], prices: { "250g": 180, "500g": 340, "1kg": 650 } },
  { id: "s7", name: "Badusha", description: "Flaky sweet soaked in sugar syrup", category: "sweets", image: badushaImg, weights: ["250g", "500g", "1kg"], prices: { "250g": 130, "500g": 240, "1kg": 460 } },
  { id: "s8", name: "Jangri", description: "Crispy spiral shaped sweet", category: "sweets", image: jangriImg, weights: ["250g", "500g", "1kg"], prices: { "250g": 120, "500g": 220, "1kg": 420 } },
  { id: "s9", name: "Jalebi", description: "Crispy golden jalebis in syrup", category: "sweets", image: jalebiImg, weights: ["250g", "500g", "1kg"], prices: { "250g": 100, "500g": 180, "1kg": 340 } },
  { id: "s10", name: "Rasgulla", description: "Spongy cottage cheese balls", category: "sweets", image: rasgullaImg, weights: ["250g", "500g", "1kg"], prices: { "250g": 140, "500g": 260, "1kg": 480 } },
  { id: "s11", name: "Kalakand", description: "Delicious milk cake sweet", category: "sweets", image: kalakandImg, weights: ["250g", "500g", "1kg"], prices: { "250g": 170, "500g": 320, "1kg": 600 } },
  { id: "s12", name: "Dry Fruit Sweet", description: "Rich sweet loaded with dry fruits", category: "sweets", image: dryFruitSweetImg, weights: ["250g", "500g", "1kg"], prices: { "250g": 280, "500g": 540, "1kg": 1000 } },

  // Veg Pickles
  { id: "vp1", name: "Mango Pickle", description: "Tangy raw mango pickle", category: "veg-pickles", image: mangoPickleImg, weights: ["250g", "500g", "1kg"], prices: { "250g": 100, "500g": 180, "1kg": 340 } },
  { id: "vp2", name: "Tomato Pickle", description: "Spicy tomato pickle with mustard", category: "veg-pickles", image: tomatoPickleImg, weights: ["250g", "500g", "1kg"], prices: { "250g": 90, "500g": 160, "1kg": 300 } },
  { id: "vp3", name: "Lemon Pickle", description: "Zesty lemon pickle with spices", category: "veg-pickles", image: lemonPickleImg, weights: ["250g", "500g", "1kg"], prices: { "250g": 90, "500g": 160, "1kg": 300 } },
  { id: "vp4", name: "Gongura Pickle", description: "Authentic Andhra gongura pickle", category: "veg-pickles", image: mangoPickleImg, weights: ["250g", "500g", "1kg"], prices: { "250g": 110, "500g": 200, "1kg": 380 } },
  { id: "vp5", name: "Mixed Veg Pickle", description: "Blend of seasonal vegetables", category: "veg-pickles", image: mangoPickleImg, weights: ["250g", "500g", "1kg"], prices: { "250g": 100, "500g": 180, "1kg": 340 } },

  // Non-Veg Pickles
  { id: "nvp1", name: "Chicken Pickle", description: "Spicy boneless chicken pickle", category: "nonveg-pickles", image: chickenPickleImg, weights: ["250g", "500g", "1kg"], prices: { "250g": 200, "500g": 380, "1kg": 720 } },
  { id: "nvp2", name: "Mutton Pickle", description: "Rich mutton pickle with spices", category: "nonveg-pickles", image: chickenPickleImg, weights: ["250g", "500g", "1kg"], prices: { "250g": 250, "500g": 480, "1kg": 900 } },
  { id: "nvp3", name: "Fish Pickle", description: "Traditional fish pickle recipe", category: "nonveg-pickles", image: chickenPickleImg, weights: ["250g", "500g", "1kg"], prices: { "250g": 220, "500g": 420, "1kg": 800 } },
  { id: "nvp4", name: "Prawn Pickle", description: "Premium prawn pickle", category: "nonveg-pickles", image: chickenPickleImg, weights: ["250g", "500g", "1kg"], prices: { "250g": 280, "500g": 540, "1kg": 1000 } },
];
