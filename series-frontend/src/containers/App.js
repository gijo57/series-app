import React, { useState, useEffect } from 'react';
import SeriesList from '../components/SeriesList'
import Navbar from '../components/Navbar'
import Series from '../components/Series'
import SeriesForm from '../components/SeriesForm'
import seriesService from '../services/series'
import './App.css'
import {
  BrowserRouter as Router,
  Switch, Route,
} from "react-router-dom"

const App = () => {
  const [series, setSeries] = useState(null)

  useEffect(() => {
      getSeries()
  },[])

  const getSeries = async () => {
    const data = await seriesService.fetchList()
    setSeries(data)
  }

  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/series/finished/:id">
            <Series className='seriesList'/>
          </Route>
          <Route path="/series/watching/:id">
            <Series className='seriesList'/>
          </Route>
          <Route path="/series/wishlist/:id">
            <Series className='seriesList'/>
          </Route>
          <Route path="/series/finished">
            <SeriesList series={series} status='finished'/>
          </Route>
          <Route path="/series/watching">
            <SeriesList series={series} status='watching'/>
          </Route>
          <Route path="/series/wishlist">
            <SeriesList series={series} status='wishlist'/>
          </Route>
          <Route path="/series">
            <SeriesForm />
          </Route>
        </Switch>        
      </Router>
    </div>
  )
}

export default App;
