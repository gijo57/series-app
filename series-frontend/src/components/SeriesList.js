import React, { useEffect } from 'react'
import Series from '../components/Series'

const SeriesList = ({ status, series, add, remove }) => {
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
                <div className='seriesList'>{series.filter(s => s.list === status).map(s =>
                    <Series key={s.id}
                            status={status}
                            series={s}
                            add={add}
                            remove={remove}/>)}
                </div>       
            </div>
        )
    }
}

export default SeriesList