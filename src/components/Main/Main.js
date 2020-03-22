import React from "react"
import CellSelector from "../CellSelector/CellSelector"
import ContentContainer from "../ContentContainer/ContentContainer"
import Contact from "../Contact/Contact"
import Mission from "../Mission/Mission"
import Tompiler from "../Tompiler/Tompiler"
import Articles from "../Articles/Articles"
import Tutorials from "../Tutorials/Tutorials"
import { CSSTransition, TransitionGroup } from "react-transition-group"

import "./main.css"

const Main = props => {
  let main = <Mission />
  if (props.route === "contact") {
    main = <Contact />
  } else if (props.route === "tompiler") {
    main = <Tompiler />
  } else if (props.route === "articles") {
    main = <Articles />
  } else if (props.route === "tutorials") {
    main = <Tutorials />
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
            <ContentContainer {...props} key={props.route}>
              {main}
            </ContentContainer>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  )
}

export default Main
