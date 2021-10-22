import React from 'react'
import styled from 'styled-components/macro'
import verydissatisfied from '../../assets/verydissatisfied.svg'
import dissatisfied from '../../assets/dissatisfied.svg'
import neutral from '../../assets/neutral.svg'
import satisfied from '../../assets/satisfied.svg'
import verysatisfied from '../../assets/verysatisfied.svg'

export default function Mood() {
  const today = new Date(),
    calender =
      today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear()

  return (
    <MainSection>
      <h3>Deine Stimmung Heute?</h3>
      <ButtonSection>
        <Button>
          <img src={verysatisfied} alt="" width="50" />
        </Button>
        <Button>
          <img src={satisfied} alt="" width="50" />
        </Button>
        <Button>
          <img src={neutral} alt="" width="50" />
        </Button>
        <Button>
          <img src={dissatisfied} alt="" width="50" />
        </Button>
        <Button>
          <img src={verydissatisfied} alt="" width="50" />
        </Button>
      </ButtonSection>
      <h4>Wie viele Aufgaben möchtest du heute erledigen?</h4>
      <Wrapper>
        <Label>{calender}</Label>
        <Input
          type="number"
          placeholder="z.B. 3"
          min="0"
          aria-label="Anzahl Aufgaben"
        ></Input>
      </Wrapper>
      <ButtonSave>Speichern</ButtonSave>
    </MainSection>
  )
}

const MainSection = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`
const ButtonSection = styled.section`
  flex-direction: row;
  padding: 10px;
`
const Button = styled.button`
  all: unset;
  padding: 0 5px 0 5px;
  border: 2px solid white;
  border-radius: 10px 25%;
  margin: 10px 5px 10px 2px;
`
const Input = styled.input`
  text-align: center;
  margin-top: 10px;
  width: 80px;
  border: none;
  box-shadow: inset 0 0 4px 2px rgba(46, 49, 49, 1);
  border-radius: 15px;
  font-size: 15px;
  text-align: center;
  padding: 10px;
`
const ButtonSave = styled.button`
  margin-top: 15px;
  border: none;
  font-size: 20px;
  font-family: 'Lato', sans-serif;
  font-weight: 600;
  border-radius: 15px;
  padding: 5px 10px 5px 10px;
  background-color: black;
  color: white;
  cursor: pointer;
  width: 180px;
  align-self: center;
`
const Wrapper = styled.div`
  flex-direction: row;
`
const Label = styled.label`
  padding-right: 10px;
`
