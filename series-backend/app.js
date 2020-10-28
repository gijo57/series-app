const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const axios = require('axios')
const mongoose = require('mongoose')

const apiKey = process.env.API_KEY

app.use(cors())
app.use(express.json())

const fetchSeries = (title) => {
    return axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-US&page=1&query=${title}&include_adult=false`)
}

app.post('/api/series', async (req, res) => {
    const title = req.body.title
    const response = await fetchSeries(title)
    const data = response.data
    console.log(data)
    res.json(data)
})

module.exports = app
