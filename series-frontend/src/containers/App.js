import React, { useState, useEffect } from 'react';
import seriesService from '../services/series'
import SeriesList from '../components/SeriesList'
import Navbar from '../components/Navbar'
import Series from '../components/Series'
import SeriesForm from '../components/SeriesForm'
import './App.css'
import {
  BrowserRouter as Router,
  Switch, Route,
} from "react-router-dom"

const App = () => {
  const [series, setSeries] = useState([])

  useEffect(() => {
      seriesService.getSeries().then(res => {
          setSeries(res)
      })
  },[])

  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/series/finished/:id">
            <Series series={series} className='seriesList'/>
          </Route>
          <Route path="/series/watching/:id">
            <Series series={series} className='seriesList'/>
          </Route>
          <Route path="/series/wishlist/:id">
            <Series series={series} className='seriesList'/>
          </Route>
          <Route path="/series/finished">
            <SeriesList status='finished' series={series} className='seriesList'/>
          </Route>
          <Route path="/series/watching">
            <SeriesList status='watching' series={series} className='seriesList'/>
          </Route>
          <Route path="/series/wishlist">
            <SeriesList status='wishlist' series={series} className='seriesList'/>
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
