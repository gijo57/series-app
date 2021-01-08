const config = require('./utils/config')
const express = require('express')
const helmet = require('helmet')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const seriesRouter = require('./controllers/series')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
mongoose.set('useFindAndModify', false);

mongoose
    .connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(console.log('successfully connected to mongo'))

app.use(helmet())
app.use(cors())
app.use(express.json())

app.use('/api/series', seriesRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

module.exports = app
