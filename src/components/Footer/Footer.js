import styled from 'styled-components/macro'
import React from 'react'
import mood from '../../assets/mood.svg'
import checklist from '../../assets/checklist.svg'
import diary from '../../assets/diary.svg'
import profile from '../../assets/profile.svg'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <FooterSection>
      <NavButtons to="/Mood">
        <Image src={mood} alt="Stimmung" draggable={false} width="60" />
      </NavButtons>
      <NavButtons to="/">
        <Image src={checklist} alt="Aufgaben" draggable={false} width="60" />
      </NavButtons>
      <NavButtons to="/DiaryForm">
        <Image src={diary} alt="Tagebuch" draggable={false} width="60" />
      </NavButtons>
      <NavButtons to="/Dashboard">
        <Image src={profile} alt="Dashboard" draggable={false} width="60" />
      </NavButtons>
    </FooterSection>
  )
}

const FooterSection = styled.nav`
  padding: 30px;
  text-align: center;
  background-color: rgba(143, 205, 81, 1);
  box-shadow: 0px 0px 20px #dede;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  display: flex;
  justify-content: space-around;
  position: fixed;
  margin-top: 15px;
  overflow: hidden;
`
const NavButtons = styled(Link)`
  all: unset;
  align-self: center;
  padding: 10px;
  border: 1px solid white;
  border-radius: 20px;
  margin: 5px;
  &:focus {
    background-color: #ff8800;
  }
`

const Image = styled.img`
  filter: drop-shadow(1px 1px 1px rgba(44, 44, 44, 0.7));
`
