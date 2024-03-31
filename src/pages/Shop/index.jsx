import Product from "./Product";
import { PRODUCTS } from '../../products'

const Shop = () => {
  return (
    <div className="shop">
      <div className="shop-title">
        <h1>Ecommerce Shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map(product => <Product product={product} key={product.id} />)}
      </div>
    </div>
  )
}

export default Shop