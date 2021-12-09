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
  font-size: 3.5em;
  font-style: italic;
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

  const PhotoCard = styled.div`
   display: flex;
   flex-flow: column wrap;
  `

  const TitleDate = styled.div`
    display: flex;
    flex-firection: row;
    justify-content: space-around;
  `

  const BigImg = styled.img`
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  border: .5em double black;
  `

  const H3 = styled.h3`
  font-size: 1.5em;
  margin-bottom: .5%;
  `

  const P = styled.p`
  width: 80;
  margin-left: 10%;
  margin-right: 10%;
  text-align: left;
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
    <PhotoCard className ='photoCard'>
      <TitleDate className='titleDate'>
      <H3 className='photoCardTitle'>{cardDetails.title}</H3>
      <H3 className='photoCardDate'>{cardDetails.date}</H3>
      </TitleDate> 
      <BigImg className='photoCardImg' src={cardDetails.hdurl}></BigImg>
      <P classname='photoCardDescription'>{cardDetails.explanation}</P>
      <P className='photoCardCopyright'>{cardDetails.copyright}</P>   
    </PhotoCard>
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
