require('dotenv').config();
const express = require('express')
const app = express()
const cors = require('cors')
const axios = require('axios')

const apiKey = process.env.API_KEY

app.use(cors())
app.use(express.json())

const getSeries = (title) => {
    return axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-US&page=1&query=${title}&include_adult=false`)
}

app.post('/api/series', async (req, res) => {
    const title = req.body.title
    const response = await getSeries(title)
    const data = response.data
    console.log(data)
    res.json(data)
})

module.exports = app
