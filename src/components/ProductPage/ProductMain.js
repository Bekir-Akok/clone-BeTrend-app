import ProductSlider from './ProductSlider'
import ProductDescription from './ProductDescription'
import ProductSliderMobile from './ProductSliderMobile'
import Product from '../Product'
import { useContext,} from 'react';
import { ProductContext } from '../Context/ProductContext';
import Slider from "react-slick";

const ProductMain = () => {
    const {productimg} = useContext(ProductContext)
    const settings = {
        dots: false,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 3.5,
        slidesToScroll: 3.5,
        responsive: [
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2.5,
                slidesToScroll: 2.5,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
      };
    return (
        <div>
            <div className="product-container">
                <ProductSlider/>
                <ProductDescription/>
            </div>
            <div className="mobile-product-container">
                <ProductSliderMobile/>
                <ProductDescription/>
            </div>
            <div className="similar-product">
                <h1>Similar Product</h1>
                <Slider {...settings}>
                    {productimg.map((product, i) => (
                    <Product key={i} src={product.src} name={product.name} price={product.price} stars={product.stars}/>
                ) )}
                </Slider>
            </div>
            <div className="similar-product">
                <h1>These Products May İnterest You</h1>
                <Slider {...settings}>
                    {productimg.map((product, i) => (
                    <Product key={i} src={product.src} name={product.name} price={product.price} stars={product.stars}/>
                ) )}
                </Slider>
            </div>
        </div>
        
        
    )
}


export default ProductMain