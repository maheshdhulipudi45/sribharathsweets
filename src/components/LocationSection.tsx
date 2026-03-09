import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

export const LocationSection = () => {
    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#7a1c1c] mb-4 font-['Playfair_Display',serif]">
                        Visit Our Store
                    </h2>
                    <div className="w-24 h-1 bg-[#d4a017] mx-auto rounded-full opacity-60"></div>
                    <p className="text-neutral-600 mt-6 max-w-2xl mx-auto text-lg">
                        Experience the rich aroma of fresh ghee sweets and tangy pickles right where the magic happens.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-10 items-center">
                    {/* Info Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 bg-[#7a1c1c] text-white p-10 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
                    >
                        {/* Decor */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#d4a017]/20 rounded-full blur-3xl"></div>

                        <div className="relative z-10 space-y-10">
                            <div>
                                <h3 className="text-3xl font-bold font-['Playfair_Display',serif] mb-2 text-[#fff7ed]">
                                    Sri Bharath Sweets & Pickles
                                </h3>
                                <p className="text-white/80 font-medium">Authentic Godavari Tastes</p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                                        <MapPin className="text-[#d4a017]" size={22} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-white/60 mb-1 uppercase tracking-wider font-semibold">Location</p>
                                        <p className="text-lg leading-relaxed text-[#fff7ed]">Main Road, Ramachandrapuram,<br />Konaseema District, AP</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                                        <Phone className="text-[#d4a017]" size={22} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-white/60 mb-1 uppercase tracking-wider font-semibold">Contact</p>
                                        <p className="text-lg text-[#fff7ed]">+91 76589 56116</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                                        <Clock className="text-[#d4a017]" size={22} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-white/60 mb-1 uppercase tracking-wider font-semibold">Hours</p>
                                        <p className="text-lg text-[#fff7ed]">Mon-Sun: 7:00 AM – 10:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                rel="noreferrer"
                                className="w-full mt-4 flex items-center justify-center gap-2 bg-[#d4a017] hover:bg-[#b8860b] text-white py-4 rounded-xl text-lg font-bold transition-all hover:scale-105 active:scale-95 shadow-lg group border-none"
                            >
                                <Navigation size={20} className="group-hover:animate-bounce" />
                                Get Directions
                            </a>
                        </div>
                    </motion.div>

                    {/* Map Embed */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3 h-[400px] lg:h-[550px] rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-[#fff7ed]"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.123512345!2d82.0123!3d16.8123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQ4JzQ0LjMiTiA4MsKwMDAnNDQuMyJF!5e0!3m2!1sen!2sin!4v1611234567890!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            title="Sri Bharath Sweets Location"
                            className="filter contrast-100 saturate-150"
                        ></iframe>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LocationSection;
