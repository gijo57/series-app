import React from 'react'
import styled from 'styled-components'

const StyledSeries = styled.div`
padding: 0 0 32px;
margin: 48px auto 0;
width: 300px;
font-family: Roboto;
box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
border-radius: 5px;
`

const Series = ({ series }) => {
    console.log(series)
    return (
        <StyledSeries>
            <h2>{series.name}</h2>
            <h3>{series.seasons.map(s => <div key={s.id}>Season {s.id}</div>)}</h3>
        </StyledSeries>
    )
}

export default Series