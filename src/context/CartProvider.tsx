import { useState, useEffect } from "react"
import type { ReactNode } from "react"
import type { Product } from "../types/Product"
import { CartContext, type CartItem } from "./CartContext"

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem("cart")
    return saved ? JSON.parse(saved) : []
  })

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id)

      if (exists) {
        return prev.map((p) =>
          p.id === product.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        )
      }

      return [...prev, { ...product, quantity: 1 }]
    })

    setIsOpen(true)
  }


  const decreaseQuantity = (id: number) => {
    setCart((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, quantity: p.quantity - 1 } : p
        )
        .filter((p) => p.quantity > 0)
    )
  }

  return (
    <CartContext.Provider 
      value={{ 
        cart, 
        isOpen, 
        setIsOpen, 
        addToCart, 
        decreaseQuantity 
      }}
    >
      {children}
    </CartContext.Provider>
  )
}