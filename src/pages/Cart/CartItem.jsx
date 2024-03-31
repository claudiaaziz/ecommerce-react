const CartItem = ({ product }) => {
  const { id, name, price, image } = product

  return (
    <div className="cart-item">
      <img src={image} alt={name} />
      <div className="description">
        <p className="bold">{name}</p>
        <p>${price}</p>
      </div>
    </div>
  )
}

export default CartItem