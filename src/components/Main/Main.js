import React, { useRef, useEffect } from "react"
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

const usePrevious = value => {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

const Main = ({ route, routeHandler }) => {
  const prevRoute = usePrevious(route)
  console.log("Route:", route, "prevRoute:", prevRoute)

  const leftTransition = prevRoute === "cv" ? 125 : 250

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

  const defaultStyle = {
    transition: `opacity ${leftTransition}ms ease-in-out`,
    opacity: 0,
    background: "red",
  }

  const transitionStyles = {
    entering: {
      opacity: 0,
      transform: "translateX(-200px)",
    },
    entered: {
      opacity: 1,
      transform: "translateX(-0px)",
      transition: `all ${leftTransition}ms ease-in-out`,
    },
    exiting: {
      opacity: 0,
      transform: "translateX(-300px)",
      transition: "all 250ms ease-in-out",
    },
    exited: { opacity: 0 },
  }

  return (
    <div className="parent">
      <div className="container-left">
        <Transition
          in={route !== "cv" ? true : false}
          appear={true}
          timeout={leftTransition}
          unmountOnExit
        >
          {state => (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              <CellSelector
                style={{
                  transform: "translateX-300px)",
                }}
                route={route}
                routeHandler={routeHandler}
              />
            </div>
          )}
        </Transition>
      </div>

      <div className="container-right">
        <TransitionGroup className="card-container">
          <CSSTransition
            in={true}
            key={route}
            appear={true}
            timeout={1000}
            classNames="contentright"
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
