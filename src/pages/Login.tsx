import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/login.css'

function LoginPage() {
  const navigate = useNavigate()
  const [log, setLog] = useState({ email: '', password: '' })
  const [error, setError] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLog(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit() {
    fetch('https://dub-backend-production-1dc7.up.railway.app/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(log)
    })
      .then(res => res.json())
      .then(data => {
        if (data.token) {
          localStorage.setItem('token', data.token)
          navigate('/admin')
        } else {
          setError('Невірний email або пароль')
        }
      })
  }

  return (
    <div className="login">
      <h1>Вхід</h1>

      <div className="login-field">
        <label>Email</label>
        <input name="email" type="email" value={log.email} onChange={handleChange} placeholder="admin@dub.ua" />
      </div>

      <div className="login-field">
        <label>Пароль</label>
        <input name="password" type="password" value={log.password} onChange={handleChange} placeholder="••••••••" />
      </div>

      <button onClick={handleSubmit}>Зайти</button>
      {error && <p className="login-error">{error}</p>}
    </div>
  )
}

export default LoginPage