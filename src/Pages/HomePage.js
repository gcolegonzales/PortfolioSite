import React from 'react'
import styled from 'styled-components'
import HeaderHome from '../components/header-home'
import TechLine from '../components/tech-line'
import AboutMe from '../components/about-me'
import PortfolioList from '../components/portfolio-list'
import FindMe from '../components/find-me'

function HomePage() {
    return (
        <Wrapper>
            <HeaderHome />
            <FindMe />
            <AboutSection>
                <AboutMe />
                <TechLine />
            </AboutSection>
            <PortfolioList />
        </Wrapper>
    )
}

const AboutSection = styled.section `
    @media(min-width: 1080px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 2rem;
`

export default HomePage;