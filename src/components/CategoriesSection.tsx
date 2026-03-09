import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import mysorePakImg from "@/assets/products/mysore_pak.png";
import mangoPickleImg from "@/assets/products/mango_pickle.png";
import chickenPickleImg from "@/assets/products/chicken_pickle.png";

const categories = [
    {
        title: "Sweets",
        id: "sweets",
        image: mysorePakImg,
        description: "Authentic traditional sweets made with pure ghee",
    },
    {
        title: "Veg Pickles",
        id: "veg-pickles",
        image: mangoPickleImg,
        description: "Spicy & tangy completely vegetarian home-made pickles",
    },
    {
        title: "Non-Veg Pickles",
        id: "nonveg-pickles",
        image: chickenPickleImg,
        description: "Rich distinct non-veg pickles with premium spices",
    },
];

const CategoriesSection = () => {
    return (
        <section className="py-24 bg-[#fff7ed]">
            <div className="container mx-auto px-4 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#7a1c1c] mb-4 font-['Playfair_Display',serif]">
                        Explore Our Categories
                    </h2>
                    <div className="w-24 h-1 bg-[#d4a017] mx-auto rounded-full opacity-60"></div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 md:gap-10">
                    {categories.map((category, i) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-[#d4a017]/10"
                        >
                            <Link to={`/products?category=${category.id}`} className="block h-full">
                                {/* Image Container */}
                                <div className="aspect-[4/3] overflow-hidden relative">
                                    <img
                                        src={category.image}
                                        alt={category.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                </div>

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-3xl font-bold text-white mb-2 font-['Playfair_Display',serif] drop-shadow-md">
                                        {category.title}
                                    </h3>
                                    <p className="text-white/80 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {category.description}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoriesSection;
