import React from "react"
import { Spring, animated } from "react-spring/renderprops"
import { TransitionState } from "gatsby-plugin-transition-link"
import { useLocation } from "@reach/router"
import useWindowSize from "../useWindowSize"

import styled from "styled-components"

const Title = styled(animated.div)`
  width: 100%;
  color: #000000;
  text-align: center;
  font-size: 2rem;
  font-family: "Open Sans";
  font-weight: 300;
  letter-spacing: 0.2rem;
  padding: 1vh 0;
`

const HeaderContainer = styled("div")`
  display: flex;
  justify-content: center;
  width: 100%;
  height: ${props => (props.mobile ? "0px" : "6vh")};
  border-bottom: 1px solid #000;
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

const Content = ({ children, name }) => {
  const location = useLocation()
  const route = location.pathname.substr(1)
  const windowSize = useWindowSize()
  const firstURL = location.pathname === "/" ? "tompiler" : route

  return (
    <TransitionState>
      {({ mount, exit, entry }) => {
        const header =
          location.pathname === "/" &&
          exit.state.exitState === undefined &&
          entry.state.entryState === undefined
            ? "tompiler"
            : entry.state.entryState === undefined //&&
            ? firstURL
            : entry.state.entryState

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
                <>
                  <HeaderContainer
                    mobile={windowSize.width < 650 ? true : false}
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
            }}
          </Spring>
        )
      }}
    </TransitionState>
  )
}

export { Content }
