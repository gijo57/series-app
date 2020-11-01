import React, { useEffect, useState } from 'react'
import seriesService from '../services/series'
import Series from '../components/Series'

const SeriesList = ({ status }) => {
    const [series, setSeries] = useState([])

    useEffect(() => {
        getSeries()
    },[status])

    const getSeries = async () => {
        const data = await seriesService.fetchList()
        const series = await data.filter(s => s.list === status)
        setSeries(series)
    }

    const removeFromList = (s) => {
        const updatedSeries = series.filter(series => series.id !== s.id)
        setSeries(updatedSeries)
        seriesService.removeFromList(s.id)
    }

    let title = ''
    if (status === 'finished') {
        title = 'Series you\'ve finished watching'
    } else if (status === 'watching') {
        title = 'Series you\'re watching'
    } else if (status === 'wishlist') {
        title = 'Series you want to see in the future'
    }

    if (!series) {
        return null
    } else {
        return (
            <div>
                <h1>{title}</h1>
                <div className='seriesList'>{series.map(s =>
                    <Series key={s.id}
                            status={status}
                            series={s}
                            remove={removeFromList}
                            get={getSeries}/>)}
                </div>       
            </div>
        )
    }
}

export default SeriesList