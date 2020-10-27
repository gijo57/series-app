import React, { useEffect, useState } from 'react'
import Series from './Series'
import seriesService from '../services/series'

const SeriesList = ( { className } ) => {
    const [series, setSeries] = useState([])

    useEffect(() => {
        seriesService.getSeries().then(res => {
            setSeries(res)
        })
    },[])
    
    return (
        <div>
            <h1>SeriesList</h1>
            <div className={className}>            
                {series.map(s => <Series key={s.name} series={s}/>)}
            </div>
        </div>
    )
}

export default SeriesList