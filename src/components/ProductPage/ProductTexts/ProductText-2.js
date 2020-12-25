import image from './img/6_org (1).jpg'
import image1 from './img/6_org.jpg'
import { useState } from 'react';

const ProductText2 = () => {

    const [value, setValue] = useState();

    const sizeChart = [
                        {value: "S", class: "btn", query: ".btn"},
                        {value: "M", class: "btn-1", query: ".btn-1"},
                        {value: "L", class: "btn-2", query: ".btn-2"},
                        {value: "XL", class: "btn-3", query: ".btn-3"},
                        {value: "XXL", class: "btn-4", query: ".btn-4"}]

    return (
        <div className="product-text-1">
            <div className="product-color">
                <h1>Color</h1>
                <div className="slick-slide-3">
                    <img className="slick-slide-image-3" src={image}/>
                    <img className="slick-slide-image-3"src={image1}/>
                </div>
            </div>
            <div className="product-size">
                <h1 id="baslık">Size:{value}</h1>
                <div className="size-chart">
                    {sizeChart.map((size, i) => (
                        <input className={size.class} type="button" value={size.value} onClick={() => setValue(document.querySelector(`${size.query}`).value ) } ></input>
                    ) )}
                </div>
            </div>
            <div className="product-button">
                <button type="button" className="btn-card">Add to Card</button>
                <button type="button" className="btn-fav"><i class="far fa-heart"></i></button>
            </div>  
            <div className="product-ttt">
                <div className="">Estimated Delivery Date: December 25 - January 6</div>
                <div className=""><i class="far fa-heart"></i>Favorite of 39248 People </div>
            </div>
        </div>
    )
}


export default ProductText2