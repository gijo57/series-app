/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/series'

const getSeries = async (title) => {
    const body = {
        title
    }
    const res = await axios.post(baseUrl, body)
    return res.data
}

export default {
    getSeries,
}
