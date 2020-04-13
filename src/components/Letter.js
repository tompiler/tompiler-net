import React from "react"
import { Transition } from "react-spring/renderprops"

import Cell from "./cell2"

const Letter = props => {
  return (
    // <Transition
    //   items={route}
    //   from={{
    //     backgroundColor: route === to ? "white" : activeColour,
    //   }}
    //   enter={{
    //     backgroundColor: route === to ? activeColour : "white",
    //   }}
    //   leave={{
    //     backgroundColor: route === to ? "white" : activeColour,
    //   }}
    //   config={{
    //     mass: 1,
    //     tension: 200,
    //     friction: 20,
    //   }}
    // >
    //   {show =>
    //     show &&
    //     (props => (
    <Cell
      {...props}
      route={props.route}
      linkText={props.linkText}
      to={props.to}
      left={props.left}
      top={props.top}
      transitionStatus={props.transitionStatus}
      setClickedWord={props.setClickedWord}
      setHover={props.setHover}
      setHoverElement={props.setHoverElement}
      clickedWord={props.clickedWord}
      hoverElement={props.hoverElement}
      alpha={props.alpha}
      activeColour={props.activeColour}
    ></Cell>
    //     ))
    //   }
    // </Transition>
  )
}

export default Letter
