import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "Srinivas Rao",
            location: "Rajahmundry",
            text: "The taste of Pootharekulu literally took me back to my childhood! The quality of Ghee used is extremely pure. I highly recommend Sri Bharath to all my relatives.",
        },
        {
            name: "Lakshmi Devi",
            location: "Kakinada",
            text: "Their Spicy Mango Pickle is an absolute standout. It has the authentic Godavari district touch that I couldn't find anywhere else. Packaging was also perfectly sealed.",
        },
        {
            name: "Venkat Reddy",
            location: "Hyderabad",
            text: "I ordered Chicken Pickle and Kaju Katli for a family get together. The delivery was fast, fresh, and every single person loved the food! 100% money well spent.",
        },
        {
            name: "Radhika K.",
            location: "Vizag",
            text: "The Boondi Laddu melts in your mouth! Absolutely loved the packaging and the delivery was extremely fast. 10/10 will order every festival season.",
        },
        {
            name: "Naveen Kumar",
            location: "Vijayawada",
            text: "As someone who misses home food, the Gongura Pickle is a lifesaver. It tastes exactly like how my grandmother used to make it. Quality is top notch.",
        }
    ];

    const CustomNextArrow = (props: any) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} custom-slick-arrow next-arrow hidden md:flex items-center justify-center`}
                style={{
                    ...style,
                    display: "flex",
                    background: "#7a1c1c",
                    borderRadius: "50%",
                    width: "48px",
                    height: "48px",
                    zIndex: 20,
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
                onClick={onClick}
            />
        );
    };

    const CustomPrevArrow = (props: any) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} custom-slick-arrow prev-arrow hidden md:flex items-center justify-center`}
                style={{
                    ...style,
                    display: "flex",
                    background: "#7a1c1c",
                    borderRadius: "50%",
                    width: "48px",
                    height: "48px",
                    zIndex: 20,
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
                onClick={onClick}
            />
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        cssEase: "ease-in-out",
        swipeToSlide: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: true,
                    variableWidth: true, // Enables true horizontal swiping for proper min-width cards
                }
            }
        ]
    };

    return (
        <section className="py-20 md:py-32 bg-[#fff7ed] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#7a1c1c]/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-[1240px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-[#d4a017] font-bold tracking-widest uppercase text-sm mb-4 block">Testimonials</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#7a1c1c] mb-6 font-['Playfair_Display',serif]">
                        What Our Customers Say
                    </h2>
                    <div className="w-24 h-1.5 bg-[#d4a017] mx-auto rounded-full opacity-80"></div>
                </motion.div>

                {/* Wrapper adds padding so arrows can comfortably sit purely outside the track */}
                <div className="testimonial-wrapper relative px-10 md:px-16">
                    <Slider {...settings} className="slick-custom-wrapper">
                        {testimonials.map((item, i) => (
                            <div key={i} className="px-3 md:px-4 py-8 h-full flex justify-center w-full">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-xl hover:-translate-y-2 border border-[#d4a017]/10 relative flex flex-col transition-all duration-300 group h-full mx-auto"
                                    style={{
                                        minWidth: "260px",
                                        maxWidth: "340px",
                                        width: "100%",
                                    }}
                                >
                                    <div className="absolute top-6 right-6 text-[#d4a017]/20 group-hover:text-[#d4a017]/40 transition-colors duration-300">
                                        <Quote size={40} />
                                    </div>

                                    <div className="flex gap-1 mb-5">
                                        {[...Array(5)].map((_, index) => (
                                            <Star key={index} className="fill-[#d4a017] text-[#d4a017]" size={18} />
                                        ))}
                                    </div>

                                    <p
                                        className="text-neutral-600 font-body text-base flex-1 mb-6 text-left"
                                        style={{
                                            wordBreak: "normal",
                                            whiteSpace: "normal",
                                            lineHeight: 1.6
                                        }}
                                    >
                                        "{item.text}"
                                    </p>

                                    <div className="border-t border-neutral-100 pt-5 mt-auto text-left">
                                        <h4 className="font-bold text-[#7a1c1c] text-lg font-['Playfair_Display',serif]">
                                            {item.name}
                                        </h4>
                                        <p className="text-sm text-[#d4a017] font-semibold mt-1">
                                            {item.location}
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <style>{`
                .slick-custom-wrapper .slick-track {
                    display: flex !important;
                }
                .slick-custom-wrapper .slick-slide {
                    height: inherit !important;
                    display: flex !important;
                    justify-content: center;
                }
                .slick-custom-wrapper .slick-slide > div {
                    display: flex;
                    width: 100%;
                    height: 100%;
                    justify-content: center;
                }
                .custom-slick-arrow {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                }
                .custom-slick-arrow::before {
                    font-size: 20px !important;
                    color: white !important;
                    content: '→' !important;
                    opacity: 1 !important;
                    line-height: 1;
                }
                .custom-slick-arrow.prev-arrow::before {
                    content: '←' !important;
                }
                .custom-slick-arrow:hover {
                    background: #8f2121 !important;
                    transform: translateY(-50%) scale(1.05);
                }
                .custom-slick-arrow.next-arrow {
                    right: -5px; 
                }
                .custom-slick-arrow.prev-arrow {
                    left: -5px;
                }

                .testimonial-wrapper .slick-dots {
                    bottom: -30px;
                }
                .testimonial-wrapper .slick-dots li {
                    margin: 0 4px;
                }
                .testimonial-wrapper .slick-dots li button:before {
                    font-size: 14px;
                    color: #d4a017;
                    opacity: 0.25;
                    transition: all 0.3s ease;
                }
                .testimonial-wrapper .slick-dots li.slick-active button:before {
                    color: #7a1c1c;
                    opacity: 1;
                    transform: scale(1.3);
                }

                @media (max-width: 768px) {
                    .testimonial-wrapper {
                        padding-left: 20px;
                        padding-right: 20px;
                    }
                    .custom-slick-arrow {
                        display: flex !important;
                        z-index: 30 !important;
                        width: 40px !important;
                        height: 40px !important;
                    }
                    .custom-slick-arrow.next-arrow {
                        right: -24px !important;
                    }
                    .custom-slick-arrow.prev-arrow {
                        left: -24px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default TestimonialsSection;
