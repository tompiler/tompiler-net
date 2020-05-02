import React, { useState } from "react"

import { TransitionState } from "gatsby-plugin-transition-link"
import { useLocation } from "@reach/router"

import useWindowSize from "../useWindowSize"

import { Spring, animated } from "react-spring/renderprops"

import styled from "styled-components"

const Title = styled(animated.div)`
  width: 100%;
  /* color: #000000; */
  text-align: center;
  font-size: 2rem;
  font-family: "Open Sans";
  font-weight: 300;
  letter-spacing: 0.2rem;
  padding: 1vh 0;
`

const HeaderContainer = styled(animated.div)`
  display: flex;
  justify-content: center;
  width: 100%;
  height: ${props => (props.mobile === "true" ? "0px" : "6vh")};
  border-bottom: ${props => `1px solid ${props.theme.color}`};
`

const ContentContainer = styled("div")`
  display: block;
  position: relative;
  padding: 3vh 0;
  display: grid;
  grid-template-rows: 25%;
  grid-template-columns: 100%;
  justify-items: center;
  align-items: top;
  height: 100vh;
`

const Content = ({ children }) => {
  const location = useLocation()
  const route = location.pathname.substr(1)
  const windowSize = useWindowSize()

  // needed to fix 'first' link via transitionLink
  const [firstURL] = useState(location.pathname === "/" ? "tompiler" : route)

  // const props = useSpring({
  //   from: { opacity: 0 },
  //   to: {
  //     opacity: mount ? 1 : 0,
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
      {({ mount, transitionStatus, exit, entry }) => {
        const header =
          location.pathname === "/" &&
          exit.state.exitState === undefined &&
          entry.state.entryState === undefined
            ? "tompiler"
            : entry.state.entryState === undefined //&&
            ? firstURL
            : entry.state.entryState
        console.log(
          route,
          mount,
          transitionStatus,
          exit.state.exitState,
          entry.state.entryState
        )

        const entryState = entry.state.entryState
        const exitState = exit.state.exitState

        return (
          <Spring
            to={{
              opacity: mount ? 1 : 0,
            }}
            config={{
              mass: 1,
              tension: 120,
              friction: 15,
            }}
          >
            {props => {
              return (
                route !== "cv" && (
                  <>
                    <HeaderContainer
                      mobile={windowSize.width < 650 ? "true" : "false"}
                      // style={{
                      //   opacity:
                      //     entryState === "cv" && transitionStatus === "entered"
                      //       ? 0
                      //       : entryState === "cv" &&
                      //         transitionStatus !== "entered"
                      //       ? 0
                      //       : route === "cv" || (mount && exitState === "cv")
                      //       ? props.opacity
                      //       : 1,
                      // }}
                    >
                      {windowSize.width > 650 && (
                        <Title
                          style={{
                            opacity: props.opacity,
                          }}
                        >
                          {header}
                        </Title>
                      )}
                    </HeaderContainer>
                    <div>
                      <ContentContainer
                        style={{
                          opacity: props.opacity,
                        }}
                      >
                        {children}
                      </ContentContainer>
                    </div>
                  </>
                )
              )
            }}
          </Spring>
        )
      }}
    </TransitionState>
  )
}

export default Content
