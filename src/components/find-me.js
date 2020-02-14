import React from 'react'
import styled from'styled-components'
import LinkedIn from '../images/linkedin.png'
import Facebook from '../images/facebook.png'
import GitHub from '../images/github.png'

function FindMe() {
    return (
        <Wrapper>
            <MediaLink src={LinkedIn} />
            <MediaLink src={Facebook} />
            <MediaLink src={GitHub} />
        </Wrapper>
    )
}

const Wrapper = styled.div `
    padding-top: .3rem;
    display: flex;
    justify-content: space-between;
    min-width: 25vw;
`

const MediaLink = styled.img `
    max-width: 2.6rem;
`

export default FindMe