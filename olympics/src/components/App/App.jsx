import React from 'react'

import './App.css'
import Chart from '../Chart'
import Navigation from '../Navigation'

export default () =>
  <div className="App">
    <div>
      <Navigation/>
      <div className = "container">
        <div className="App-chart-container">
          <Chart />
        </div>
      </div>
    </div>

  </div>
