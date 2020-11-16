import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import seriesService from '../services/series'
import Season from './Season'

const SeriesPage = ({ add, remove, userSeries }) => {
    const [series, setSeries] = useState({})
    const id = useParams().id

    useEffect(() => {
        const getSeries = async () => {
            const series = await seriesService.fetchOne(id)
            setSeries(series)
        }        
        getSeries()
    },[id])

    if (!series.seasons) {
        return null
    }

    return (
        <div>
            <h1>{series.name}</h1>
            <button name='wishlist' onClick={(event) => add(event.target.name, series)}>Wishlist</button>
            <button name='watching' onClick={(event) => add(event.target.name, series)}>Watching</button>
            <button name='finished' onClick={(event) => add(event.target.name, series)}>Finished</button>
            {userSeries.some(s => s.name === series.name) ?
            <button name='remove' onClick={() => remove(series)}>Remove</button> :
            null}
            <h2>Seasons</h2>
            <div className='seriesList'>
                {series.seasons.map(s => <Season season={s} 
                                                 key={s.name}/>)}
            </div>
        </div>
    )
}

export default SeriesPage