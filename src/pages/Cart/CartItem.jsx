import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const CartItem = ({ product }) => {
  const { id, name, price, image } = product
  const { addItemToCart, removeItemFromCart, cartItems, updateCartItemAmount } = useContext(ShopContext)

  return (
    <div className="cart-item">
      <img src={image} alt={name} />
      <div className="description">
        <p className="bold">{name}</p>
        <p>${price}</p>
        <div className="count-handler">
          <button onClick={() => removeItemFromCart(id)}>-</button>
          <input type="text" value={cartItems[id]} onChange={(e) => updateCartItemAmount(Number(e.target.value), id)}/>
          <button onClick={() => addItemToCart(id)}>+</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem