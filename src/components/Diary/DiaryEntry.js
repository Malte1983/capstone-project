import React from 'react'
import styled from 'styled-components/macro'
import trashIcon from '../../assets/trashIcon.svg'
import { useState } from 'react'
import verydissatisfied from '../../assets/verydissatisfied.svg'
import dissatisfied from '../../assets/dissatisfied.svg'
import neutral from '../../assets/neutral.svg'
import satisfied from '../../assets/satisfied.svg'
import verysatisfied from '../../assets/verysatisfied.svg'

export default function DiaryEntry({
  text,
  headline,
  mood,
  date,
  handleDeleteDiary,
  id,
}) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <SavedDiarysContainer>
      <DiaryDate>
        Am {date}
        <Wrapper>
          war meine Stimmung:{' '}
          {mood === 'sehr gut' ? (
            <img src={verysatisfied} alt="Stimmung sehr gut" width="28" />
          ) : mood === 'gut' ? (
            <img src={satisfied} alt="Stimmung gut" width="28" />
          ) : mood === 'neutral' ? (
            <img src={neutral} alt="Stimmung neutral" width="28" />
          ) : mood === 'nicht so gut' ? (
            <img src={dissatisfied} alt="Stimmung nicht so gut" width="28" />
          ) : mood === 'überhaupt nicht gut' ? (
            <img
              src={verydissatisfied}
              alt="Stimmung überhaupt nicht gut"
              width="28"
            />
          ) : (
            ''
          )}
        </Wrapper>
        <ButtonDelete onClick={() => handleDeleteDiary(id)}>
          <img src={trashIcon} alt="loeschen" width="26" />
        </ButtonDelete>
      </DiaryDate>

      <SavedDiaryHeadline>{headline}</SavedDiaryHeadline>
      <ReadMoreButton onClick={() => handleDetailsButtonClick()}>
        {showDetails ? 'verbergen' : 'anzeigen'}
      </ReadMoreButton>
      {showDetails ? <P>{text}</P> : ''}
    </SavedDiarysContainer>
  )

  function handleDetailsButtonClick() {
    const newShowDetails = showDetails ? false : true
    setShowDetails(newShowDetails)
  }
}

const SavedDiarysContainer = styled.div`
  background-color: white;
  margin-top: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  margin-left: 5%;
  position: relative;
  border: none;
  box-shadow: inset 0 0 4px 2px rgba(46, 49, 49, 1);
  border-radius: 15px;
`
const DiaryDate = styled.span`
  font-style: italic;
  padding-bottom: 5px;
  align-self: flex-start;
  margin-left: 5px;
`
const SavedDiaryHeadline = styled.h4`
  padding-bottom: 5px;
  align-self: flex-start;
  margin-left: 5px;
  color: #ff8800;
`
const ReadMoreButton = styled.button`
  margin-top: 5px;
  align-self: flex-start;
  all: unset;
  background-color: black;
  color: white;
  border-radius: 15px;
  padding: 2px;
  width: 70px;
  text-align: center;
  font-weight: bold;
  align-self: center;
`
const ButtonDelete = styled.button`
  width: 30px;
  align-self: flex-start;
  all: unset;
  position: absolute;
  right: 10px;
  top: 10px;
`
const P = styled.p`
  word-break: break-all;
  margin-top: 5px;
  margin-left: 5px;
`
const Wrapper = styled.div``
