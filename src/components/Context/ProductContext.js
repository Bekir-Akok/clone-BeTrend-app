import { createContext, useState } from 'react';
import image from '../img/1_org (1).jpg'
import image1 from '../img/1_org (2).jpg'
import image2 from '../img/1_org (3).jpg'
import image3 from '../img/1_org.jpg'
import image4 from '../img/1_org_zoom (1).jpeg'
import image5 from '../img/1_org_zoom.jpeg'
import image6 from '../img/1_org (4).jpg'
import image7 from '../img/2_org.jpg'

export const ProductContext = createContext();

const ProductContextProvider = (props) => {

    const [productimg] = useState([
        {src:image , name:"Product I", price:"199.90$" ,stars:"(40)"},
        {src:image1 , name:"Product II", price:"199.90$",stars:"(53)"},
        {src:image2 , name:"Product III", price:"99.90$",stars:"(70)"},
        {src:image3 , name:"Product IV", price:"119.90$",stars:"(51)"},
        {src:image4 , name:"Product V", price:"79.90$",stars:"(23)"},
        {src:image5, name:"Product VI", price:"59.90$",stars:"(7)"},
        {src:image6 , name:"Product VII", price:"79.90$",stars:"(108)"},
        {src:image7, name:"Product VIII", price:"59.90$",stars:"(206)"},
       ])

 
    return (
        <ProductContext.Provider value={{productimg}}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;