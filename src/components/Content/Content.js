import React, { useState } from "react"

import useWindowSize from "../useWindowSize"

import { useSpring, animated } from "react-spring"

import styled from "styled-components"

const Title = styled(animated.div)`
  width: 100%;
  text-align: center;
  font-size: 2em;
  font-family: "Open Sans";
  font-weight: 300;
  letter-spacing: 0.1em;
  padding: 2vh 0 15px 0;
`

const HeaderContainer = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 6vh;
  border-bottom: ${props => `1px solid ${props.theme.color}`};

  @media ${props => props.theme.breakpoints.md} {
    height: 0;
  }
`

const ChildContainer = styled(animated.div)`
  display: block;
  padding: 3vh 0;
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
`

const ContentContainer = styled("div")`
  display: block;
  position: absolute;
  top: 14vh;
  left: 30vw;
  width: 40%;
  height: auto;
  text-align: center;

  @media ${props => props.theme.breakpoints.md} {
    top: 110px;
    left: 10%;
    width: 80%;
  }
`

const Content = ({
  mount,
  transitionStatus,
  exit,
  entry,
  location,
  children
}) => {
  const route = location.pathname.replace(/\//g, "")
  const windowSize = useWindowSize()

  // needed to fix 'first' link via transitionLink
  const [firstURL] = useState(location.pathname === "/" ? "tompiler" : route)

  const entryState = entry.state.entryState
  const exitState = exit.state.exitState

  const header =
    location.pathname === "/" &&
    exitState === undefined &&
    entryState === undefined
      ? "tompiler"
      : entryState === undefined //&&
      ? firstURL
      : entryState

  const props = useSpring({
    from: { opacity: 0 },
    to: {
      opacity: mount && route !== "cv" ? 1 : 0
    },
    config: {
      mass: 1,
      tension: 120,
      friction: 15
    }
  })

  return (
    <ContentContainer>
      <>
        <HeaderContainer
          style={{
            opacity:
              entryState === "cv" && transitionStatus === "entered"
                ? 0
                : entryState === "cv" && transitionStatus !== "entered"
                ? 0
                : route === "cv" || (mount && exitState === "cv")
                ? props.opacity
                : 1
          }}
        >
          {windowSize.width > 650 && (
            <Title
              style={{
                opacity: props.opacity
              }}
            >
              {header}
            </Title>
          )}
        </HeaderContainer>
        <div>
          <ChildContainer
            style={{
              opacity: props.opacity
            }}
          >
            {children}
          </ChildContainer>
        </div>
      </>
    </ContentContainer>
  )
}

export default Content
