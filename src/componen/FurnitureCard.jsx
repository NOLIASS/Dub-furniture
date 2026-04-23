function FurnitureCard({ name, price, img }) {
  return (
    <div className="card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  )
}

export default FurnitureCard