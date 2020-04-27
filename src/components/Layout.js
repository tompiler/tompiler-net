import React from "react"

import Toolbar from "./Toolbar/Toolbar"
import layoutStyles from "./layout.module.scss"

import useWindowSize from "./useWindowSize"

import { Content } from "./Content/Content"

import styled from "styled-components"

const Navigation = styled("div")`
  position: fixed;
  height: ${props => (props.mobile ? "56px" : "70vh")};
  top: 56px;
  left: 0;
  width: ${props => (props.mobile ? "100%" : "50%")};
  z-index: 0;
  display: ${props => (props.mobile ? "block" : "flex")};
  align-items: ${props => (props.mobile ? "stretch" : "center")};
`

const LinkContainer = styled("div")`
  display: flex;
  justify-content: center;
  flex-direction: ${props => (props.mobile ? "row" : "column")};
`

const ContainerRight = styled("div")`
  display: block;
  position: fixed;
  top: ${props => (props.mobile ? "18vh" : "12vh")};
  left: ${props => (props.mobile ? "10%" : "30vw")};
  width: ${props => (props.mobile ? "80%" : "40vw")};
  height: 100vh;
  text-align: center;
`

const Layout = props => {
  const windowSize = useWindowSize()

  return (
    <>
      <Toolbar />
      <div>
        <Navigation mobile={windowSize.width < 650 ? true : false}>
          <div>
            <LinkContainer mobile={windowSize.width < 650 ? true : false}>
              {props.left}
            </LinkContainer>
          </div>
        </Navigation>
        <ContainerRight mobile={windowSize.width < 650 ? true : false}>
          <Content name={props.name}>{props.children}</Content>
        </ContainerRight>
      </div>
    </>
  )
}

export default Layout
