import React from "react"
import CellSelector from "../CellSelector/CellSelector"
import Contact from "../Contact/Contact"
import About from "../About/About"
import "./main.css"

const Main = props => {
  let main = <About />
  if (props.route === "contact") {
    main = <Contact />
  }

  return (
    <div className="parent">
      <div className="container-left">
        <CellSelector routeHandler={props.routeHandler} />
      </div>
      <div className="container-right">{main}</div>
    </div>
  )
}

export default Main
