import { motion } from "framer-motion";
import { Award, Heart, Truck, ShieldCheck } from "lucide-react";

const features = [
  { icon: Heart, title: "Made with Love", desc: "Every product is handcrafted with care and passion" },
  { icon: Award, title: "Premium Quality", desc: "Only the finest ingredients in every batch" },
  { icon: Truck, title: "Fast Delivery", desc: "Quick doorstep delivery across India" },
  { icon: ShieldCheck, title: "100% Hygienic", desc: "Prepared in clean, certified kitchens" },
];

const AboutSection = () => (
  <section id="about" className="py-20 bg-muted/30">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Why Choose Us</h2>
        <p className="text-muted-foreground font-body max-w-lg mx-auto">
          Sri Bharath Sweets & Pickles has been serving authentic homemade delicacies for years, bringing the taste of tradition to your home.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 shadow-card text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl gradient-accent flex items-center justify-center">
              <f.icon size={24} className="text-secondary-foreground" />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground font-body">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
