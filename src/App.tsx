import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './componen/Navbar'
import Search from './componen/Search'
import Catalog from './componen/Catalog'
import About from './pages/About'
import Contact from './pages/Contact'
import ProductPage from './pages/ProductPage'
import AdminPage from './pages/Admin'
import LoginPage from './pages/Login'
import { CartProvider } from './context/CartContext'
import Cart from './pages/Cart'






function App() {

  const [query, setQuery] = useState('')


  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar brand="ДУБ" />
        <Search setQuery={setQuery} />
        <Routes>
          <Route path="/" element={<Catalog query={query} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App