import React from 'react';
import Logo from './img/logo.png'
import NavMobileMenu from './NavMobileMenu'

class Header extends React.Component{

    state ={
        showContent: false
    }

        showMore = ()=> {
            
            this.setState({showContent: !this.state.showContent})
        }

    render(){
        return(
            <div className="header">
            <div className="container">
                <div className="header-mobile">
                <div className="top-header">
                    <div className="logo">
                    <div className="mobile-menu" onClick={this.showMore}>
                        <div className="menu-icon">
                            <i class="fas fa-bars"></i>
                            <span><p>Menu</p></span>
                        </div>
                        {
                    this.state.showContent ? (
                        <NavMobileMenu/>
                    ) : null
                }
                        
                    </div>
                        <a href="/"><img src={Logo}></img></a>
                    </div>  
                    <div className="search-bar">
                        <input type="search-box" className="search-box" placeholder="Search Bar"></input>
                        <i className="fas fa-search"></i>        
                    </div>
                    <div className="icon">
                        <ul>
                            <li><a><i className="fas fa-user-plus"></i></a>
                                <div className="sign-up">Giriş Yap</div>
                            </li>
                            <li><a><i className="fas fa-heart"></i></a>
                                <div className="sign-up">Favoriler</div>
                            </li>
                            <li><a><i className="fas fa-shopping-cart"></i></a>
                                <div className="sign-up">Sepetim</div>
                            </li>
                        </ul>
                    </div>
                    
                </div>
                <div className="mobile-search">
                        <i className="fas fa-search"></i>  
                        <input type="search-box" placeholder="Search Bar"></input>
                    </div>
                    </div>           
            </div>
        </div>
        )
    }
}

export default Header
