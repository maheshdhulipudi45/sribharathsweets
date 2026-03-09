import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import herobg from "@/assets/hero-bg.jpg";

const WHATSAPP_NUMBER = "919030445369";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center bg-background overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50 sm:bg-black/40 z-0"></div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md text-[#fff7ed] font-body text-sm font-semibold mb-8 border border-white/20"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#d4a017] animate-pulse"></span>
            Authentic & Traditional
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.15] mb-6 font-['Playfair_Display',serif] drop-shadow-lg">
            Sri Bharath <br />
            <span className="text-[#d4a017]">Sweets & Pickles</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 font-body mb-10 max-w-2xl leading-relaxed drop-shadow-md">
            Authentic homemade sweets & pickles crafted with traditional recipes and fresh ingredients.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row flex-wrap gap-5 justify-center"
          >
            <Button asChild className="bg-[#7a1c1c] hover:bg-[#8f2121] text-white text-lg px-10 py-7 rounded-full shadow-xl transition-all hover:scale-105 active:scale-95 group font-medium border-0">
              <Link to="/products">
                Order Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 hover:text-white text-lg px-10 py-7 rounded-full shadow-lg transition-all group font-medium">
              <a href={`tel:+917658956116`}>
                <Phone className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Call Us
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section >
  );
};

export default HeroSection;
