import React from 'react'
import PortfolioItem from './portfolio-item'
import VRFunder from '../images/VRFunder.jpeg'
import NoiseController from '../images/NoiseController.jpeg'
import Herodex from '../images/Herodex.jpeg'
import Gigapet from '../images/Gigapet.jpeg'
import Freehold from '../images/Freehold.png'
import styled from 'styled-components'

const List = styled.div `
    display: flex;
    justify-content: space-around;
    margin: auto;
    flex-wrap: wrap;
    max-width: 90%;
`

function PortfolioList() {
    return (
        <List>
            <PortfolioItem
                imgSrc={VRFunder}
                projectTitle='VRFunder'
                itemDesc='This was my very first Build Week project in Lambda School!
                I built out the landing page seen here. This really shows how much
                I have grown as a Full Stack developer over the last 12 months!'
                createdOn='August 05, 2019' 
                link='https://vrfunder.netlify.com'
            />

            <PortfolioItem
                imgSrc={NoiseController}
                projectTitle='NoiseController'
                itemDesc='This project was designed to help teachers maintain noise levels
                in their class rooms. I worked on the front end of this application. This was
                my second Build Week project in Lambda School.'
                createdOn='September 30, 2019' 
                link='https://noisecontrollerapp.netlify.com'
            />

            <PortfolioItem
                imgSrc={Herodex}
                projectTitle='Herodex'
                itemDesc='I made this as a test of my knowledge of Redux after my first week of learning it. 
                I love super heroes, so creating a wiki for them seemed to be the go-to option for me. I plan on 
                extending this project quite a bit once I have more time to sink into it.'
                createdOn='November 05, 2019'
                link='http://herodex.now.sh/'
            />

            <PortfolioItem
                imgSrc={Gigapet}
                projectTitle='Gigapet'
                itemDesc='For this project, I was responsible for creating the back end. This was our final 
                project in the back end cirriculum. After a jam-packed several weeks 
                of learning all the technologies necessary, we were tasked with one final Build Week project.'
                createdOn='February 7, 2020'
                link='https://gigapetdemo.netlify.com'
            />

            <PortfolioItem
                imgSrc={Freehold}
                projectTitle='Freehold'
                itemDesc='I had the opportunity to work on this build-on project with an awesome team! 
                Through out the COVID-19 craziness, we all worked on this application as we could. This 
                was a great opportunity to work with a real dev team on a real, shippable product.'
                createdOn='May, 2020' 
                link='https://freehold.dev'
            />
        </List>
    )
}

export default PortfolioList;