import React from "react"
import { Router, Location } from "@reach/router"

import "../styles/app.scss"

const App = props => {
  return (
    <Location>
      {({ location }) => (
        <Router location={location} className="router">
          {props.children}
        </Router>
      )}
    </Location>
  )
}

export default App
