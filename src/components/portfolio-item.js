import React from 'react';
import styled from 'styled-components';

function PortfolioItem(props) {
    return (
        <Wrapper>
            <Portal href={props.link}>
                <Body>
                    <Card>
                        <h3>{props.projectTitle}</h3>
                        <Thumbnail src={props.imgSrc} alt='Profile'/>
                    </Card>

                    <Description>
                        <p>{props.itemDesc}</p>
                        <h5>{props.createdOn}</h5>
                    </Description>
                </Body>
            </Portal>
        </Wrapper>
    )
}

const Wrapper = styled.div `
    flex-direction: column;
    max-width: 45%;
    margin-top: 1rem;
    background-color: #bed1d1;
    transition: background .4s ease-in-out;

    :hover {
        transition-time: 1s;
        background-color: #9aadad;
    }

    :active {
        background-color: #334d4d;
        transition-time: .3s;
    }

    @media(max-width: 800px) {
        margin: 0px;
        min-width: 100vw;
        &:nth-child(even) {
            background-color: white;

            :hover {
                background-color: grey;
            }
        }
    }
`

const Portal = styled.a `
    text-decoration: none;
    color: black;
`
const Card = styled.section`
    min-width: 100%;
`

const Thumbnail = styled.img `
    height: 12rem;
    width: 95%;

    @media(max-width: 900px) {
        height: 10rem;
        width: 20rem;
    }
`

const Description = styled.div `
    max-width: 82%
`

const Body = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export default PortfolioItem;