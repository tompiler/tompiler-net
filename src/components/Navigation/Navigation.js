import React from "react"

import { TransitionState } from "gatsby-plugin-transition-link"
import { useLocation } from "@reach/router"

import MobileLink from "./MobileLink"

const Navigation = () => {
  const location = useLocation()
  return (
    <TransitionState>
      {props => (
        <>
          {/* <MobileLink {...props} to={"aims"} location={location} /> */}
          {/* <MobileLink {...props} to={"articles"} location={location} /> */}
          {/* <MobileLink {...props} to={"tutorials"} location={location} /> */}
          <MobileLink {...props} to={"contact"} location={location} />
          <MobileLink {...props} to={"cv"} location={location} />
        </>
      )}
    </TransitionState>
  )
}

export default Navigation
