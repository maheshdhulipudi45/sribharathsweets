import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-[#7a1c1c] text-[#fff7ed] border-t-4 border-[#d4a017]">
    <div className="container mx-auto px-4 py-16">
      <div className="grid sm:grid-cols-3 gap-10">
        {/* About */}
        <div className="space-y-6">
          <h4 className="font-['Playfair_Display',serif] text-2xl font-bold">Sri Bharath Sweets & Pickles</h4>
          <p className="text-[#fff7ed]/80 font-body leading-relaxed text-sm">
            Bringing the authentic taste of traditional Indian sweets and pickles to your doorstep since generations. Handcrafted with love and perfect hygiene.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d4a017] hover:text-white transition-colors" title="Facebook">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d4a017] hover:text-white transition-colors" title="Instagram">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d4a017] hover:text-white transition-colors" title="Twitter">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-['Playfair_Display',serif] text-xl font-bold mb-6">Quick Links</h4>
          <div className="flex flex-col gap-3">
            {[
              { name: "Home", path: "/" },
              { name: "Products", path: "/products" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" }
            ].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm text-[#fff7ed]/80 hover:text-[#d4a017] font-body transition-colors inline-block w-fit"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-['Playfair_Display',serif] text-xl font-bold mb-6">Contact Info</h4>
          <div className="space-y-4">
            {[
              { icon: Phone, text: "+91 76589 56116" },
              { icon: Mail, text: "sribharathsweets@gmail.com" },
              { icon: MapPin, text: "Main Road, Ramachandrapuram, Konaseema, AP" },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-4">
                <item.icon size={20} className="text-[#d4a017] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[#fff7ed]/80 font-body leading-relaxed">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-12 pt-8 text-center">
        <p className="text-sm text-[#fff7ed]/50 font-body">
          © {new Date().getFullYear()} Sri Bharath Sweets & Pickles. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
