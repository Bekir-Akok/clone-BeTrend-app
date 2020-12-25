import Filter from './Filter'
import Product from './Product'
import { useContext,} from 'react';
import { ProductContext } from './Context/ProductContext';



const Categorypage = () => {
    
    const {productimg} = useContext(ProductContext)

    return (
        <div className="container">
            <Filter/>
            <div className="product-list">
                {productimg.map((product, i) => (
                    <Product key={i} src={product.src} name={product.name} price={product.price} stars={product.stars}/>
                ) )}
            </div>
        </div>
    )  
}


export default Categorypage