import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useState } from 'react'
import '../styles/navbar-style.css'

type Head = {
  brand: string
}

function Navbar({ brand }: Head) {
  const { cart } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav>
      <Link to="/" className="nav-logo">
        <h1>{brand}</h1>
      </Link>

      <button
        className={`nav-burger ${menuOpen ? 'nav-burger--open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Каталог</Link></li>
        <li>
          <Link to="/cart" className="nav-cart" onClick={() => setMenuOpen(false)}>
            Кошик
            {cart.length > 0 && (
              <span className="nav-cart-count">{cart.length}</span>
            )}
          </Link>
        </li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Контакти</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>Про нас</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar