import { Link } from 'react-router-dom'




type CardProps = {
  id: number
  title: string
  price: number
  discountPercentage: number
  thumbnail: string
  rating: number
}




function FurnitureCard({ id, title, price, discountPercentage, thumbnail, rating }: CardProps) {

  const discounted = (price * (1 - discountPercentage / 100)).toFixed(2)

  return (
    <Link to={`/product/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="card">
        <img src={thumbnail} alt={title} />
        <h3>{title}</h3>
        <div className="card-price">
          <span className="price-old">${price}</span>
          <span className="price-new">${discounted}</span>
        </div>
        <span className="card-rating">★ {rating}</span>
      </div>
    </Link>
  )
}

export default FurnitureCard