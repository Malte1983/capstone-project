import React from 'react'
import styled from 'styled-components/macro'
import trashIcon from '../../assets/trashIcon.svg'

export default function DiaryEntry({
  text,
  headline,
  date,
  handleDeleteDiary,
  id,
}) {
  return (
    <SavedDiarysContainer>
      <DiaryDate>
        {date}
        <ButtonDelete onClick={() => handleDeleteDiary(id)}>
          <Image src={trashIcon} alt="" width="26" />
        </ButtonDelete>
      </DiaryDate>
      <SavedDiaryHeadline>{headline}</SavedDiaryHeadline>
      <ReadMoreButton>mehr</ReadMoreButton>
      <p>{text}</p>
    </SavedDiarysContainer>
  )
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
  padding-bottom: 3px;
  align-self: flex-start;
`
const ReadMoreButton = styled.button`
  margin-top: 5px;
  align-self: flex-start;
`
const ButtonDelete = styled.button`
  width: 30px;
  align-self: flex-start;
  all: unset;
  position: absolute;
  right: 0;
`
const Image = styled.img``
