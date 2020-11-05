import React from 'react'
import styled from 'styled-components/macro'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import CvSection from './components/CvSection'
import PorjectsSection from './components/ProjectsSection'
import logo from './img/ig.png'
import iver from './img/iver.png'
import { Link } from 'react-scroll'

export default function HomePage() {
  return (
    <>
      <HeaderContainer id="head">
        <Logo src={logo} alt="logo" />
        <Header>ohne das "OL..."</Header>
        <Navigation className="nav" id="navbar">
          <Link to="about" smooth={true} spy={true} duration={500}>
            about
          </Link>
          <Link to="cv" smooth={true} spy={true} duration={700}>
            cv
          </Link>
          <Link to="projects" smooth={true} spy={true} duration={900}>
            projekte
          </Link>

          <Link to="contact" smooth={true} spy={true} duration={1100}>
            kontakt
          </Link>
        </Navigation>
        <Titlepic src={iver} alt="" />
      </HeaderContainer>
      <AboutSection id="about" title="about"></AboutSection>
      <CvSection id="cv" title="cv" />
      <PorjectsSection id="projects" title="projects" />
      <ContactSection id="contact" title="contact" />
    </>
  )
}

const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-evenly;
  width: 100vw;
  align-items: center;
  background-color: #7fd6ce;
  padding-bottom: 12px;
`

const Logo = styled.img`
  display: flex;
  width: 20vw;
  height: 20vw;
  margin-top: 2vh;
`
const Header = styled.h1`
  display: flex;
  justify-content: flex-end;
  margin-top: 2vh;
  margin-right: 4vw;
  font-weight: 500;
  font-size: 1.2em;
`

const Navigation = styled.section`
  display: flex;
  height: 6vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
  margin-top: 2vh;
  background: #6ad4ca;

  a {
    color: black;
    text-decoration: none;
    font-weight: 500;
    margin: 0 3vw;
  }
`

const Titlepic = styled.img`
  width: 100%;
  height: 78vh;
  object-fit: cover;
`
