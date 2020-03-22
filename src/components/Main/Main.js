import React from "react"
import CellSelector from "../CellSelector/CellSelector"
import Contact from "../Contact/Contact"
import Mission from "../Mission/Mission"
import Tompiler from "../Tompiler/Tompiler"
import { CSSTransition, TransitionGroup } from "react-transition-group"

import "./main.css"

const Main = props => {
  // let main = (
  //   <div
  //     style={{
  //       width: "100vw",
  //       height: "100vh",
  //       backgroundColor: "rgba(192,63,230,.7)",
  //     }}
  //   ></div>
  // )
  // if (props.route === "contact") {
  //   main = (
  //     <div
  //       style={{
  //         width: "100vw",
  //         height: "100vh",
  //         backgroundColor: "rgba(20,102,24,.6)",
  //       }}
  //     ></div>
  //   )
  // } else if (props.route === "tompiler") {
  //   main = (
  //     <div
  //       style={{
  //         width: "100vw",
  //         height: "100vh",
  //         backgroundColor: "rgba(0,194,224,.7)",
  //       }}
  //     ></div>
  //   )
  // }
  let main = <Mission />
  if (props.route === "contact") {
    main = <Contact />
  } else if (props.route === "tompiler") {
    main = <Tompiler />
  }
  console.log("Route:", props.route)

  return (
    <div className="parent">
      <div className="container-left">
        <CellSelector routeHandler={props.routeHandler} />
      </div>

      <div className="container-right">
        <TransitionGroup className="card-container">
          <CSSTransition
            in={true}
            key={props.route}
            // appear={true}
            timeout={1000}
            classNames="display"
            unmountOnExit
          >
            {main}
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  )
}

export default Main
