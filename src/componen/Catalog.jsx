import '../styles/catalog.css'
import FurnitureCard from './FurnitureCard'
import { useEffect, useState } from 'react'

const CATEGORIES = [
  { value: 'beds', label: 'Ліжка' },
  { value: 'sofas', label: 'Дивани' },
  { value: 'office chairs', label: 'Крісла' },
  { value: 'bathroom', label: 'Ванна' },
  { value: 'bedside tables', label: 'Тумби' },
]

function Catalog({ query = '' }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products/category/furniture?limit=12')
      .then(res => res.json())
      .then(data => {
        setItems(data.products)
        setLoading(false)
      })
  }, [])

  function handleChange(value) {
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
      item.tags.some(tag => selected.includes(tag)) // ← фільтр по тегах
    )
    .filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase())
    )

  if (loading) return <p style={{ padding: '40px' }}>Завантаження...</p>

  return (
    <div className="catalog">
      <ul className="filter">
        <li>
          <input
            type="checkbox"
            value="all"
            checked={selected.length === 0}
            onChange={() => handleChange('all')}
          />
          <label>Всі категорії</label>
        </li>
        {CATEGORIES.map(({ value, label }) => (
          <li key={value}>
            <input
              type="checkbox"
              value={value}
              checked={selected.includes(value)}
              onChange={() => handleChange(value)}
            />
            <label>{label}</label>
          </li>
        ))}
      </ul>

      <div className="catalog-q">
        {filtered.length === 0
          ? <p>Нічого не знайдено</p>
          : filtered.map(item => (
              <FurnitureCard key={item.id} {...item} />
            ))
        }
      </div>
    </div>
  )
}

export default Catalog