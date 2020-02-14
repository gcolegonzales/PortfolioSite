import React from 'react'
import styled from 'styled-components'


function AboutMe() {
    return (
        <Wrapper>
            <Title>A Little About Myself</Title>
            <Para>
                I am a Full Stack Developer currently finishing school at <Link href='https://lambdaschool.com'>
                Lambda School</Link>. For me, Lambda has been a game changer by
                providing an incredible learning experience, along with a top
                notch support framework. I have also completed Beginner and Advanced 
                courses through Udemy before attending Lambda School in an attempt to 
                teach myself all that is JavaScript. I am very enthusiastic about 
                joining this amazing industry and can't wait to become a better 
                developer with your team!
            </Para>
        </Wrapper>
    )
}

const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: .4rem;
`

const Title = styled.div `
    font-size: 2.4rem;
    padding-bottom: .4rem;
`

const Para = styled.div `
    max-width: 90%;
`

const Link = styled.a `
    text-decoration: underline;
    color: black;

    :hover {
        color: red;
    }
`

export default AboutMe