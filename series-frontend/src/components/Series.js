import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledSeries = styled.div`
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

const Series = ({ series, remove, status, add }) => {
    if (!series || series === undefined) {
        return null
    }

    const posterUrl = 'https://image.tmdb.org/t/p/'
    const sizeUrl = 'w500'
    const img = series.backdrop_path ? series.backdrop_path : series.poster_path
    const background = {
        background: `url(${posterUrl}${sizeUrl}${img})`
    }

    return (
        <StyledSeries background={background}>
            <h2><Link style={{ textDecoration: 'none', color: 'maroon'}} to={`/series/id/${series.id}`}>{series.name}</Link></h2>
            {status !== 'wishlist' ?
            <button name='wishlist' onClick={(event) => add(event.target.name, series)}>Wishlist</button> :
            null}
            {status !== 'watching' ?
            <button name='watching' onClick={(event) => add(event.target.name, series)}>Watching</button> :
            null}
            {status !== 'finished' ?
            <button name='finished' onClick={(event) => add(event.target.name, series)}>Finished</button> :
            null}          
            {status || status !== undefined ?
            <button name='remove' onClick={() => remove(series)}>Remove</button> :
            null}
        </StyledSeries>
    )
}

export default Series