import React from 'react';
import JS from '../images/JS.png'
import Node from '../images/node2.png'
import ReactImg from '../images/React.png'
import Sql from '../images/sql1.png'
import ExpressImg from '../images/express.png'
import KnexImg from '../images/knex.png'
import ReduxImg from '../images/redux.png'
import SharepointImg from '../images/sharepoint.jpeg'
import CSSImg from '../images/css.png'
import HTMLImg from '../images/html.png'
import PostGresImg from '../images/postgres.png'
import styled from 'styled-components'

function TechLine() {
    return (
        <TileWrapper>
            <JSTile src={JS} alt="Javascript" />
            <Tile src={Node} alt="Node.js" />
            <Tile src={ReactImg} alt="React" />
            <Tile src={ReduxImg} alt="Redux" />
            <Tile src={ExpressImg} alt="Express" />
            <Tile src={Sql} alt="Sqlite3" />
            <Tile src={KnexImg} alt="Knex.js" />
            <Tile src={CSSImg} alt="CSS" />
            <Tile src={HTMLImg} alt="HTML5" />
            <Tile src={PostGresImg} alt="PostgreSQL" />
            <Tile src={SharepointImg} alt="Sharepoint" />
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