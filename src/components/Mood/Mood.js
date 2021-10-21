import React from 'react'
import styled from 'styled-components/macro'
import verydissatisfied from '../../assets/verydissatisfied.svg'
import dissatisfied from '../../assets/dissatisfied.svg'
import neutral from '../../assets/neutral.svg'
import satisfied from '../../assets/satisfied.svg'
import verysatisfied from '../../assets/verysatisfied.svg'

export default function Mood() {
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
      <Input type="number" placeholder="Anzahl"></Input>
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
`
const Input = styled.input`
  text-align: center;
  margin-top: 10px;
  width: 80px;
`
