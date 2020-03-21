import React from "react"
import CellSelector from "../CellSelector/CellSelector"
import Contact from "../Contact/Contact"
import Mission from "../Mission/Mission"
import "./main.css"

const Main = props => {
  let main = <Mission />
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
