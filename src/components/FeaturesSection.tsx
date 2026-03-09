import { motion } from "framer-motion";
import { ShieldCheck, Leaf, HeartHandshake, Truck } from "lucide-react";

export const FeaturesSection = () => {
    const features = [
        {
            icon: Leaf,
            title: "100% Pure & Natural",
            description: "Made strictly with pure ingredients and absolutely no artificial colors or preservatives."
        },
        {
            icon: HeartHandshake,
            title: "Authentic Recipes",
            description: "Our recipes have been strictly passed down through generations to preserve the true taste."
        },
        {
            icon: ShieldCheck,
            title: "Premium Hygiene",
            description: "Prepared in perfectly clean and controlled environments ensuring standard quality."
        },
        {
            icon: Truck,
            title: "Fast & Fresh Delivery",
            description: "Carefully sealed and shipped so it reaches your door perfectly fresh every time."
        }
    ];

    return (
        <section className="py-20 bg-white border-y border-[#d4a017]/10">
            <div className="container mx-auto px-4 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#7a1c1c] mb-4 font-['Playfair_Display',serif]">
                        Why Choose Us
                    </h2>
                    <div className="w-24 h-1 bg-[#d4a017] mx-auto rounded-full opacity-60"></div>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[#fff7ed] rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 border border-[#d4a017]/10"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 text-[#d4a017] border border-[#d4a017]/10">
                                <feature.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-[#7a1c1c] font-['Playfair_Display',serif] mb-3">{feature.title}</h3>
                            <p className="text-neutral-600 text-sm leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
