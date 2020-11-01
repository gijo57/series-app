import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import seriesService from '../services/series'

const SeriesPage = () => {
    const [series, setSeries] = useState({})
    const id = useParams().id

    useEffect(() => {
        const getSeries = async () => {
            const series = await seriesService.fetchOne(id)
            setSeries(series)
        }
        getSeries()
    },[id])

    return (
        <h1>{series.name}</h1>
    )
}

export default SeriesPage