function FurnitureCard({ title, price, discountPercentage, thumbnail, rating }) {
  const discounted = (price * (1 - discountPercentage / 100)).toFixed(2)

  return (
    <div className="card">
      <img src={thumbnail} alt={title} />
      <h3>{title}</h3>
      <div className="card-price">
        <span className="price-old">${price}</span>
        <span className="price-new">${discounted}</span>
      </div>
      <span className="card-rating">★ {rating}</span>
    </div>
  )
}

export default FurnitureCard