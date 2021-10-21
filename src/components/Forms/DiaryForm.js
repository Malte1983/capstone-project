import React from 'react'
import styled from 'styled-components/macro'

export default function DiaryForm({ onHandleCreateDiarys }) {
  const today = new Date(),
    calender =
      today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
  return (
    <Section>
      <DiaryHeader>Was hast du tolles erlebt?</DiaryHeader>
      <SecondHeadLine>
        Es zählen nur die wirklich schönen Momente!
      </SecondHeadLine>
      <Form onSubmit={event => handleSubmit(event)}>
        <SubjectInput
          type="text"
          name="subject"
          id="subject"
          placeholder="Deine Überschrift"
        />

        <LabelDate htmlFor="date">Datum</LabelDate>
        <CalenderDate
          type="date"
          defaultValue={calender}
          name="date"
          id="date"
          placeholder="date"
        />
        <Label htmlFor="entry">Dein Eintrag:</Label>
        <Textarea
          name="entry"
          placeholder="Hier startet dein Positiv-Tagebuch"
          id="entry"
        />
        <ButtonSubmit>Eintrag speichern</ButtonSubmit>
      </Form>
    </Section>
  )

  function handleSubmit(eventInside) {
    eventInside.preventDefault()
    const form = eventInside.target
    const { entry } = form.elements
    const { subject } = form.elements
    const { date } = form.elements

    onHandleCreateDiarys({
      text: entry.value,
      headline: subject.value,
      date: date.value,
    })
    subject.value = ''
    entry.value = ''
  }
}

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 15px;
  width: 90%;
  margin-left: 5%;
`
const Textarea = styled.textarea`
  height: 120px;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const ButtonSubmit = styled.button`
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
const Label = styled.label`
  margin-bottom: 10px;
  margin-top: 10px;
`
const LabelDate = styled.label`
  margin-bottom: 5px;
`

const DiaryHeader = styled.h4`
  font-family: 'Lato', sans-serif;
`
const SecondHeadLine = styled.span`
  font-style: italic;
  font-family: 'Lato', sans-serif;
  margin-top: 5px;
`
const SubjectInput = styled.input`
  margin-top: 10px;
  height: 30px;
  margin-bottom: 10px;
`
const CalenderDate = styled.input`
  width: 40%;
  margin-bottom: 5px;
`
