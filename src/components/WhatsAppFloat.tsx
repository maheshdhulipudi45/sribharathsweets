import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919030445369";

const WhatsAppFloat = () => (
  <a
    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi Sri Bharath Sweets, I want to contact you.`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-[999] w-14 h-14 rounded-full bg-[hsl(142,70%,40%)] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={26} />
  </a>
);

export default WhatsAppFloat;
