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

    const CustomArrow = (props: any) => {
        const { className, style, onClick, direction } = props;
        return (
            <div
                className={`${className} custom-slick-arrow hidden md:flex items-center justify-center`}
                style={{
                    ...style,
                    display: "flex",
                    background: "#7a1c1c",
                    borderRadius: "50%",
                    width: "48px",
                    height: "48px",
                    zIndex: 10,
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                }}
                onClick={onClick}
            />
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        nextArrow: <CustomArrow direction="right" />,
        prevArrow: <CustomArrow direction="left" />,
        responsive: [
            {
                breakpoint: 1280,
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
                    arrows: false,
                    dots: true,
                    centerMode: true,
                    centerPadding: "20px"
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                    centerMode: false,
                    centerPadding: "0px"
                }
            }
        ]
    };

    return (
        <section className="py-20 md:py-32 bg-[#fff7ed] relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#7a1c1c]/5 to-transparent pointer-events-none" />
            <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-[1400px]">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-24"
                >
                    <span className="text-[#d4a017] font-bold tracking-widest uppercase text-sm mb-4 block">Testimonials</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#7a1c1c] mb-6 font-['Playfair_Display',serif]">
                        What Our Customers Say
                    </h2>
                    <div className="w-24 h-1.5 bg-[#d4a017] mx-auto rounded-full opacity-80"></div>
                </motion.div>

                <div className="testimonial-wrapper px-0 md:px-12">
                    <Slider {...settings} className="slick-custom-wrapper">
                        {testimonials.map((item, i) => (
                            <div key={i} className="px-2 sm:px-4 py-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(122,28,28,0.08)] border border-[#d4a017]/10 relative h-full flex flex-col min-h-[320px] transition-all duration-300 group"
                                >
                                    <div className="absolute top-8 right-8 text-[#d4a017]/20 group-hover:text-[#d4a017]/30 transition-colors">
                                        <Quote size={48} />
                                    </div>

                                    <div className="flex gap-1.5 mb-6">
                                        {[...Array(5)].map((_, index) => (
                                            <Star key={index} className="fill-[#d4a017] text-[#d4a017]" size={20} />
                                        ))}
                                    </div>

                                    <p className="text-neutral-600 font-body text-base md:text-lg leading-relaxed mb-8 flex-1 relative z-10 italic">
                                        "{item.text}"
                                    </p>

                                    <div className="mt-auto border-t border-neutral-100 pt-6 flex items-center justify-between">
                                        <div>
                                            <h4 className="font-bold text-[#7a1c1c] text-lg lg:text-xl font-['Playfair_Display',serif] mb-1">
                                                {item.name}
                                            </h4>
                                            <p className="text-sm text-[#d4a017] font-semibold uppercase tracking-wider">
                                                {item.location}
                                            </p>
                                        </div>
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
          padding-bottom: 2rem;
        }
        .slick-custom-wrapper .slick-slide {
          height: auto;
        }
        .slick-custom-wrapper .slick-slide > div {
          height: 100%;
        }
        .testimonial-wrapper .slick-dots {
          bottom: -15px;
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
        .custom-slick-arrow::before {
          font-size: 20px !important;
          color: white !important;
          font-family: inherit !important;
          content: '→' !important;
        }
        .custom-slick-arrow.slick-prev::before {
          content: '←' !important;
        }
        @media (max-width: 768px) {
          .testimonial-wrapper {
            padding-bottom: 3rem;
          }
        }
      `}</style>
        </section>
    );
};

export default TestimonialsSection;
