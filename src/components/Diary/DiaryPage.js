import React from 'react'
import DiaryForm from '../Forms/DiaryForm'
import DiaryEntry from './DiaryEntry'
import { v4 as uuidv4 } from 'uuid'
import saveToLocal from '../../lib/saveToLocal'
import moment from 'moment'

export default function DiaryPage({ diaries, onSetDiaries }) {
  function handleCreateDiaries({ text, headline, date, mood }) {
    const newDiaries = [
      {
        id: uuidv4(),
        headline: headline,
        date: date,
        mood: mood,
        text: text,
      },
      ...diaries,
    ]

    const sortedDates = newDiaries.sort((a, b) => moment(a) - moment(b))

    onSetDiaries(sortedDates)
    saveToLocal('diaryLocalStorage', sortedDates)
  }

  function handleDeleteDiary(id) {
    const filteredData = diaries.filter(diary => diary.id !== id)
    saveToLocal('diaryLocalStorage', filteredData)
    onSetDiaries(filteredData)
  }

  return (
    <div>
      <DiaryForm onHandleCreateDiaries={handleCreateDiaries} />
      {diaries.map(diary => (
        <DiaryEntry
          handleDeleteDiary={handleDeleteDiary}
          headline={diary.headline}
          mood={diary.mood}
          date={diary.date}
          text={diary.text}
          key={diary.id}
          id={diary.id}
        />
      ))}
    </div>
  )
}
