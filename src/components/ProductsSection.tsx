import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { products, type Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Search } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

type Tab = "all" | "sweets" | "veg-pickles" | "nonveg-pickles";

const tabs: { key: Tab; label: string }[] = [
  { key: "all", label: "All Items" },
  { key: "sweets", label: "🍬 Sweets" },
  { key: "veg-pickles", label: "🥒 Veg Pickles" },
  { key: "nonveg-pickles", label: "🍗 Non-Veg Pickles" },
];

const ProductCard = ({ product, index }: { product: Product; index: number }) => {
  const [selectedWeight, setSelectedWeight] = useState(product.weights[0]);
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
      className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50"
    >
      <div className="overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-['Playfair_Display',serif] text-2xl font-bold text-[#7a1c1c] tracking-tight">{product.name}</h3>
          <p className="text-sm text-neutral-600 font-body mt-2 leading-relaxed line-clamp-2">{product.description}</p>
        </div>

        {/* Weight selector */}
        <div className="flex gap-2 mb-4">
          {product.weights.map((w) => (
            <button
              key={w}
              onClick={() => setSelectedWeight(w)}
              className={`px-3 py-1.5 rounded-md text-xs font-bold font-body transition-all ${selectedWeight === w
                ? "bg-[#7a1c1c] text-white shadow-md"
                : "bg-gray-100 text-neutral-600 hover:bg-[#fff7ed] hover:text-[#7a1c1c] border border-transparent hover:border-[#d4a017]/30"
                }`}
            >
              {w}
            </button>
          ))}
        </div>

        {/* Price + Add to Cart */}
        <div className="flex flex-col gap-3 pt-3 border-t border-gray-100 mt-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-neutral-500 font-medium">Price</span>
            <span className="font-['Playfair_Display',serif] font-bold text-[#7a1c1c] text-2xl">
              ₹{product.prices[selectedWeight]}
            </span>
          </div>
          <button
            className="w-full flex justify-center items-center gap-2 bg-[#d4a017] hover:bg-[#b8860b] text-white px-4 py-3 rounded-xl text-sm font-bold transition-all shadow-md active:scale-95 group-hover:shadow-lg"
            onClick={() => addToCart(product, selectedWeight)}
          >
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const ProductsSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const rawCategory = searchParams.get("category") as Tab | null;
  const initialCategory = rawCategory && ["all", "sweets", "veg-pickles", "nonveg-pickles"].includes(rawCategory) ? rawCategory : "all";

  const [activeTab, setActiveTab] = useState<Tab>(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (rawCategory && ["all", "sweets", "veg-pickles", "nonveg-pickles"].includes(rawCategory)) {
      setActiveTab(rawCategory);
    }
  }, [rawCategory]);

  const handleTabChange = (key: Tab) => {
    setActiveTab(key);
    setSearchParams({ category: key });
  };

  const filtered = products.filter((p) => {
    const matchesCategory = activeTab === "all" || p.category === activeTab;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-10 md:py-20 bg-[#fff7ed] min-h-[80vh]">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#7a1c1c] mb-3 md:mb-4 font-['Playfair_Display',serif]">
            Our Products
          </h2>
          <div className="w-24 h-1 bg-[#d4a017] mx-auto rounded-full opacity-60 mb-4 md:mb-6"></div>
          <p className="text-neutral-700 font-body max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            Handmade with premium ingredients, love, and traditional recipes strictly passed down through generations.
          </p>
        </motion.div>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-10">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-[#d4a017]" />
          </div>
          <input
            type="text"
            placeholder="Search for sweets, pickles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-12 pr-4 py-3.5 border-2 border-[#d4a017]/20 rounded-full leading-5 bg-white placeholder-gray-400 focus:outline-none focus:border-[#7a1c1c] focus:ring-1 focus:ring-[#7a1c1c] sm:text-sm transition-all shadow-sm focus:shadow-md"
          />
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 md:mb-14">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleTabChange(tab.key)}
              className={`px-6 py-3 rounded-full font-body text-base font-medium transition-all duration-300 border shadow-sm ${activeTab === tab.key
                ? "bg-[#7a1c1c] text-white border-[#7a1c1c] shadow-md hover:shadow-lg"
                : "bg-white text-neutral-700 border-neutral-200 hover:border-[#d4a017]/50 hover:bg-[#fff7ed]"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
