import React from "react"

import Content from "./Content"
import CVContainer from "./CV/CVContainer"

import { useTransition } from "react-spring"

const ContentSplitter = props => {
  const route = props.location.pathname.substr(1)

  const toggle = props.entry.state.entryState === "cv" || route === "cv"
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

  // not sure why this works but it does :/
  return transitions.map(({ item, key, transitionProps }) =>
    item ? (
      <CVContainer key={key} {...props}>
        {props.children}
      </CVContainer>
    ) : (
      <Content key={key} {...props}>
        {props.children}
      </Content>
    )
  )
}

export default ContentSplitter
