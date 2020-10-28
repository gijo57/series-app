import React, { useState, useEffect } from 'react';
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
            <SeriesList status='finished' className='seriesList'/>
          </Route>
          <Route path="/series/watching">
            <SeriesList status='watching' className='seriesList'/>
          </Route>
          <Route path="/series/wishlist">
            <SeriesList status='wishlist' className='seriesList'/>
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
