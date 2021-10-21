import React from 'react'
import styled from 'styled-components/macro'
import trashIcon from '../../assets/trashIcon.svg'
import { useState } from 'react'

export default function DiaryEntry({
  text,
  headline,
  date,
  handleDeleteDiary,
  id,
}) {
  const [showDetails, setShowDetails] = useState(false)
  return (
    <SavedDiarysContainer>
      <DiaryDate>
        {date}
        <ButtonDelete onClick={() => handleDeleteDiary(id)}>
          <img src={trashIcon} alt="loeschen" width="26" />
        </ButtonDelete>
      </DiaryDate>
      <SavedDiaryHeadline>{headline}</SavedDiaryHeadline>
      <ReadMoreButton onClick={() => handleDetailsButtonClick()}>
        {showDetails ? 'verbergen' : 'anzeigen'}
      </ReadMoreButton>
      {showDetails ? <p>{text}</p> : ''}
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
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  margin-left: 5%;
  position: relative;
`
const DiaryDate = styled.span`
  font-style: italic;
  padding-bottom: 5px;
  align-self: flex-start;
`
const SavedDiaryHeadline = styled.h4`
  text-decoration: underline;
  padding-bottom: 5px;
  align-self: flex-start;
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
  right: 0;
`
