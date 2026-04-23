import '../styles/catalog.css'
import { furniture } from '../data/furniture'
import FurnitureCard from './FurnitureCard'
import { useState } from 'react'



const CATEGORIES = [
  { value: 'chairs', label: 'Стільці' },
  { value: 'tables', label: 'Столи' },
  { value: 'sofas', label: 'Дивани' },
  { value: 'beds', label: 'Ліжка' },
]

function Catalog({ query = '' }) {
  const [selected, setSelected] = useState([])

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
  
  const filtered = furniture
    .filter(item => selected.length === 0 || selected.includes(item.category))
    .filter(item => item.name.toLowerCase().includes(query.toLowerCase()))



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
        {filtered.map(item => (
          <FurnitureCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}



export default Catalog