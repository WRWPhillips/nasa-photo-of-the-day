import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function CardGetter() {
  const [cardDetails, setCardDetails] = useState([])
  let url = 'https://api.nasa.gov/planetary/apod?api_key=ak9UJZ9J4bKzbshagI9bwVLLpTTVmnpWmAZRXbRq'
  useEffect(()=>{
    axios.get(url).then((response)=>{
      console.log(response.data)
      setCardDetails(response.data)
    })
  }, [])
  return (
  <div App>
    <div className ='header'>
      <h1 className = 'title'>NASA Photo Of The Day</h1>
      <nav>
        <button className = 'home-button'>Home</button>
        <button className = 'contact-button'>Contact</button>
        <button className = 'random-button'>Get Random</button>
        <button className = 'dark-mode-button'>Dark Mode</button>
      </nav>
    </div>
    <div className ='photoCard'>
      <div className='titleDate'>
      <h3 className='photoCardTitle'>{cardDetails.title}</h3>
      <h3 className='photoCardDate'>{cardDetails.date}</h3>
      </div> 
      <img className='photoCardImg' src={cardDetails.hdurl}></img>
      <p classname='photoCardDescription'>{cardDetails.explanation}</p>
      <p className='photoCardCopyright'>{cardDetails.copyright}</p>   
    </div>
  </div>
  )
}
function App() {
  return (
    <div className="App">
      <CardGetter />
    </div>
    
  );
}

console.log(Date(toString()));
export default App;
