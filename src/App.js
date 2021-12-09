import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";

function CardGetter() {
  const [cardDetails, setCardDetails] = useState([])
  let url = 'https://api.nasa.gov/planetary/apod?api_key=ak9UJZ9J4bKzbshagI9bwVLLpTTVmnpWmAZRXbRq'
  useEffect(()=>{
    axios.get(url).then((response)=>{
      console.log(response.data)
      setCardDetails(response.data)
    })
  }, [])
  const Button = styled.button`
  display:inline-block;
  padding:0.35em 1.2em;
  border:0.2em solid black;
  margin:0 0.3em 0.3em 0;
  border-radius:0.15em;
  box-sizing: border-box;
  text-decoration:none;
  font-family:'Roboto',sans-serif;
  font-weight:300;
  color:black;
  font-size: 1em;
  background-color:white;
  text-align:center;
  transition: all 0.2s;
  margin-bottom: 3%;
  &: hover {
    color:white;
    background-color:black;
  }
  `
  const H1 = styled.h1`
  font-size: 3em;
  `

  const Header = styled.div`
    border: .5em solid black;
    display: flex;
    flex-flow: column wrap;
    width: 80%;
    align-content: center;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 5%;
    text-align: center;

  `
  const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  `
  return (
  <div App>
    <Header className ='header'>
      <H1 className = 'title'>NASA Photo Of The Day</H1>
      <Nav>
        <Button className = 'home-Button'>Home</Button>
        <Button className = 'contact-Button'>Contact</Button>
        <Button className = 'random-Button'>Get Random</Button>
        <Button className = 'dark-mode-Button'>Dark Mode</Button>
      </Nav>
    </Header>
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
