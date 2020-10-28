const config = require('../utils/config')
const seriesRouter = require('express').Router()
const axios = require('axios')

const apiKey = config.API_KEY

const fetchSeries = (title) => {
    return axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-US&page=1&query=${title}&include_adult=false`)
}

seriesRouter.post('/', async (req, res) => {
    const title = req.body.title
    const response = await fetchSeries(title)
    const data = response.data
    console.log(data)
    res.json(data)
})

module.exports = seriesRouter