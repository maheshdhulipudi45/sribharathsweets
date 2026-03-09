import { createContext, useContext, useState, type ReactNode } from "react";
import type { Product } from "@/data/products";

export interface CartItem {
  product: Product;
  weight: string;
  quantity: number;
  price: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, weight: string) => void;
  removeFromCart: (productId: string, weight: string) => void;
  updateQuantity: (productId: string, weight: string, qty: number) => void;
  clearCart: () => void;
  totalAmount: number;
  totalItems: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be inside CartProvider");
  return ctx;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product, weight: string) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.product.id === product.id && i.weight === weight
      );
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id && i.weight === weight
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { product, weight, quantity: 1, price: product.prices[weight] }];
    });
  };

  const removeFromCart = (productId: string, weight: string) => {
    setItems((prev) => prev.filter((i) => !(i.product.id === productId && i.weight === weight)));
  };

  const updateQuantity = (productId: string, weight: string, qty: number) => {
    if (qty <= 0) return removeFromCart(productId, weight);
    setItems((prev) =>
      prev.map((i) =>
        i.product.id === productId && i.weight === weight ? { ...i, quantity: qty } : i
      )
    );
  };

  const clearCart = () => setItems([]);

  const totalAmount = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, totalAmount, totalItems, isCartOpen, setIsCartOpen }}
    >
      {children}
    </CartContext.Provider>
  );
};
