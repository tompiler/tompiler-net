import React from "react"
import CellSelector from "../CellSelector/CellSelector"
import ContentContainer from "../Main/ContentContainer/ContentContainer"
import Contact from "../Main/Contact/Contact"
import Mission from "../Main/Mission/Mission"
import Tompiler from "../Main/Tompiler/Tompiler"
import Articles from "../Main/Articles/Articles"
import Tutorials from "../Main/Tutorials/Tutorials"

import {
  CSSTransition,
  Transition,
  TransitionGroup,
} from "react-transition-group"

import "./main.css"

const Main = ({ route, routeHandler }) => {
  let main = <Tompiler />
  if (route === "contact") {
    main = <Contact />
  } else if (route === "mission") {
    main = <Mission />
  } else if (route === "articles") {
    main = <Articles />
  } else if (route === "tutorials") {
    main = <Tutorials />
  } else if (route === "cv") {
    main = <div />
  }
  console.log("Route:", route)

  const duration = 300

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  }

  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  }

  return (
    <div className="parent">
      <div className="container-left">
        <Transition
          in={route !== "cv" ? true : false}
          timeout={duration}
          unmountOnExit
        >
          {state => (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              <CellSelector route={route} routeHandler={routeHandler} />
            </div>
          )}
        </Transition>
      </div>

      <div className="container-right">
        <TransitionGroup className="card-container">
          <CSSTransition
            in={true}
            key={route}
            // appear={true}
            timeout={800}
            classNames="display"
            unmountOnExit
          >
            <ContentContainer
              route={route}
              routeHandler={routeHandler}
              key={route}
            >
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
