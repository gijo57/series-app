import React from 'react';
import SeriesList from '../components/SeriesList'
import Navbar from '../components/Navbar'
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
          <Route path="/series">
            <SeriesList className='seriesList'/>
          </Route>
        </Switch>        
      </Router>
    </div>
  )
}

export default App;
