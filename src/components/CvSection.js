import React from 'react'
import styled from 'styled-components/macro'

export default function CvSection() {
  return (
    <CvSectionContainer id="Cv">
      <CvSectionContent>
        <li>Die wichtigsten CV Stationen hier rein</li>
      </CvSectionContent>
      <CvSectionHeader>cv</CvSectionHeader>
      <ButtonUp href="#head">&uarr; hoch &uarr;</ButtonUp>
    </CvSectionContainer>
  )
}

const CvSectionContainer = styled.section`
  display: grid;
  grid-template-columns: 70vw 30vw;
  grid-template-rows: auto;
  background: #7fd6ce;
  width: 100%;
  height: auto;
`
const CvSectionHeader = styled.h2`
  display: grid;
  font-weight: 500;
  font-size: 0.8em;
  align-items: center;
  justify-content: end;
  margin-right: 8vw;
`
const CvSectionContent = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-weight: 300;
  height: 1vh;
  justify-content: start;
  list-style-type: none;
  height: auto;

  li {
    margin: 4vw;
    font-size: 0.7em;
  }
`
const ButtonUp = styled.a`
  display: flex;
  color: black;
  font-size: 0.4em;
  text-decoration: none;
  justify-content: center;
  grid-column: 1 / span 2;
  margin: 2vh;
`
