/* import { createContext, useState } from 'react';
import marka from '../img/hummel__brand__7770.png'
import marka1 from '../img/Logopull_202005120822.png'
import marka2 from '../img/Avvalogo_202004211756.jpg'
import marka3 from '../img/pierre-cardin__brand__121.png'
import marka4 from '../img/koton__brand__842.png'
import marka5 from '../img/penti__brand__8605.png'
import marka6 from '../img/Bershka_202003210018.jpg'

export const CircleContext = createContext();

const CircleContextProvider = (props) => {

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
            {id: 10,src: marka1,name:"Pull&Bear"}
]

 
    return (
        <CircleContext.Provider value={{circles}}>
            {props.children}
        </CircleContext.Provider>
    )
}

export default CircleContextProvider; */