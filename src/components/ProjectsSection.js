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
      <ButtonUp href="#head">&uarr; hoch &uarr;</ButtonUp>
    </ProjectsSectionContainer>
  )
}

const ProjectsSectionContainer = styled.section`
  display: grid;
  position: sticky;
  grid-template-columns: 50vw 50vw;
  grid-template-rows: auto;
  background: #6ad4ca;
  width: 100%;
  height: 100vh;
  scroll-behavior: smooth;
`

const ProjectsSectionHeader = styled.h2`
  display: grid;
  grid-column: 1 / span 2;
  font-weight: 500;
  font-size: 0.8em;
  align-items: center;
  justify-content: start;
  margin-left: 10vw;
`
const ProjectsSectionContent = styled.ul`
  display: grid;
  grid-column: 1 / span 2;
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
