import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledSeries = styled.div`
padding: 10px;
margin: 10px auto 0;
width: 300px;
font-family: Roboto;
box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
border-radius: 5px;
`

const SeriesList = ({ status, className }) => {
    let title = ''
    if (status === 'finished') {
        title = 'Series you\'ve finished watching'
    } else if (status === 'watching') {
        title = 'Series you\'re watching'
    } else if (status === 'wishlist') {
        title = 'Series you want to see in the future'
    }

    return (
        <div>
            <h1>{title}</h1>
            <div className={className}>            
                <h1>{status}</h1>
            </div>
        </div>
    )
}

export default SeriesList