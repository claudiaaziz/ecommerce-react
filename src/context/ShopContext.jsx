import { createContext, useState } from "react";
import { PRODUCTS } from '../products'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
  const cart = {}

  for (let i = 1; i < PRODUCTS.length+1; i++) cart[i] = 0

  return cart
}

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart())

  const addItemToCart = (itemId) => {
    setCartItems(prev => ({ ...prev, [itemId]: prev[itemId]++ }))
  }

  const removeItemFromCart = (itemId) => {
    setCartItems(prev => ({ ...prev, [itemId]: prev[itemId]-- }))
  }

  const contextValue = { cartItems, addItemToCart, removeItemFromCart }

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider