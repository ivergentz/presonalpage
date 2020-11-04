import React from 'react'
import styled from 'styled-components/macro'

export default function ContactSection() {
  return (
    <AboutSection id="contact">
      <AboutSectionContent>
        <li>Iver Gentz</li>
        <li>Wohlwillstraße 50</li>
        <li>20359 Hamburg</li>
        <li>+49 1590 6593897</li>
        <li>
          <a href="mailto:ivergentz@gmail.com">ivergentz@gmail.com</a>
        </li>
      </AboutSectionContent>
      <AboutSectionHeader>kontakt</AboutSectionHeader>
      <ButtonUp href="#head">&uarr; hoch &uarr;</ButtonUp>
    </AboutSection>
  )
}

const AboutSection = styled.section`
  display: grid;
  grid-template-columns: 70vw 30vw;
  grid-template-rows: auto;
  background: #7fd6ce;
  width: 100%;
  height: auto;
`
const AboutSectionHeader = styled.h2`
  display: grid;
  font-weight: 500;
  font-size: 0.8em;
  align-items: center;
  justify-content: end;
  margin-right: 8vw;
`
const AboutSectionContent = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-weight: 300;
  height: 1vh;
  justify-content: start;
  list-style-type: none;
  height: auto;
  margin: 4vh 0 4vh 4vw;

  li {
    margin: 4vw;
    font-size: 0.7em;
    height: 1vh;
  }

  a {
    font-size: 1em;
    text-decoration: none;
    color: black;
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
