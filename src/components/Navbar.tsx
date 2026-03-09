import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import logoImg from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2 sm:gap-3.5 group">
          <img
            src={logoImg}
            alt="Sri Bharath Logo"
            className="w-11 h-11 sm:w-14 sm:h-14 rounded-full object-cover group-hover:scale-105 transition-transform shadow-md border-2 border-[#d4a017]/20 bg-white"
          />
          <div className="flex flex-col justify-center">
            <span className="font-['Playfair_Display',serif] text-[18px] sm:text-[24px] font-bold text-[#7a1c1c] leading-none mb-1 sm:mb-1.5 tracking-tight">
              Sri Bharath
            </span>
            <span className="text-[#64748b] text-[11px] sm:text-[14px] font-body font-normal leading-[1.1] tracking-wide">
              Sweets & Pickles
            </span>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.label}
                to={link.href}
                className={`relative font-body text-sm font-medium transition-colors group ${isActive ? 'text-primary' : 'text-foreground hover:text-primary'}`}
              >
                {link.label}
                <span className={`absolute left-0 -bottom-1 h-0.5 bg-accent transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            );
          })}
          <button
            onClick={() => setIsCartOpen(true)}
            className="hidden md:flex relative items-center justify-center bg-[#7a1c1c] text-white p-2.5 rounded-full hover:bg-[#8f2121] transition-transform hover:scale-105 active:scale-95 shadow-sm"
          >
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-[20px] h-[20px] rounded-full bg-[#d4a017] text-white text-[10px] font-bold flex items-center justify-center shadow-md">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center justify-center bg-[#7a1c1c] text-white p-2 rounded-full active:scale-95 shadow-sm"
          >
            <ShoppingCart size={18} />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-[18px] h-[18px] rounded-full bg-[#d4a017] text-white text-[9px] font-bold flex items-center justify-center shadow-md">
                {totalItems}
              </span>
            )}
          </button>
          <button className="text-[#7a1c1c] p-1" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-card border-t border-border"
          >
            <div className="flex flex-col gap-4 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="font-body text-sm font-medium text-foreground hover:text-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
