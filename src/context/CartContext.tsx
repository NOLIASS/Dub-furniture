import { createContext, useContext, useState } from 'react'




export type Product = {
  id: number
  title: string
  price: number
  discountPercentage: number
  thumbnail: string
  rating: number
}

type CartContextType = {
  cart: Product[]
  addToCart: (item: Product) => void
  removeFromCart: (id: number) => void
}



const CartContext = createContext<CartContextType | null>(null)
 
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Product[]>([])

  function addToCart(item: Product) {
    setCart(prev =>[...prev, item])
  }

  function removeFromCart(id: number) {
    setCart(prev => prev.filter(item => item.id !==id))
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