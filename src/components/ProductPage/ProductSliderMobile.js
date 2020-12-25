import image from '../img/Sliderİtem/slider01.jpg'
import image1 from '../img/Sliderİtem/slider02.jpg'
import image2 from '../img/Sliderİtem/1_org_zoom.jpg'
import image3 from '../img/Sliderİtem/2_org_zoom.jpg'
import image4 from '../img/Sliderİtem/3_org_zoom.jpg'

import Slider from "react-slick";
import React from 'react';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" ,}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black",  }}
        onClick={onClick}
      />
    );
  }


class ProductSliderMobile extends React.Component {
    
    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
          };
        return (
            <div className="mobile-slider">
            <Slider {...settings}>
                    <div>
                        <img src={image}></img>
                    </div>
                    <div>
                        <img src={image1}></img>
                    </div>
                    <div>
                        <img src={image2}></img>
                    </div>
                    <div>
                        <img src={image3}></img>
                    </div>
                    <div>
                        <img src={image4}></img>
                    </div>             
            </Slider>
            </div>
        )
    }
    
}


export default ProductSliderMobile