import { createContext, useContext, useState } from 'react'




export type Product = {
  _id?: string  // MongoDB id
  id?: number   // dummyjson id
  title: string
  price: number
  discountPercentage: number
  thumbnail: string
  rating: number
  description: string
  tags: string[]
}

type CartContextType = {
  cart: Product[]
  addToCart: (item: Product) => void
  removeFromCart: (id: string | number) => void
}


const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Product[]>([])

  function addToCart(item: Product) {
    setCart(prev => [...prev, item])
  }

  function removeFromCart(id: string | number) {
    setCart(prev => prev.filter(item => (item._id || item.id) !== id))
  }
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart має бути всередині CartProvider')
  return context
}