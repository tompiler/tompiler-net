import React from "react"

import { TransitionState } from "gatsby-plugin-transition-link"
import { useLocation } from "@reach/router"

import ContentSplitter from "./ContentSplitter"

const TransitionStateWrapper = props => {
  const location = useLocation()

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

export default TransitionStateWrapper
