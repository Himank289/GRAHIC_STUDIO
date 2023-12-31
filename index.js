import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Desktop1 from './views/desktop1'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Desktop1} exact path="/" />
        <Route component={NotFound} path="**" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
