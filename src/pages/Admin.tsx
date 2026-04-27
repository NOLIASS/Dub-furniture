import { useState } from 'react'
import '../styles/admin.css'

function AdminPage() {
  const [form, setForm] = useState({
    title: '',
    thumbnail: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
  })
  const [success, setSuccess] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  function handleSubmit() {
    fetch('https://dub-backend-production-1dc7.up.railway.app/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    }).then(() => {
      setSuccess(true)
      setForm({ title: '', thumbnail: '', price: 0, discountPercentage: 0, rating: 0 })
    })
  }

  return (
    <div className="admin">
      <h1>Додати товар</h1>

      <div className="admin-field">
        <label>Назва</label>
        <input name="title" type="text" value={form.title} onChange={handleChange} placeholder="Стілець дубовий" />
      </div>

      <div className="admin-field">
        <label>Посилання на картинку</label>
        <input name="thumbnail" type="text" value={form.thumbnail} onChange={handleChange} placeholder="https://..." />
      </div>

      <div className="admin-field">
        <label>Ціна ($)</label>
        <input name="price" type="number" value={form.price} onChange={handleChange} />
      </div>

      <div className="admin-field">
        <label>Знижка (%)</label>
        <input name="discountPercentage" type="number" value={form.discountPercentage} onChange={handleChange} />
      </div>

      <div className="admin-field">
        <label>Оцінка (1-5)</label>
        <input name="rating" type="number" value={form.rating} onChange={handleChange} />
      </div>

      <button onClick={handleSubmit}>Додати товар</button>
      {success && <p className="admin-success">✅ Товар успішно додано!</p>}
    </div>
  )
}

export default AdminPage