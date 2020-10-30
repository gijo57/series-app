import React from 'react'
import styled from 'styled-components'
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

const Series = ({ series }) => {

    const addToList = (event) => {
        event.preventDefault()
        seriesService.addToList(event.target.name, series)
    }

    const removeFromList = (event) => {
        event.preventDefault()
        seriesService.removeFromList(series.id)
    }

    const posterUrl = 'https://image.tmdb.org/t/p/'
    const sizeUrl = 'w500'
    const img = series.backdrop_path ? series.backdrop_path : series.poster_path
    const background = {
        background: `url(${posterUrl}${sizeUrl}${img})`
    }

    return (
        <StyledSeries background={background}>
            <h2>{series.name}</h2>
            <button name='wishlist' onClick={addToList}>Wishlist</button>
            <button name='watching' onClick={addToList}>Watching</button>
            <button name='finished' onClick={addToList}>Finished</button>
            <button name='remove' onClick={removeFromList}>Remove</button>
        </StyledSeries>
    )
}

export default Series