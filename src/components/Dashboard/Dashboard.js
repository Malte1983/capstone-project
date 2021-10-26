import React from 'react'
import styled from 'styled-components/macro'
import Klammerfisch from '../../assets/Klammerfisch.png'

export default function Dashboard() {
  return (
    <MainSection>
      <ImageContainer>
        <img src={Klammerfisch} alt="klammerfisch" width="350" />
      </ImageContainer>
      <Headline>Deine Statistik</Headline>
    </MainSection>
  )
}

const MainSection = styled.main`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-left: 5%;
`
const Headline = styled.h2`
  text-align: left;
  margin-top: 10px;
  display: inline-block;
  border-bottom: 2px solid black;
  padding-bottom: 2px;
  width: 136px;
`
const ImageContainer = styled.div`
  margin-top: 10px;
  align-items: center;
  padding-right: 20px;
`
