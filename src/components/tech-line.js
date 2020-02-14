import React from 'react';
import JS from '../images/JS.png'
import Node from '../images/node2.png'
import ReactImg from '../images/React.png'
import Sql from '../images/sql1.png'
import ExpressImg from '../images/express.png'
import KnexImg from '../images/knex.png'
import ReduxImg from '../images/redux.png'
import styled from 'styled-components'

function TechLine() {
    return (
        <TileWrapper>
            <JSTile src={JS} alt="Javascript" />
            <Tile src={Node} alt="Javascript" />
            <Tile src={ReactImg} alt="Javascript" />
            <Tile src={ReduxImg} alt="Javascript" />
            <Tile src={ExpressImg} alt="Javascript" />
            <Tile src={KnexImg} alt="Javascript" />
            <Tile src={Sql} alt="Javascript" />
        </TileWrapper>
    )
}

const TileWrapper = styled.div `
    padding: .6rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

const Tile = styled.img `
    max-height: 6rem;
`
const JSTile = styled.img `
    max-height: 6rem;
    min-width: 4.3rem;
`

export default TechLine