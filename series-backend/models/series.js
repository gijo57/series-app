const mongoose = require('mongoose')

const seriesSchema = mongoose.Schema({
    original_name: String,
    genre_ids: [Number],
    name: String,
    popularity: Number,
    origin_country: [String],
    vote_count: Number,
    first_air_date: String,
    backdrop_path: String,
    original_language: String,
    id: Number,
    vote_average: Number,
    overview: String,
    poster_path: String,
    list: String
})

seriesSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Series', seriesSchema)