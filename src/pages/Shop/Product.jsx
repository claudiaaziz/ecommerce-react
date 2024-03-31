const Product = ({ product }) => {
  const { id, name, price, image } = product

  return (
    <div className="product">
      <img src={image} alt={name} />
      <div className="description">
        <p className="bold">{name}</p>
        <p>${price}</p>
      </div>
    </div>
  )
}

export default Product