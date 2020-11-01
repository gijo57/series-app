import React from 'react';
import SeriesList from '../components/SeriesList'
import Navbar from '../components/Navbar'
import SeriesPage from '../components/SeriesPage'
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
            <SeriesList status='finished'/>
          </Route>
          <Route path="/series/watching">
            <SeriesList status='watching'/>
          </Route>
          <Route path="/series/wishlist">
            <SeriesList status='wishlist'/>
          </Route>
          <Route path="/series/id/:id">
            <SeriesPage />
          </Route>
          <Route path="/series/browse">
            <SeriesForm />
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
