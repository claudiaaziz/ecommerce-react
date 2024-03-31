const Product = ({ product }) => {
  const { id, name, price, image } = product

  return (
    <div className="product">
      <img src={image} alt={name} />
      <div className="description">
        <p className="bold">{name}</p>
        <p>${price}</p>
      </div>
      <button className="add-to-cart-btn">Add To Cart</button>
    </div>
  )
}

export default Product