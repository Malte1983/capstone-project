import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import animatedArrow from '../assets/animatedArrow.gif'

const Quotes = () => {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')

  useEffect(() => {
    getQuote()
  }, [])

  const getQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let dataQuotes = data.quotes
        let randomNum = Math.floor(Math.random() * dataQuotes.length)
        let randomQuote = dataQuotes[randomNum]

        setQuote(randomQuote.quote)
        setAuthor(randomQuote.author)
      })
  }

  const handleClick = () => {
    getQuote()
  }

  return (
    <div>
      <HeadLine>“Kluger“ Spruch gefällig?</HeadLine>
      <H3>
        Die Besten Sprüche und Zitate um Deine Ziele zu erreichen. Lasse Dich
        inspirieren.
      </H3>
      <MainWrapper id="quote-box">
        <div id="text">
          <QuotePara>{quote}</QuotePara>
        </div>
        <div id="author">
          <Author>{author}</Author>
        </div>

        <div id="buttons">
          <div className="social-media"></div>
          <Button onClick={handleClick} id="new-quote">
            Nächstes Zitat
          </Button>
        </div>
      </MainWrapper>
      <QuotePara>Motiviert? Super! Auf geht`s...</QuotePara>
      <ImageWrapper>
        <img src={animatedArrow} alt="Pfeil nach unten" width="50" />
      </ImageWrapper>
    </div>
  )
}

export default Quotes

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 90%;
  margin-left: 5%;
  padding: 20px;
  margin-top: 10%;
  margin-bottom: 10px;
  border: none;
  box-shadow: inset 0 0 4px 2px rgba(46, 49, 49, 1);
  border-radius: 15px;
`
const Button = styled.button`
  border: none;
  font-size: 15px;
  font-weight: 600;
  border-radius: 15px;
  padding: 5px 10px 5px 10px;
  background-color: black;
  color: white;
  cursor: pointer;
`
const Author = styled.p`
  font-style: italic;
  font-size: 17px;
`
const QuotePara = styled.p`
  font-size: 17px;
  text-align: center;
`
const HeadLine = styled.h2`
  display: inline-block;
  border-bottom: 2px solid black;
  padding-bottom: 2px;
  text-align: center;
  margin-top: 20px;
  width: 90%;
  margin-left: 5%;
`
const H3 = styled.h3`
  text-align: center;
  font-size: 18px;
  margin-left: 15px;
  margin-right: 15px;
`
const ImageWrapper = styled.div`
  justify-content: center;
  display: flex;
`
