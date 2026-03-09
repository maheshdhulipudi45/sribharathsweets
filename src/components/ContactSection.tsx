import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "919876543210";

const contactDetails = [
  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
  { icon: Mail, label: "Email", value: "sribharathsweets@gmail.com" },
  { icon: MapPin, label: "Address", value: "Main Road, Ramachandrapuram, Konaseema, AP" },
  { icon: Clock, label: "Business Hours", value: "Mon–Sat: 8AM – 9PM" },
  { icon: Instagram, label: "Instagram", value: "@sribharathsweets" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*Contact Inquiry*%0A%0A*Name:* ${form.name}%0A*Email:* ${form.email}%0A*Message:* ${form.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Get In Touch</h2>
          <p className="text-muted-foreground font-body">We'd love to hear from you</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl p-8 shadow-card space-y-6"
          >
            <h3 className="font-heading text-xl font-bold text-primary">Contact Details</h3>
            {contactDetails.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center flex-shrink-0">
                  <item.icon size={18} className="text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-body">{item.label}</p>
                  <p className="text-sm font-medium text-foreground font-body">{item.value}</p>
                </div>
              </div>
            ))}

            <Button variant="whatsapp" className="w-full gap-2 mt-4" asChild>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </Button>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl p-8 shadow-card"
          >
            <h3 className="font-heading text-xl font-bold text-primary mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { name: "name", label: "Your Name", type: "text" },
                { name: "email", label: "Your Email", type: "email" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="text-sm font-medium text-foreground font-body">{field.label}</label>
                  <input
                    name={field.name}
                    type={field.type}
                    required
                    value={form[field.name as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
                    className="w-full mt-1 px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
              ))}
              <div>
                <label className="text-sm font-medium text-foreground font-body">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full mt-1 px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                />
              </div>
              <Button type="submit" variant="accent" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
