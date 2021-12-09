import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import cardGetter from "./App";
import getRandom from "./App"




function NasaCard () {
    const [photoCard, setPhotoCard] = useState(null);
    console.log(cardGetter());
    setPhotoCard(cardGetter());
    console.log(photoCard);
    return (
        <div className ='photoCard'>
            <h3 className='photoCardTitle'>{photoCard.title}</h3> 
            <img className='photoCardImg' src={photoCard.hdurl}></img>
            <p classname='photoCardDescription'>{photoCard.description}</p>
            <p className='photoCardCopyright'>{photoCard.copyright}</p>   
        </div>
    )
}


export { NasaCard }
