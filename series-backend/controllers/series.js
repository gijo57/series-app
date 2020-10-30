const config = require('../utils/config')
const seriesRouter = require('express').Router()
const Series = require('../models/series')
const axios = require('axios')

const apiKey = config.API_KEY

const fetchSeries = (title) => {
    return axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-US&page=1&query=${title}&include_adult=false`)
}

seriesRouter.get('/api/:title', async (req, res) => {
    const title = req.params.title
    const response = await fetchSeries(title)
    const data = response.data
    res.json(data)
})

seriesRouter.get('/list', async (req, res) => {
    console.log('1')
    const series = await Series.find({})
    console.log(series)
    res.json(series)
})

seriesRouter.post('/list', async (req, res) => {
    const { series, list } = req.body;

    const listSeries = {
        original_name: series.original_name,
        genre_ids: series.genre_ids,
        name: series.name,
        popularity: series.popularity,
        origin_country: series.origin_country,
        vote_count: series.vote_count,
        first_air_date: series.first_air_date,
        backdrop_path: series.backdrop_path,
        original_language: series.original_language,
        id: series.id,
        vote_average: series.vote_average,
        overview: series.overview,
        poster_path: series.poster_path,
        list: list
    }
    
    const query = { id:  series.id }
    const options = { upsert: true, new: true}

    const newSeries = await Series.findOneAndUpdate(query, listSeries, options)
    res.json(newSeries)
    
})

seriesRouter.delete('/list/:id', async (req, res) => {
    await Series.deleteOne({id: req.params.id})
    res.status(204).end()
})

module.exports = seriesRouter