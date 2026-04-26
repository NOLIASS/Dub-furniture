import '../styles/search.css'




type Sq ={
  setQuery: (value: string) => void
}


function Search({ setQuery }: Sq) {
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