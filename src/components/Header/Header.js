import React from 'react'
import styled from 'styled-components/macro'

function Header() {
  return (
    <HeaderMain>
      <MainTitle>Mental-Buddy</MainTitle>
    </HeaderMain>
  )
}

export default Header

const MainTitle = styled.h1`
  font-family: 'Pacifico', cursive;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 15px;
`

const HeaderMain = styled.header`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  overflow-x: hidden;
  background-color: rgba(143, 205, 81, 1);
`
