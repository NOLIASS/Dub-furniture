import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './componen/Navbar'
import Search from './componen/Search'
import Catalog from './componen/Catalog'
import About from './pages/About'
import Contact from './pages/Contact'



function App() {

  const [query, setQuery] = useState('')


  return (
    <BrowserRouter>
      <Navbar brand="ДУБ" />
      <Search setQuery={setQuery} />
      <Routes>
        <Route path="/" element={<Catalog query={query} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App