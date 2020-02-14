import React from 'react'
import ProfileImg from '../images/ProfileImg.jpg'
import styled from 'styled-components'

function HeaderHome() {
    return (
        <HeaderMain>
            <Link href='https://github.com/gcolegonzales' rel='noopener noreferrer' target='_blank'>
                <Portriat src={ProfileImg} alt='Profile' />
                <h2>Cole Gonzales</h2>
            </Link>
        </HeaderMain>
    )
}

const HeaderMain = styled.div`
    min-width: 100vw;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: radial-gradient(#1ac7b0, #008080);

    @media(max-width: 800px) {
        min-height: 40vh;
        justify-content: center;
    }
`

const Portriat = styled.img `
    max-width: 20%;
    border-radius: 50%;
    padding-top: 1rem;

    @media(max-width: 800px) {
        min-width: 40%;
    }
`

const Link = styled.a `
    text-decoration: none;
    color: black;
`

export default HeaderHome