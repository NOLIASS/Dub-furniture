import { Link } from 'react-router-dom'

function Navbar(props) {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 60px',
      backgroundColor: '#FAF7F2',
      borderBottom: '1px solid #D4C4A8',
      width: '100%',
    }}>


      <h1>{props.brand}</h1>

      <ul style={{ display: 'flex', gap: '40px', listStyle: 'none', }}>
        <li><Link to="/" style={{ textDecoration: 'none', color: '#3D2608' }}>Каталог</Link></li>
        <li><Link to="/contact" style={{ textDecoration: 'none', color: '#3D2608' }}>Контакти</Link></li>
        <li><Link to="/about" style={{ textDecoration: 'none', color: '#3D2608' }}>Про нас</Link></li>
      </ul>

    </nav>
  )
}


export default Navbar
