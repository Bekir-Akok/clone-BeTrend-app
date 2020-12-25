import { render } from "@testing-library/react"
import React from 'react';

class mobileMenu extends  React.Component {
    render(){
        return(
        
        <div >
            <a href="/category">{this.props.name}
                <div className="menu-line"></div>
            </a>
        </div>
    )
}
    }
    


export default mobileMenu