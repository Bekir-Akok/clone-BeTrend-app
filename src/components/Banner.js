import React from 'react';


class Banner extends React.Component{
    render(){
        return(
            <div className="container-main">
                <div className="banner">
                    <a href="/category"><img src={this.props.src}></img></a>
                </div>
            </div>
        )
    }
}


export default Banner 