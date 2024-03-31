import { useContext } from 'react';
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/ShopContext';
import CartItem from './CartItem';

const Cart = () => {
  const { cartItems } = useContext(ShopContext)

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart-items">
        {PRODUCTS.map(product => (
          cartItems[product.id] !== 0 && (
            <CartItem product={product} key={product.id} />
          )
        ))}
      </div>
    </div>
  )
}

export default Cart