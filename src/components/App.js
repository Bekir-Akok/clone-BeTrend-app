import React from 'react';
import Header from './Header';
import Footer from './Footer'; 
import Homepage from './Homepage';
import BtmHeader from './BtmHeader';
import BtmHeaderMobile from './BtmHeaderMobile'
import Categorypage from './Categorypage'
import FooterMobile from './FooterMobile'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import ProductContextProvider from './Context/ProductContext';
import ProductPage from './ProductPage/ProductPage';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Css from './main.css' ;




class App extends React.Component{

    render(){
        
        return(
            <Router>
                <div>
                    <Route exact path="/" render = {() =>
                        <div>
                        <Header />
                        <BtmHeader/>
                        <BtmHeaderMobile/>
                        <Homepage />
                        <Footer/>
                        </div> } />
                    <Route exact path="/category" render = {() =>
                        <div>
                        <Header />
                        <BtmHeader/>
                        <BtmHeaderMobile/>
                        <ProductContextProvider>
                            <Categorypage/>
                        </ProductContextProvider>
                        <Footer/>
                        </div> } />
                    <Route exact path="/category/product" render = {() =>
                        <div>
                        <Header />
                        <BtmHeader/>
                        <BtmHeaderMobile/>
                        <ProductContextProvider>
                            <ProductPage/>
                        </ProductContextProvider>
                        <FooterMobile/>
                        </div> } />
                </div> 
            </Router>
        )
    }
}


export default App 