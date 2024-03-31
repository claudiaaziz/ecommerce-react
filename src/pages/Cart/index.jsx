import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/ShopContext';
import CartItem from './CartItem';
import './Cart.css'

const Cart = () => {
  const { cartItems, getCartSubtotal, fakeCheckout } = useContext(ShopContext)
  const subTotal = getCartSubtotal()
  const navigate = useNavigate()

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
      {subTotal > 0 ? 
        <div className='checkout'>
          <p>Subtotal: ${subTotal}</p>
          <button onClick={() => navigate('/')}>Continue Shopping</button>
          <button onClick={() => fakeCheckout()}>Checkout</button>
        </div>
      :
        <h2>Your Cart is Empty</h2>
      }
    </div>
  )
}

export default Cart