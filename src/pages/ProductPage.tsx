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
    fetch(`https://dummyjson.com/products/${id}`)
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
      <span className='product-info__information'>
        <h1 style={{ textAlign: 'center', margin: '10px' }}>{items.title}</h1>
        <p style={{ fontSize: '25px', fontFamily: 'cursive', margin: '20px 0' }}>{items.price}</p>
        <p style={{ fontSize: '18px' }}>{items.description}</p>
        <button onClick={() => addToCart(items)} style={{
          backgroundColor: 'var(--terra)',
          color: '#fff',
          border: 'none',
          padding: '14px 40px',
          borderRadius: '10px',
          fontSize: '18px',
          fontFamily: 'Georgia, serif',
          cursor: 'pointer',
          marginTop: '24px'
        }}>
          Додати в кошик
        </button>
      </span>

    </div>
  )
}

export default ProductPage