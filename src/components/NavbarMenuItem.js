import React from 'react';

class NavbarMenuItem extends React.Component{
    
    render(){
       return (
        <div className="nav-menu-item">
            <div className="nav-cat">
                <a href="/category">
                    <i class="fas fa-tshirt"></i>
                    <p>{this.props.name}</p>
                </a>
            </div>
            <i class="fas fa-angle-right"></i>
        </div>
    ) 
    }
    
}


export default NavbarMenuItem