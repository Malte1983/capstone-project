import styled from 'styled-components/macro'
import React from 'react'
import { DatePicker } from 'antd'
import 'antd/dist/antd.css'
import moment from 'moment'

export default function DiaryForm({ onHandleCreateDiarys }) {
  const dateFormat = 'DD.MM.YYYY'

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
          required
        />
        <Label htmlFor="date">Datum:</Label>
        <WrapperDatePicker>
          <DatePicker
            format={dateFormat}
            defaultValue={moment()}
            name="date"
            id="date"
          />
        </WrapperDatePicker>

        <LabelMood>Deine Stimmung?</LabelMood>
        <DropDownMenu name="Stimmung" id="stimmung">
          <option value="sehr gut">sehr gut</option>
          <option value="gut">gut</option>
          <option value="neutral">neutral</option>
          <option value="nicht so gut">nicht so gut</option>
          <option value="überhaupt nicht gut">überhaupt nicht gut</option>
        </DropDownMenu>

        <Label htmlFor="entry">Dein Eintrag:</Label>
        <Textarea
          name="entry"
          placeholder="Hier startet dein Positiv-Tagebuch"
          id="entry"
          required
          wrap="physical"
          rows="10"
          cols="40"
        />
        <ButtonSubmit name="Eintrag speichern">Eintrag speichern</ButtonSubmit>
      </Form>
    </Section>
  )

  function handleSubmit(eventInside) {
    eventInside.preventDefault()
    const form = eventInside.target
    const { entry } = form.elements
    const { subject } = form.elements
    const { date } = form.elements
    const { stimmung } = form.elements

    onHandleCreateDiarys({
      text: entry.value,
      headline: subject.value,
      date: date.value,
      stimmung: stimmung.value,
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
  resize: none;
  border: none;
  box-shadow: inset 0 0 4px 2px rgba(46, 49, 49, 1);
  border-radius: 15px;
  font-size: 18px;
  width: 100%;
  height: 8em;
  overflow-wrap: break-word;
  padding: 15px;
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
  border: none;
  box-shadow: inset 0 0 4px 2px rgba(46, 49, 49, 1);
  border-radius: 15px;
  font-size: 18px;
  text-align: center;
  padding: 15px;
`
const LabelMood = styled.label`
  margin-top: 10px;
  margin-bottom: 10px;
`
const DropDownMenu = styled.select`
  border: none;
  box-shadow: inset 0 0 4px 2px rgba(46, 49, 49, 1);
  border-radius: 15px;
  padding: 5px;
  font-size: 17px;
`
const WrapperDatePicker = styled.div`
  .ant-picker {
    border: none;
    box-shadow: inset 0 0 4px 2px rgba(46, 49, 49, 1);
    border-radius: 15px;
  }
`
