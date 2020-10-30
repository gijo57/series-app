import React, { useEffect, useState } from 'react'
import Series from '../components/Series'

const SeriesList = ({ series, status }) => {
    let filteredSeries = []
    
    if(series) {
        filteredSeries = series.filter(s => s.list === status)
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
                <div className='seriesList'>{filteredSeries.map(s => <Series key={s.id} series={s}/>)}</div>       
            </div>
        )
    }
}

export default SeriesList