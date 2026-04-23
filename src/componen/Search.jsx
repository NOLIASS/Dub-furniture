import '../styles/search.css'
import { furniture } from '../data/furniture'




function Search({ setQuery }) {
  return (
    <div className='search-opption'>
      <input
        type="text"
        className="search"
        id='search'
        placeholder="Пошук меблів..."
      onChange={(e) => setQuery(e.target.value)}>
      </input>
      <ul style={{ display: 'flex', gap: '40px' }}>

        <li> <img src="telegram" className='img__search' /></li>
        <li> <img src="telegram" className='img__search' /></li>
        <li> <img src="telegram" className='img__search' /></li>

      </ul>
    </div>

  )
}




export default Search