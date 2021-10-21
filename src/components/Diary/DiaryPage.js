import React from 'react'
import DiaryForm from '../Forms/DiaryForm'
import DiaryEntry from './DiaryEntry'
import { v4 as uuidv4 } from 'uuid'

export default function DiaryPage({ diarys, setDiarys }) {
  function handleCreateDiarys({ text, headline, date }) {
    const newDiarys = [
      {
        id: uuidv4(),
        headline: headline,
        date: date,
        text: text,
      },
      ...diarys,
    ]

    setDiarys(newDiarys)
    localStorage.setItem('diaryLocalStorage', JSON.stringify(newDiarys))
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
          date={diary.date}
          text={diary.text}
          key={diary.id}
          id={diary.id}
        />
      ))}
    </div>
  )
}
