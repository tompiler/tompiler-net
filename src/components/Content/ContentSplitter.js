import React from "react"

import Content from "./Content"
import CV from "./CV/CV"

import { useTransition } from "react-spring"

const ContentSplitter = props => {
  const route = props.location.pathname.substr(1)

  const toggle = props.exit.state.exitState !== "cv" //|| route !== "cv" //|| props.exit.state.exitState === "cv"
  const transitions = useTransition(toggle, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      mass: 1,
      tension: 120,
      friction: 15,
    },
  })

  console.log(
    route,
    props.mount,
    props.transitionStatus,
    props.exit.state.exitState,
    props.entry.state.entryState
  )

  // not sure why this works but it does :/
  return transitions.map(({ item, key, transitionProps }) =>
    item ? (
      <div key={key} {...props}>
        {props.children}
      </div>
    ) : (
      <Content key={key} {...props}>
        {props.children}
      </Content>
    )
  )
}

export default ContentSplitter
