import { motion } from "framer-motion";
import { Leaf, Heart, ShieldCheck, Utensils, Star, BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";
import herobg from "@/assets/hero-bg.jpg";
import handcraftedImg from "@/assets/handcrafted.png";

const AboutPage = () => {
    return (
        <div className="bg-[#fff7ed] text-neutral-800 font-['Poppins',sans-serif] min-h-screen">

            {/* 🖼 HERO BACKGROUND BANNER SECTION */}
            <section className="relative h-[45vh] md:h-[55vh] flex items-center justify-center overflow-hidden rounded-b-[3rem] shadow-lg mb-12">
                <div className="absolute inset-0 bg-[#7a1c1c]/70 z-10 mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/40 z-10" />
                <img
                    src={herobg}
                    alt="Traditional Indian Sweets"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative z-20 text-center px-4 max-w-4xl mx-auto pt-16"
                >
                    <div className="inline-flex items-center gap-2 bg-[#d4a017]/20 border border-[#d4a017]/50 text-[#fcd34d] px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
                        <Star className="w-4 h-4 fill-[#fcd34d]" />
                        Since 1989
                        <Star className="w-4 h-4 fill-[#fcd34d]" />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white font-['Playfair_Display',serif] drop-shadow-2xl leading-tight mb-2">
                        The Royal Taste of <br />
                        <span className="text-[#d4a017] italic font-light">Authentic Tradition</span>
                    </h1>
                </motion.div>
            </section>

            {/* Main Content Container */}
            <div className="container mx-auto px-4 lg:px-8 py-16 md:py-24 max-w-[1200px]">

                {/* OUR STORY SECTION (Side by Side) */}
                <section className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="order-2 md:order-1 relative rounded-[2rem] overflow-hidden group shadow-2xl h-[400px] md:h-[600px] border-[6px] border-white"
                    >
                        <div className="absolute inset-0 bg-[#d4a017]/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                        <img
                            src={handcraftedImg}
                            alt="Handcrafting Sweets"
                            className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700"
                        />
                        {/* Stamp */}
                        <div className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur-md p-4 rounded-full shadow-lg border border-[#d4a017]/20 flex flex-col items-center justify-center w-28 h-28 transform rotate-12">
                            <BadgeCheck className="text-[#d4a017] w-8 h-8 mb-1" />
                            <span className="text-[10px] font-bold text-[#7a1c1c] uppercase tracking-widest text-center leading-tight">100% Quality</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="order-1 md:order-2"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-[#7a1c1c] font-['Playfair_Display',serif] mb-6">
                            Our Journey
                        </h2>
                        <div className="w-20 h-1.5 bg-[#d4a017] rounded-full mb-8 opacity-90"></div>

                        <div className="space-y-6 text-lg text-neutral-600 leading-relaxed font-light">
                            <h3 className="text-xl md:text-2xl font-['Playfair_Display',serif] text-[#d4a017] font-medium leading-relaxed italic mb-4">
                                "Every recipe is perfectly handcrafted with natural ingredients to preserve the original rich taste of Godavari district, Andhra Pradesh."
                            </h3>
                            <p>
                                <strong className="text-[#7a1c1c] font-semibold">Sri Bharath Sweets & Pickles</strong> started as a humble home kitchen in Ramachandrapuram, Andhra Pradesh. We began entirely with the pure intention of making authentic, homestyle sweets and snacks for close family members and small religious functions.
                            </p>
                            <p>
                                Word of mouth rapidly spread regarding the unmatched taste of our pure ghee preparations and distinct village-style spicy pickles. Our neighborhood soon became our earliest loyal customer base.
                            </p>
                            <div className="border-l-4 border-[#d4a017] pl-6 py-2 my-8 italic text-xl text-neutral-800 font-['Playfair_Display',serif] bg-white/50 rounded-r-2xl">
                                "Today, we take immense pride in delivering that exact same nostalgic homemade flavor to thousands of homes across the entire state."
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* CORE VALUES (Grid layout) */}
                <section className="mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-[#7a1c1c] font-['Playfair_Display',serif] mb-6">
                            The Secret to Our Taste
                        </h2>
                        <div className="w-24 h-1.5 bg-[#d4a017] mx-auto rounded-full opacity-90"></div>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {[
                            {
                                title: "Pure Ingredients",
                                desc: "We strictly source pure milk, premium quality nuts, and original country spices.",
                                icon: Leaf
                            },
                            {
                                title: "Made with Love",
                                desc: "Every single batch is lovingly crafted by hands that mastered these recipes.",
                                icon: Heart
                            },
                            {
                                title: "Strict Hygiene",
                                desc: "Prepared in absolutely sanitized environments ensuring 100% safety standards.",
                                icon: ShieldCheck
                            },
                            {
                                title: "Ancient Recipes",
                                desc: "We do not compromise. The recipes are strictly passed down through grandmothers.",
                                icon: Utensils
                            },
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 lg:p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(212,160,23,0.12)] border border-transparent hover:border-[#d4a017]/30 transition-all duration-300 group flex flex-col items-center text-center"
                            >
                                <div className="w-[80px] h-[80px] rounded-[1.5rem] bg-[#fff7ed] flex items-center justify-center mb-6 text-[#d4a017] group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 shadow-inner border border-[#d4a017]/10">
                                    <card.icon size={36} className="group-hover:text-[#7a1c1c] transition-colors duration-300" />
                                </div>
                                <h3 className="text-2xl font-bold font-['Playfair_Display',serif] text-[#7a1c1c] mb-4">{card.title}</h3>
                                <p className="text-neutral-500 flex-1 leading-relaxed">{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* BOTTOM CALL TO ACTION */}
                <section>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full bg-gradient-to-br from-[#d4a017] to-[#b8860b] text-white rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden shadow-[0_10px_40px_rgba(212,160,23,0.3)]"
                    >
                        {/* Background patterns */}
                        <div className="absolute top-0 right-0 w-80 h-80 bg-white/20 rounded-full pointer-events-none transform translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#7a1c1c]/10 rounded-full pointer-events-none transform -translate-x-1/2 translate-y-1/2 blur-2xl"></div>

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display',serif] mb-6 leading-tight drop-shadow-sm text-white">
                                Craving The True Taste of Godavari?
                            </h2>
                            <p className="text-white/95 text-lg md:text-xl font-medium mb-10 leading-relaxed">
                                Explore our massive collection of authentic homemade sweets, freshly prepared hot snacks, and spicy mango pickles right now!
                            </p>

                            <Link
                                to="/products"
                                className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white bg-[#7a1c1c] hover:bg-[#5c1515] rounded-full transition-all duration-300 shadow-xl hover:-translate-y-1 border-2 border-transparent hover:border-white/20"
                            >
                                View Our Menu
                            </Link>
                        </div>
                    </motion.div>
                </section>

            </div>
        </div>
    );
};

export default AboutPage;
