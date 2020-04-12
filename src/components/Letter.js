import React from "react"
import { Transition } from "react-spring/renderprops"

import Cell from "./cell2"

const Letter = ({
  linkText,
  to,
  route,
  left,
  transitionStatus,
  setHover,
  setHoverElement,
  hoverElement,
  alpha,
  activeColour,
}) => {
  return (
    <Transition
      items={route}
      from={{
        backgroundColor: route === to ? "white" : activeColour,
      }}
      enter={{
        backgroundColor: route === to ? activeColour : "white",
      }}
      leave={{
        backgroundColor: route === to ? "white" : activeColour,
      }}
      config={{
        mass: 1,
        tension: 200,
        friction: 20,
      }}
    >
      {show =>
        show &&
        (props => (
          <Cell
            {...props}
            route={route}
            linkText={linkText}
            to={to}
            left={left}
            transitionStatus={transitionStatus}
            setHover={setHover}
            setHoverElement={setHoverElement}
            hoverElement={hoverElement}
            alpha={alpha}
          ></Cell>
        ))
      }
    </Transition>
  )
}

export default Letter
