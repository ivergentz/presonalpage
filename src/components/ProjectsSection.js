import React from 'react'
import styled from 'styled-components/macro'

export default function PorjectsSection() {
  return (
    <ProjectsSectionContainer id="projects">
      <ProjectsSectionHeader>Projects</ProjectsSectionHeader>
      <ProjectsSectionContent>
        <li>
          Moin, this is Iver. Wie Oliver. Ohne das 'Ol'. Hier lernst du mich
          kennen. Und ich dich nicht. Unfair. Aber damit muss ich wohl leben.
        </li>
      </ProjectsSectionContent>
      <ButtonContainer>
        <ButtonLeft href="#cv">prev</ButtonLeft>
        <ButtonUp href="#head">&uarr; hoch &uarr;</ButtonUp>
        <ButtonRight href="#contact">next</ButtonRight>
      </ButtonContainer>
    </ProjectsSectionContainer>
  )
}

const ProjectsSectionContainer = styled.section`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 20vh 70vh 10vh;
  background: #6ad4ca;
  width: 100%;
  height: 100vh;
  scroll-behavior: smooth;
`

const ProjectsSectionHeader = styled.h2`
  display: grid;
  grid-row: 0 / 1;
  font-weight: 500;
  font-size: 0.8em;
  align-items: center;
  justify-content: start;
  margin-left: 10vw;
`
const ProjectsSectionContent = styled.ul`
  display: flex;
  grid-row: 2 / 3;
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
const ButtonContainer = styled.section`
  display: flex;
  color: black;
  font-size: 1em;
  justify-content: space-between;
  grid-row: 3 / 4;
  margin: 2vh;
`
const ButtonLeft = styled.a`
  text-decoration: none;
  color: black;
  font-size: 0.5em;
`
const ButtonRight = styled.a`
  text-decoration: none;
  color: black;
  font-size: 0.5em;
`

const ButtonUp = styled.a`
  text-decoration: none;
  color: black;
  font-size: 0.6em;
`
