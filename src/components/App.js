import React from "react"
import { Router, Location, Redirect } from "@reach/router"

const App = props => {
  return (
    <Location>
      {({ location }) => (
        <Router location={location}>
          <Redirect from="/" to="tompiler" noThrow />
          {props.children}
        </Router>
      )}
    </Location>
  )
}

export default App
