/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'
const baseUrl = 'http://localhost:3001/series'

const getSeries = async () => {
    const res = await axios.get(baseUrl)
    return res.data
}

export default { 
    getSeries
 }