import React from "react"
import { Router, Location } from "@reach/router"

const App = props => {
  return (
    <Location>
      {({ location }) => <Router location={location}>{props.children}</Router>}
    </Location>
  )
}

export default App
