import React from "react"
import CellSelector from "../CellSelector/CellSelector"
import ContentContainer from "../Main/ContentContainer/ContentContainer"
import Contact from "../Main/Contact/Contact"
import Mission from "../Main/Mission/Mission"
import Tompiler from "../Main/Tompiler/Tompiler"
import Articles from "../Main/Articles/Articles"
import Tutorials from "../Main/Tutorials/Tutorials"
import { CSSTransition, TransitionGroup } from "react-transition-group"

import "./main.css"

const Main = props => {
  let main = <Tompiler />
  if (props.route === "contact") {
    main = <Contact />
  } else if (props.route === "mission") {
    main = <Mission />
  } else if (props.route === "articles") {
    main = <Articles />
  } else if (props.route === "tutorials") {
    main = <Tutorials />
  }
  console.log("Route:", props.route)

  return (
    <div className="parent">
      <div className="container-left">
        <CellSelector {...props} />
      </div>

      <div className="container-right">
        <TransitionGroup className="card-container">
          <CSSTransition
            in={true}
            key={props.route}
            // appear={true}
            timeout={800}
            classNames="display"
            unmountOnExit
          >
            <ContentContainer {...props} key={props.route}>
              {main}
              <div className="container-bottom"></div>
            </ContentContainer>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  )
}

export default Main
