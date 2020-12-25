import React from 'react';
import Circleitem from './Circle-item'
import Slider from "react-slick";
import marka from './img/hummel__brand__7770.png'
import marka1 from './img/Logopull_202005120822.png'
import marka2 from './img/Avvalogo_202004211756.jpg'
import marka3 from './img/pierre-cardin__brand__121.png'
import marka4 from './img/koton__brand__842.png'
import marka5 from './img/penti__brand__8605.png'
import marka6 from './img/Bershka_202003210018.jpg'


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}


class Circle extends React.Component{

    render(){

        var settings = {
            dots: false,
            infinite: true,
            arrow:false,
            speed: 500,
            slidesToShow: 9,
            slidesToScroll: 9,
            initialSlide: 0,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 8,
                  slidesToScroll: 8,
                  infinite: true,
                  dots: false
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 6,
                  slidesToScroll: 6,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll:5
                }
              }
            ]
          };
          
          const circles = [
            {id: 1,src: marka, name:"HUMMEL"},
            {id: 2,src: marka1,name:"Pull&Bear"},
            {id: 3,src: marka2,name:"Avva"},
            {id: 4,src: marka3,name:"Pierre Cardin"},
            {id: 5,src: marka4,name:"Koton"},
            {id: 6,src: marka5,name:"Penti"},
            {id: 7,src: marka6,name:"Bershka"},
            {id: 8,src: marka4,name:"Koton"},
            {id: 9,src: marka,name:"HUMMEL"},
            {id: 10,src: marka1,name:"Pull&Bear"},
            {id: 1,src: marka, name:"HUMMEL"},
            {id: 2,src: marka1,name:"Pull&Bear"},
            {id: 3,src: marka2,name:"Avva"},
            {id: 4,src: marka3,name:"Pierre Cardin"},
            {id: 5,src: marka4,name:"Koton"},
            {id: 6,src: marka5,name:"Penti"},
            {id: 7,src: marka6,name:"Bershka"},
            {id: 8,src: marka4,name:"Koton"},
            {id: 9,src: marka,name:"HUMMEL"},
            {id: 10,src: marka1,name:"Pull&Bear"}
          ]
          
        return(
            <Slider {...settings}>
              {circles.map((circle, i) => (
                <Circleitem name={circle.name} src={circle.src} key={i}/>
              ))}                                                                            
            </Slider>
        )
    }
}


export default Circle