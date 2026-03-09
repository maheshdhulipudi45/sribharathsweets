import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Trash2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

const WHATSAPP_NUMBER = "919030445369";

const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, totalAmount, clearCart } = useCart();
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", village: "", city: "", landmark: "", pincode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const productLines = items
      .map((i) => `${i.product.name} ${i.weight} – Qty ${i.quantity}`)
      .join("%0A");
    const message = `*New Order – Sri Bharath Sweets*%0A%0A*Name:* ${form.name}%0A*Phone:* ${form.phone}%0A*Village:* ${form.village}%0A*City:* ${form.city}%0A*Landmark:* ${form.landmark}%0A*Pincode:* ${form.pincode}%0A%0A*Products Ordered:*%0A${productLines}%0A%0A*Total Amount:* ₹${totalAmount}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    clearCart();
    setShowForm(false);
    setIsCartOpen(false);
    setForm({ name: "", phone: "", village: "", city: "", landmark: "", pincode: "" });
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/30 backdrop-blur-sm"
            onClick={() => { setIsCartOpen(false); setShowForm(false); }}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-card shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="font-heading text-lg font-bold text-primary">
                {showForm ? "Delivery Details" : "Your Cart"}
              </h3>
              <button onClick={() => { setIsCartOpen(false); setShowForm(false); }} className="text-muted-foreground hover:text-foreground">
                <X size={20} />
              </button>
            </div>

            {!showForm ? (
              <>
                {/* Items */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {items.length === 0 ? (
                    <div className="text-center py-16">
                      <p className="text-muted-foreground font-body">Your cart is empty</p>
                      <Button variant="accent" size="sm" className="mt-4" onClick={() => setIsCartOpen(false)}>
                        Browse Products
                      </Button>
                    </div>
                  ) : (
                    items.map((item) => (
                      <div key={`${item.product.id}-${item.weight}`} className="flex gap-3 bg-muted/30 rounded-lg p-3">
                        <img src={item.product.image} alt={item.product.name} className="w-16 h-16 rounded-lg object-cover" />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-heading text-sm font-semibold text-foreground truncate">{item.product.name}</h4>
                          <p className="text-xs text-muted-foreground font-body">{item.weight}</p>
                          <p className="text-sm font-bold text-primary mt-1">₹{item.price * item.quantity}</p>
                        </div>
                        <div className="flex flex-col items-end justify-between">
                          <button onClick={() => removeFromCart(item.product.id, item.weight)} className="text-muted-foreground hover:text-destructive">
                            <Trash2 size={14} />
                          </button>
                          <div className="flex items-center gap-2">
                            <button onClick={() => updateQuantity(item.product.id, item.weight, item.quantity - 1)} className="w-6 h-6 rounded-md bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                              <Minus size={12} />
                            </button>
                            <span className="text-sm font-medium font-body w-4 text-center">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.product.id, item.weight, item.quantity + 1)} className="w-6 h-6 rounded-md bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                              <Plus size={12} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Footer */}
                {items.length > 0 && (
                  <div className="border-t border-border p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-heading font-semibold text-foreground">Total</span>
                      <span className="font-heading text-xl font-bold text-primary">₹{totalAmount}</span>
                    </div>
                    <Button variant="accent" size="lg" className="w-full" onClick={() => setShowForm(true)}>
                      Place Order
                    </Button>
                  </div>
                )}
              </>
            ) : (
              /* Order form */
              <form onSubmit={handlePlaceOrder} className="flex-1 overflow-y-auto p-4 space-y-3">
                {[
                  { name: "name", label: "Name", type: "text" },
                  { name: "phone", label: "Phone Number", type: "tel" },
                  { name: "village", label: "Village", type: "text" },
                  { name: "city", label: "City", type: "text" },
                  { name: "landmark", label: "Landmark", type: "text" },
                  { name: "pincode", label: "Pincode", type: "text" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="text-sm font-medium text-foreground font-body">{field.label}</label>
                    <input
                      name={field.name}
                      type={field.type}
                      required
                      value={form[field.name as keyof typeof form]}
                      onChange={handleChange}
                      className="w-full mt-1 px-3 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary font-body"
                    />
                  </div>
                ))}

                <div className="bg-muted/50 rounded-lg p-3 mt-2">
                  <p className="text-xs text-muted-foreground font-body mb-2">Order Summary</p>
                  {items.map((item) => (
                    <div key={`${item.product.id}-${item.weight}`} className="flex justify-between text-xs font-body">
                      <span className="text-foreground">{item.product.name} {item.weight} × {item.quantity}</span>
                      <span className="text-foreground font-medium">₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                  <div className="flex justify-between text-sm font-bold mt-2 pt-2 border-t border-border">
                    <span className="text-foreground">Total</span>
                    <span className="text-primary">₹{totalAmount}</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button type="button" variant="outline" size="lg" className="flex-1" onClick={() => setShowForm(false)}>
                    Back
                  </Button>
                  <Button type="submit" variant="whatsapp" size="lg" className="flex-1 gap-2">
                    <MessageCircle size={18} />
                    Order via WhatsApp
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
