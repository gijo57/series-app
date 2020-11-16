import React, { useState } from 'react';
import SeriesList from '../components/SeriesList'
import Navbar from '../components/Navbar'
import SeriesPage from '../components/SeriesPage'
import SeasonPage from '../components/SeasonPage'
import SeriesForm from '../components/SeriesForm'
import seriesService from '../services/series'
import './App.css'
import {
  BrowserRouter as Router,
  Switch, Route,
} from "react-router-dom"

const App = () => {
  const [series, setSeries] = useState([])

  const getSeries = async (status) => {
    const data = await seriesService.fetchList()
    const series = await data.filter(s => s.list === status)
    setSeries(series)
  }

  const addToList = (status, series) => {
    seriesService.addToList(status, series)
    getSeries()
  }

  const removeFromList = (s) => {
    const updatedSeries = series.filter(series => series.id !== s.id)
    setSeries(updatedSeries)
    seriesService.removeFromList(s.id)
  }

  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Switch>
          {/* <Route path='/series/finished/:id'>
            <Series className='seriesList'/>
          </Route>
          <Route path="/series/watching/:id">
            <Series className='seriesList'/>
          </Route>
          <Route path="/series/wishlist/:id">
            <Series className='seriesList'/>
          </Route> */}
          <Route path="/series/finished">
            <SeriesList status='finished' get={getSeries} series={series} add={addToList} remove={removeFromList} />
          </Route>
          <Route path="/series/watching">
            <SeriesList status='watching' get={getSeries} series={series} add={addToList} remove={removeFromList} />
          </Route>
          <Route path="/series/wishlist">
            <SeriesList status='wishlist' get={getSeries} series={series} add={addToList} remove={removeFromList} />
          </Route>
          <Route path="/series/id/:id">
            <SeriesPage add={addToList} />
          </Route>
          <Route path="/series/:id/season/:season_number">
            <SeasonPage userSeries={series} />
          </Route>
          <Route path="/series/browse">
            <SeriesForm add={addToList} />
          </Route>
          <Route path="/">
            <h1>Hello World!</h1>
          </Route>
        </Switch>        
      </Router>
    </div>
  )
}

export default App;
