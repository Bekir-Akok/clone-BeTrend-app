import React from 'react';
import Slider from "react-slick";
import Mobilemenu from './MobileMenu'


class BtmHeader extends React.Component {
    render(){
          const menuItem = [
            {name:"WOMAN"},
            {name:"MAN"},
            {name:"CHILD"},
            {name:"HOME&LIFE"},
            {name:"SUPERMARKET"},
            {name:"COSMETIC"},
            {name:"SHOES&BAG"},
            {name:"CLOCK&ACCESSORY"},
            {name:"ELECTRONİC"}
          ]

          var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4.5,
            slidesToScroll: 4.5,
            initialSlide: 0,
            responsive: [
             /*  {
                breakpoint: 600,
                settings: {
                  slidesToShow: 6,
                  slidesToScroll: 6,
                  initialSlide: 2
                }
              }, */
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 3.5,
                  slidesToScroll:3.5
                }
              }
            ]
          };
        return(
          <div className="btm-header-mobile">
            <Slider {...settings}>
              {menuItem.map((menus, i) => (
                <Mobilemenu name={menus.name} key={i} />
              ))}
            </Slider>  
          </div>
        )
    }
    
}


export default BtmHeader