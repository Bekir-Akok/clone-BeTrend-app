import Dropdown from './Dropdown';
import React from 'react';
import images from './img/Adidas_section9_202011241019_webSmall.jpg'; 

class BtmHeader extends React.Component {
    render(){
          const dropItem = [
            {name:"WOMAN",src: images },
            {name:"MAN",src: images },
            {name:"CHILD",src: images },
            {name:"HOME&LIFE",src: images },
            {name:"SUPERMARKET",src: images },
            {name:"COSMETIC",src: images },
            {name:"SHOES&BAG",src: images },
            {name:"CLOCK&ACCESSORY",src: images },
            {name:"ELECTRONİC",src: images },
          ]
        return(
            <div className="btm-header">
              
                {dropItem.map((menu, i) => (
                  <Dropdown src={menu.src} key={i} name={menu.name} />
                ))}        
                                  
            </div>
        )
    }
    
}


export default BtmHeader