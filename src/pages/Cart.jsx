import { useCart } from '../context/CartContext'
import '../styles/cart.css'

function Cart() {
  const { cart, removeFromCart } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)

  return (
    <div className="cart">
      <h1>Кошик</h1>
      {cart.length === 0
        ? <p>Кошик порожній</p>
        : cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.thumbnail} alt={item.title} />
              <div className="cart-item-info">
                <h3>{item.title}</h3>
                <p>${item.price}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Видалити</button>
            </div>
          ))
      }
      {cart.length > 0 && (
        <div className="cart-total">Разом: ${total}</div>
      )}
    </div>
  )
}

export default Cart