import React from "react"

import { TransitionState } from "gatsby-plugin-transition-link"
import { useLocation } from "@reach/router"

// import { useSpring, animated } from "react-spring"

import ContentSplitter from "./ContentSplitter"

const ContentContainer = props => {
  const location = useLocation()

  // const springProps = useSpring({
  //   from: { opacity: 0 },
  //   to: {
  //     opacity: mount && route === "cv" ? 1 : 0,
  //   },
  //   config: {
  //     //   duration: 1000,
  //     mass: 1,
  //     tension: 120,
  //     friction: 15,
  //   },
  // })
  return (
    <TransitionState>
      {transitionProps => (
        <ContentSplitter {...transitionProps} location={location}>
          {props.children}
        </ContentSplitter>
      )}
    </TransitionState>
  )
}

export default ContentContainer
