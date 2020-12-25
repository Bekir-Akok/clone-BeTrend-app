import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import image from '../img/Sliderİtem/slider01.jpg'
import image1 from '../img/Sliderİtem/slider02.jpg'
import image2 from '../img/Sliderİtem/1_org_zoom.jpg'
import image3 from '../img/Sliderİtem/2_org_zoom.jpg'
import image4 from '../img/Sliderİtem/3_org_zoom.jpg'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Css from '../main.css' ;


function ProductSlider() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {

    setNav1(slider1);
    setNav2(slider2);

  });


  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav'
  };

  const settingsThumbs = {
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows:false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: false,
    centerPadding: '10px',
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4.4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          vertical: true,
          verticalSwiping: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3.8,
          slidesToScroll: 1,
        }
      },
    ]
  };

  const slidesData = [
    {
      id: 1,
      src: image
    }, {
      id: 2,
      src: image1
    }, {
      id: 3,
      src: image2
    }, {
      id: 4,
      src: image3
    }, {
      id: 5,
      src: image4
    },
  ];

  return (

    <div className="slider-main">
        <div className="slider-wrap">
        
            <Slider
            {...settingsMain}
            asNavFor={nav2}
            ref={slider => (setSlider1(slider))}
            >

            {slidesData.map((slide) =>

                <div className="slick-slide-1" key={slide.id}>
                <img className="slick-slide-image-1" src={slide.src} />
                </div>

            )}

            </Slider>
            <div className="thumb-slider-wrap">
                <Slider
                    {...settingsThumbs}
                    asNavFor={nav1}
                    ref={slider => (setSlider2(slider))}>

                    {slidesData.map((slide) =>

                    <div className="slick-slide-2" key={slide.id}>
                        <img className="slick-slide-image-2" src={slide.src} />
                    </div>

                    )}

                </Slider>
            </div>
        </div>
    </div>
  );
}

export default ProductSlider;