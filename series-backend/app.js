const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')

const mongoose = require('mongoose')
const seriesRouter = require('./controllers/series')

mongoose
    .connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(console.log('successfully connected to mongo'))

app.use(cors())
app.use(express.json())

app.use('/api/series', seriesRouter)

module.exports = app
