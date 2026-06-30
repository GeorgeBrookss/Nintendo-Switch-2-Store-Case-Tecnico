import { createContext } from "react";
import type { Product } from "../types/Product";

export type CartItem = Product & {
    quantity: number;
};

export type CartContextType = {
    cart: CartItem[];
    isOpen: boolean; 
    setIsOpen: (isOpen: boolean) => void;
    addToCart: (product: Product) => void;
    decreaseQuantity: (id: number) => void;
    clearCart: () => void;
};

export const CartContext = createContext<CartContextType | null>(null);