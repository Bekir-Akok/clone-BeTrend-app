import React from 'react';

class Circleitem extends React.Component{
    render(){
        return(
            <a href="/category">
            <div className="circle">
                <div className="circle-main"> 
                    <div className="circle-item"> 
                        <img src={this.props.src}></img>
                        <div className="a-1"><a href="/category">{this.props.name}</a></div>              
                    </div>
                </div>
            </div>
            </a>
        )
    }
}


export default Circleitem





/* circles.map((circle) => (
    <div className="circle-main"> 
        <div className="circle-item">
            <img src={circle.src}></img>
            <div className="a-1"><a href="#">{circle.name}</a></div>
        </div>
    </div>
)) */