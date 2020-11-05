import React from 'react'
import styled from 'styled-components/macro'

export default function ContactSection() {
  return (
    <ContactSectionContainer id="contact">
      <ContactSectionContent>
        <li>Iver Gentz</li>
        <li>Wohlwillstraße 50</li>
        <li>20359 Hamburg</li>
        <li>+49 1590 6593897</li>
        <li>
          <a href="mailto:ivergentz@gmail.com">ivergentz@gmail.com</a>
        </li>
      </ContactSectionContent>
      <ContactSectionHeader>kontakt</ContactSectionHeader>
      <ButtonContainer>
        <ButtonLeft href="#projects">prev</ButtonLeft>
        <ButtonUp href="#head">&uarr; hoch &uarr;</ButtonUp>
      </ButtonContainer>
    </ContactSectionContainer>
  )
}

const ContactSectionContainer = styled.section`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 20vh 70vh 10vh;
  background: #7fd6ce;
  width: 100%;
  height: 100vh;
`
const ContactSectionHeader = styled.h2`
  display: grid;
  grid-row: 0 / 1;
  font-weight: 500;
  font-size: 0.8em;
  align-items: center;
  justify-content: start;
  margin-left: 10vw;
`
const ContactSectionContent = styled.ul`
  display: grid;
  grid-row: 2 / 3;
  flex-wrap: wrap;
  font-weight: 300;
  list-style-type: none;
  height: 1vh;

  li {
    margin-left: 4vw;
    font-size: 0.7em;
  }

  a {
    font-size: 1em;
    text-decoration: none;
    color: black;
  }
`

const ButtonContainer = styled.section`
  display: grid;
  grid-template-columns: 33.33vw 33.33vw 33.33vw;
  grid-template-rows: 1;
  color: black;
  font-size: 1em;
  justify-content: left;
  grid-row: 3 / 4;
  margin: 2vh;
`
const ButtonLeft = styled.a`
  text-decoration: none;
  color: black;
  font-size: 0.5em;
`

const ButtonUp = styled.a`
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: black;
  font-size: 0.6em;
`
