import '../styles/catalog.css'
import FurnitureCard from './FurnitureCard'
import { useEffect, useState } from 'react'
import type { Product } from '../context/CartContext'

const CATEGORIES = [
  { value: 'beds', label: '🛏 Ліжка' },
  { value: 'sofas', label: '🛋 Дивани' },
  { value: 'office chairs', label: '🪑 Крісла' },
  { value: 'bathroom', label: '🚿 Ванна' },
  { value: 'bedside tables', label: '🗄 Тумби' },
]

function Catalog({ query = '' }: { query: string }) {
  const [items, setItems] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [selected, setSelected] = useState<string[]>([])

  useEffect(() => {
    fetch('https://dub-backend-production-1dc7.up.railway.app/products')
      .then(res => res.json())
      .then(data => {
        setItems(data)
        setLoading(false)
      })
  }, [])

  function handleChange(value: string) {
    if (value === 'all') {
      setSelected([])
      return
    }
    setSelected(prev =>
      prev.includes(value)
        ? prev.filter(v => v !== value)
        : [...prev, value]
    )
  }

  const filtered = items
    .filter(item =>
      selected.length === 0 ||
      item.tags.some(tag => selected.includes(tag))
    )
    .filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase())
    )

  if (loading) return (
    <div className="catalog-loading">
      <div className="catalog-spinner" />
      <p>Завантаження товарів...</p>
    </div>
  )

  return (
    <div className="catalog">
      <aside className="filter">
        <p className="filter-title">Категорії</p>

        <div
          className={`filter-item ${selected.length === 0 ? 'filter-item--active' : ''}`}
          onClick={() => handleChange('all')}
        >
          🏠 Всі категорії
        </div>

        {CATEGORIES.map(({ value, label }) => (
          <div
            key={value}
            className={`filter-item ${selected.includes(value) ? 'filter-item--active' : ''}`}
            onClick={() => handleChange(value)}
          >
            {label}
          </div>
        ))}
      </aside>

      <div className="catalog-q">
        {filtered.length === 0
          ? (
            <div className="catalog-empty">
              <p>😔 Нічого не знайдено</p>
              <span>Спробуйте інший пошук або категорію</span>
            </div>
          )
          : filtered.map(item => (
            <FurnitureCard key={item._id || item.id} {...item} />
          ))
        }
      </div>
    </div>
  )
}

export default Catalog