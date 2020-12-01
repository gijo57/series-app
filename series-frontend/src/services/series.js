/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/series'

const fetchSeries = async (title) => {
    const url = `${baseUrl}/api/${title}`
    const res = await axios.get(url)
    return res.data
}

const fetchOne = async (id) => {
    const url = `${baseUrl}/api/s/${id}`
    const res = await axios.get(url)
    return res.data
}

const fetchList = async () => {
    const url = `${baseUrl}/list`
    const response = await axios.get(url)
    return response.data
}

const fetchSeason = async (seriesId, seasonId) => {
    const url = `${baseUrl}/api/s/${seriesId}/season/${seasonId}`
    const res = await axios.get(url)
    return res.data
}

const addToList = async (list, series) => {
    const url = `${baseUrl}/list`
    const body = {
        series,
        list
    }
    const response = await axios.post(url, body)
    return response.data
}

const removeFromList = async (id) => {
    const url = `${baseUrl}/list/${id}`
    const response = await axios.delete(url)
    return response.data
}

export default {
    fetchSeries,
    fetchOne,
    fetchSeason,
    addToList,
    fetchList,
    removeFromList
}
