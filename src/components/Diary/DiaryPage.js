import React from 'react'
import DiaryForm from '../Forms/DiaryForm'
import DiaryEntry from './DiaryEntry'
import { v4 as uuidv4 } from 'uuid'

export default function DiaryPage({ diarys, setDiarys }) {
  function handleCreateDiarys({ text, headline, date, stimmung }) {
    const newDiarys = [
      {
        id: uuidv4(),
        headline: headline,
        date: date,
        stimmung: stimmung,
        text: text,
      },
      ...diarys,
    ]
    const sortedDates = newDiarys.sort((a, b) => (b.date < a.date ? -1 : 1))

    setDiarys(sortedDates)
    localStorage.setItem('diaryLocalStorage', JSON.stringify(sortedDates))
  }

  function handleDeleteDiary(id) {
    const filteredData = diarys.filter(diary => diary.id !== id)
    const stringifiedValue = JSON.stringify(filteredData)
    localStorage.setItem('diaryLocalStorage', stringifiedValue)
    setDiarys(filteredData)
  }

  return (
    <div>
      <DiaryForm onHandleCreateDiarys={handleCreateDiarys} />
      {diarys.map(diary => (
        <DiaryEntry
          handleDeleteDiary={handleDeleteDiary}
          headline={diary.headline}
          stimmung={diary.stimmung}
          date={diary.date}
          text={diary.text}
          key={diary.id}
          id={diary.id}
        />
      ))}
    </div>
  )
}
