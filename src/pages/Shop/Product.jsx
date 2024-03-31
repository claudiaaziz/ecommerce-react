import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const Product = ({ product }) => {
  const { id, name, price, image } = product
  const { addItemToCart, cartItems } = useContext(ShopContext)
  const cartItemAmount = cartItems[id]

  return (
    <div className="product">
      <img src={image} alt={name} />
      <div className="description">
        <p className="bold">{name}</p>
        <p>${price}</p>
      </div>
      <button className="add-to-cart-btn" onClick={() => addItemToCart(id)}>
        Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  )
}

export default Product