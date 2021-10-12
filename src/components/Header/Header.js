import React from 'react'
import styled from 'styled-components/macro'

function Header() {
  return (
    <Section>
      <MainTitle>Mental-Buddy</MainTitle>
    </Section>
  )
}

export default Header

const MainTitle = styled.h1`
  font-family: 'Pacifico', cursive;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 15px;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
`
