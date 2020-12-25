import { createContext, useState } from 'react';
import image7 from '../img/99be13493c_1_detay.jpg'
import image8 from '../img/9b79e02402_0_detay.jpg'
import image9 from '../img/Hummel_section2_202004081305_webSmall.jpg'

export const BannerContext = createContext();

const BannerContextProvider = (props) => {

    const [banners] = useState([
            {id: 1,src: image7},
            {id: 2,src: image8},
            {id: 3,src: image9},
            {id: 4,src: image9},
            {id: 5,src: image7},
            {id: 6,src: image8},
            {id: 7,src: image7},
            {id: 8,src: image8},
            {id: 9,src: image9},
])

 
    return (
        <BannerContext.Provider value={{banners}}>
            {props.children}
        </BannerContext.Provider>
    )
}

export default BannerContextProvider;