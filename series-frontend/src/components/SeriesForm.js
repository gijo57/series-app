import React, { useState } from 'react'
import seriesService from '../services/series'

const SeriesForm = () => {
    const [series, setSeries] = useState(null)
    const [title, setTitle] = useState('')

    const handleTitleChange = (event) => setTitle(event.target.value)

    const getSeries = async (event) => {
        console.log('test')
        event.preventDefault()
        const data = await seriesService.getSeries(title)
        setSeries(data)
        setTitle('')
    }

    if (!series) {
        return (
            <div>
                <form id='form' onSubmit={getSeries}>
                    Search series: <input id='title' type='text' value={title} name='title' onChange={handleTitleChange} />
                    <button type='submit'>Search</button>
                </form>
            </div>
        )        
    } else {
        return (
            <div>
                <form id='form' onSubmit={getSeries}>
                    Search series: <input id='title' type='text' value={title} name='title' onChange={handleTitleChange} />
                    <button type='submit'>Search</button>
                </form>
                <div>
                    {series.results.length > 10
                        ? <h2>Too many results, please define your search...</h2>
                        : <h2>{series.results[0].original_name}</h2>
                    }
                </div>
            </div>
        )
    }
}

export default SeriesForm