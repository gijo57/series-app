import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import seriesService from '../services/series'

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

const Series = ({ series, remove, get, status }) => {
    if (!series || series === undefined) {
        return null
    }

    const posterUrl = 'https://image.tmdb.org/t/p/'
    const sizeUrl = 'w500'
    const img = series.backdrop_path ? series.backdrop_path : series.poster_path
    const background = {
        background: `url(${posterUrl}${sizeUrl}${img})`
    }

    const addToList = (event) => {
        event.preventDefault()
        seriesService.addToList(event.target.name, series)
        if(status && status !== undefined) {
            get()
        }
    }

    return (
        <StyledSeries background={background}>
            <h2><Link style={{ textDecoration: 'none', color: 'maroon'}} to={`/series/id/${series.id}`}>{series.name}</Link></h2>
            <button name='wishlist' onClick={addToList}>Wishlist</button>
            <button name='watching' onClick={addToList}>Watching</button>
            <button name='finished' onClick={addToList}>Finished</button>
            {status || status !== undefined ?
            <button name='remove' onClick={() => remove(series)}>Remove</button> :
            null}
        </StyledSeries>
    )
}

export default Series