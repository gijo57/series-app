import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import seriesService from '../services/series'

const SeasonPage = () => {
    const [season, setSeason] = useState({})
    const seasonNumber = useParams().season_number
    const seriesId = useParams().id

    useEffect(() => {
        const getSeason = async () => {
            const series = await seriesService.fetchSeason(seriesId, seasonNumber)
            setSeason(series)
        }        
        getSeason()
    },[seasonNumber, seriesId])

    if (!season.episodes) {
        return null
    }

    return (
        <div>
            <h1>{season.name}</h1>
            <p>{season.overview}</p>
            {season.episodes.map(e => <h2 key={e.id}>{e.name}</h2>)}
        </div>
    )
}

export default SeasonPage