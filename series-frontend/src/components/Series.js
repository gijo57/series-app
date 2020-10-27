import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

const StyledSeason = styled.div`
padding: 10px;
margin: 10px auto 0;
width: 300px;
font-family: Roboto;
box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
border-radius: 5px;
`

const Series = ({ series, className }) => {
    const id = Number(useParams().id)
    const chosenSeries = series.find(s => s.id === id)

    if (!chosenSeries) {
        return null
    }

    return (
        <div>
            <h2>{chosenSeries.name}</h2>
            <div className={className}>                  
                {chosenSeries.seasons.map(s => {
                    return <StyledSeason key={s.id}>
                                <div>Season {s.id}</div>
                            </StyledSeason>
                })}
            </div> 
        </div> 
    )
}

export default Series