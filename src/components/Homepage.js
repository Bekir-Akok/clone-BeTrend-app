import React from 'react';
import Circle from './Circle';
import Card from './Card';
import Banner from './Banner';
import BannerTheree from './Banner-theree';
import image1 from './img/beef5dbc97_0_new.jpg'
import image2 from './img/TrendAlacatiStili_section1_202012091606_webBig.jpg'
import image3 from './img/Kotonkadinerkekcocuktekstil_Kadin_Webbig_202012132218.jpg'
import image5 from './img/stkr.jpg'
import image4 from './img/eliter.jpg'
import image6 from './img/jenerik.jpg'
import BannerContextProvider from './Context/BannerContext';


const Homepage = () => {

    const images = [image1,image2,image3,image2,image3,image1,image2,image3,image1,]
    const images_ = [image4,image5,image6,image5,image4,image6,]


        return(
            <div className="container">
                <Circle/>             
                <div className="container-main">
                    <div className="container-card">
                        {images.map((image, i) => (
                            <Card src={image} key={i}/>
                        ))}
                    </div>
                    <div className="container-banner">
                    {images_.map((img, i) => (
                            <Banner src={img} key={i}/>
                        ))}
                    </div> 
                </div>
                <div className="container-banner-theree">
                    <BannerContextProvider>
                        <BannerTheree/>
                    </BannerContextProvider>
                </div>
            </div>
        )
}


export default Homepage