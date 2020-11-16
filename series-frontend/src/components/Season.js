import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledSeason = styled.div`
padding: 10px;
margin: 10px auto 0;
width: 300px;
height: 300px;
font-family: Roboto;
box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
border-radius: 5px;
background-image: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), ${props => props.background.background};
background-size: cover;
`

const Season = ({ season, seriesId }) => {
    if (!season || season === undefined) {
        return null
    }

    const posterUrl = 'https://image.tmdb.org/t/p/'
    const sizeUrl = 'w500'
    const img = season.poster_path
    const background = {
        background: `url(${posterUrl}${sizeUrl}${img})`
    }

    return (
        <StyledSeason background={background}>
            <h2><Link style={{ textDecoration: 'none', color: 'maroon' }} to={`/series/${seriesId}/season/${season.season_number}`}>{season.name}</Link></h2>
        </StyledSeason>
    )
}

export default Season