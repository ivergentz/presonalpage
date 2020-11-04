import React from 'react'
import styled from 'styled-components/macro'

export default function AboutSection() {
  return (
    <AboutSectionContainer id="about">
      <AboutSectionHeader>about</AboutSectionHeader>
      <AboutSectionContent>
        <li>
          Moin, this is Iver. Wie Oliver. Ohne das 'Ol'. Hier lernst du mich
          kennen. Und ich dich nicht. Unfair. Aber damit muss ich wohl leben.
        </li>
      </AboutSectionContent>
      <ButtonUp class="dark" href="#head">
        &uarr; hoch &uarr;
      </ButtonUp>
    </AboutSectionContainer>
  )
}

const AboutSectionContainer = styled.section`
  display: grid;
  grid-template-columns: 30vw 70vw;
  grid-template-rows: auto;
  background: #6ad4ca;
  width: 100%;
  height: auto;
`
const AboutSectionHeader = styled.h2`
  display: grid;
  font-weight: 500;
  font-size: 0.8em;
  align-items: center;
  justify-content: start;
  margin-left: 10vw;
`
const AboutSectionContent = styled.ul`
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
