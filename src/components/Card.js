import React from 'react';



class Card extends React.Component{
    render(){
        return(
            <a href="/category">
            <div className="card-main">
                <div className="card">
                    <a href="/category">
                        <div className="card-img">
                            <img src={this.props.src}></img>
                        </div>
                        <div className="card-text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p className="card-p">Alışverişe Başla <i className="fas fa-angle-right"></i></p>
                        </div>
                    </a>
                </div>
            </div>
            </a>
        )
    }
}

export default Card