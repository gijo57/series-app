import React, { useState } from 'react'
import seriesService from '../services/series'
import Series from '../components/Series'

const SeriesForm = ({ add }) => {
    const [series, setSeries] = useState(null)
    const [title, setTitle] = useState('')

    const handleTitleChange = (event) => setTitle(event.target.value)

    const getSeries = async (event) => {
        event.preventDefault()
        const data = await seriesService.fetchSeries(title)
        setSeries(data)
        setTitle('')
    }

    if (!series || series === null) {
        return (
            <div>
                <form id='seriesform' onSubmit={getSeries}>
                    Search series: <input id='title' type='text' value={title} name='title' onChange={handleTitleChange} />
                    <button type='submit'>Search</button>
                </form>
            </div>
        )
    } else {
        const results = series.results.map(s => <Series key={s.id} series={s} add={add} />)
        return (
            <div>
                <form id='seriesform' onSubmit={getSeries}>
                    Search series: <input id='title' type='text' value={title} name='title' onChange={handleTitleChange} />
                    <button type='submit'>Search</button>
                </form>
                <div>
                    {series.results.length > 30
                        ? <h2>Too many results, please define your search...</h2>
                        : <div className='seriesList'>{results}</div>
                    }
                </div>
            </div>
        )
    }
}

export default SeriesForm