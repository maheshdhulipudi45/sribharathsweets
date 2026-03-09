import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "919030445369";

const contactDetails = [
    { icon: Phone, label: "Phone", value: "+91 76589 56116" },
    { icon: Mail, label: "Email", value: "sribharathsweets@gmail.com" },
    { icon: MapPin, label: "Address", value: "Main Road, Ramachandrapuram, Konaseema, AP" },
    { icon: Clock, label: "Business Hours", value: "Mon–Sat: 8AM – 9PM" },
];

const ContactPage = () => {
    const [form, setForm] = useState({ name: "", phone: "", message: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const msg = `*Contact Inquiry*%0A%0A*Name:* ${form.name}%0A*Phone:* ${form.phone}%0A*Message:* ${form.message}`;
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
        setForm({ name: "", phone: "", message: "" });
    };

    return (
        <div className="pt-24 pb-20 bg-background min-h-screen">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-heading">Get In Touch</h1>
                    <p className="text-muted-foreground font-body">We'd love to hear from you</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
                    {/* Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-card rounded-xl p-8 shadow-card h-full flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="font-heading text-2xl font-bold text-primary mb-6">Contact Details</h3>
                            <div className="space-y-6">
                                {contactDetails.map((item) => (
                                    <div key={item.label} className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center flex-shrink-0 shadow-sm">
                                            <item.icon size={20} className="text-secondary-foreground" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground font-body mb-1">{item.label}</p>
                                            <p className="text-base font-medium text-foreground font-body">{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Button variant="whatsapp" className="w-full gap-2 mt-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all" asChild>
                            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Sri%20Bharath%20Sweets,%20I%20want%20to%20contact%20you.`} target="_blank" rel="noopener noreferrer">
                                <MessageCircle size={22} className="animate-pulse" />
                                Chat on WhatsApp
                            </a>
                        </Button>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-card rounded-xl p-8 shadow-card border border-border"
                    >
                        <h3 className="font-heading text-2xl font-bold text-primary mb-6">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="text-sm font-medium text-foreground font-body block mb-1.5">Your Name</label>
                                <input
                                    name="name"
                                    type="text"
                                    required
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border border-border/60 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-shadow shadow-sm"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-foreground font-body block mb-1.5">Your Phone Number</label>
                                <input
                                    name="phone"
                                    type="tel"
                                    required
                                    value={form.phone}
                                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border border-border/60 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-shadow shadow-sm"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-foreground font-body block mb-1.5">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows={4}
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border border-border/60 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-shadow shadow-sm resize-none"
                                    placeholder="How can we help you?"
                                />
                            </div>
                            <Button type="submit" variant="accent" size="lg" className="w-full py-6 text-base font-semibold rounded-xl shadow-md hover:shadow-lg transition-all">
                                Send Message
                            </Button>
                        </form>
                    </motion.div>
                </div>

                {/* Google Maps Embed */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-5xl mx-auto mt-12 bg-card rounded-xl shadow-card overflow-hidden border border-border h-[400px]"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.123512345!2d82.0123!3d16.8123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQ4JzQ0LjMiTiA4MsKwMDAnNDQuMyJF!5e0!3m2!1sen!2sin!4v1611234567890!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        title="Google Maps Location"
                    ></iframe>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactPage;
