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

// import { Transition } from "react-spring/renderprops"

import { animated, useSpring, useTransition, config } from "react-spring"

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

  // const props = useSpring({
  //   to: { opacity: route === "cv" ? 0 : 1 },
  //   from: { opacity: 1 },
  //   config: { duration: 200 },
  // })

  // const props = useTransition(route, null, {
  //   from: { opacity: 1 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  // })

  // const transitions = useTransition(location, location => location.pathname, {
  //   from: { opacity: 0, transform: "translate3d(100%,0,0)" },
  //   enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
  //   leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  // })

  // const transition = useTransition(route, null, {
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  // })

  const duration = 300

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  }

  const transitionStyles = {
    entering: { opacity: 1 },
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
