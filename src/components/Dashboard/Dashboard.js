import React from 'react'
import styled from 'styled-components/macro'
import Klammerfisch from '../../assets/Klammerfisch.png'
import GoldStar from '../../assets/GoldStar.svg'

export default function Dashboard({ tasks, id, diaries }) {
  const completedTasksLength = tasks.filter(task => task.completed).length
  const totalTasksLength = tasks.filter(task => task.id !== id).length
  const totalDiariesLength = diaries.filter(diary => diary.id !== id).length
  const countDeletedTasks = JSON.parse(localStorage.getItem('deletedTasks'))
  const countCompletedTask = completedTasksLength + countDeletedTasks

  return (
    <MainSection>
      <ImageContainer>
        <img src={Klammerfisch} alt="klammerfisch" width="250" />
      </ImageContainer>
      <Headline>Deine Statistik</Headline>
      <P>tagebuch</P>
      <CounterWrapper>
        <Counter>{totalDiariesLength}</Counter>
        {totalDiariesLength <= 1
          ? 'Tagebucheintrag vorhanden'
          : 'Tagebucheinträge vorhanden'}
      </CounterWrapper>
      <P>aufgaben</P>
      <CounterWrapper>
        <Counter>{totalTasksLength}</Counter> Aufgaben Insgesamt: davon...
      </CounterWrapper>
      <MainWrapper>
        <CounterWrapper>
          <Counter>{countCompletedTask}</Counter>
          {countCompletedTask <= 1 ? 'erledigte Aufgabe' : 'erledigte Aufgaben'}
          {countCompletedTask >= 10 && (
            <img src={GoldStar} alt="ein Stern" width="25" height="25" />
          )}
          {countCompletedTask >= 30 && (
            <img src={GoldStar} alt="ein Stern" width="25" height="25" />
          )}
          {countCompletedTask >= 50 && (
            <img src={GoldStar} alt="ein Stern" width="25" height="25" />
          )}
          {countCompletedTask >= 70 && (
            <img src={GoldStar} alt="ein Stern" width="25" height="25" />
          )}
          {countCompletedTask >= 100 && (
            <img src={GoldStar} alt="ein Stern" width="25" height="25" />
          )}
        </CounterWrapper>
      </MainWrapper>
    </MainSection>
  )
}

const MainSection = styled.main`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-left: 5%;
  align-items: center;
  max-width: 350px;
`
const Headline = styled.h2`
  text-align: left;
  margin-top: 10px;
  display: inline-block;
  border-bottom: 2px solid black;
  padding-bottom: 2px;
  width: 136px;
`
const ImageContainer = styled.div`
  margin-top: 10px;
  align-items: center;
  padding-right: 20px;
`
const MainWrapper = styled.div`
  display: flex;
  font-size: 15px;
  justify-content: space-evenly;
`
const Counter = styled.span`
  color: red;
  font-weight: bold;
  font-size: 17px;
`
const CounterWrapper = styled.div`
  display: inline-flex;
  background-color: white;
  flex-direction: row;
  gap: 3px;
  align-items: center;
  border: none;
  box-shadow: inset 0 0 4px 2px rgba(46, 49, 49, 1);
  border-radius: 15px;
  padding: 15px;
  margin-bottom: 10px;
  width: 350px;
`
const P = styled.p`
  align-self: flex-start;
  text-transform: uppercase;
  font-weight: bold;
`
