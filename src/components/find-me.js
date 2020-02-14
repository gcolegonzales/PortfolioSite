import React from 'react'
import styled from'styled-components'
import LinkedIn from '../images/linkedin.png'
import Facebook from '../images/facebook.png'
import GitHub from '../images/github.png'

function FindMe() {
    return (
        <Wrapper>
            <a href='https://www.linkedin.com/in/cole-gonzales-787975191/' rel='noopener noreferrer' target='_blank'> <MediaLink src={LinkedIn} /> </a>
            <a href='https://www.facebook.com/cole.gonzales.5' rel='noopener noreferrer' target='_blank'> <MediaLink src={Facebook} /> </a>
            <a href='https://github.com/gcolegonzales' rel='noopener noreferrer' target='_blank'> <MediaLink src={GitHub} /> </a>
        </Wrapper>
    )
}

const Wrapper = styled.div `
    padding-top: .3rem;
    display: flex;
    justify-content: space-between;
    min-width: 25vw;

    @media(max-width: 800px) {
        min-width: 45vw;
    }
`

const MediaLink = styled.img `
    max-width: 2.6rem;
    transition: background .3s ease-in-out;

    :hover {
        background-color: silver;
    }
`

export default FindMe