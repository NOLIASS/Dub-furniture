import '../styles/productpage.css'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import { useCart } from '../context/CartContext'
import type { Product } from '../context/CartContext'



function ProductPage() {
  const { addToCart } = useCart()
  const [items, setItems] = useState<Product | null>(null)
  const { id } = useParams<{ id: string }>()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetch(`https://dub-backend-production-1dc7.up.railway.app/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setItems(data)
        setLoading(false)
      })
  }, [id])

  if (loading) return <p>Завантаження...</p>
  if (!items) return <p>Товар не знайдено</p>

  return (
    <div className='product-info'>
      <img src={items.thumbnail} alt={items.title} className='product-info__img' />
      <div className='product-info__information'>
        <h1>{items.title}</h1>
        <p className="product-price">{items.price}</p>
        <p className="product-description">{items.description}</p>
        <button onClick={() => addToCart(items)} className="product-btn">
          Додати в кошик
        </button>
      </div>
    </div>
  )
}

export default ProductPage