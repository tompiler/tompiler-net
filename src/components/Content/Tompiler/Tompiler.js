import React from "react"

import useWindowSize from "../../useWindowSize"

import styled from "styled-components"

import { FeatureImage } from "./ProfilePic"

const TompilerContainer = styled("div")`
  display: flex;
  flex-direction: column;
  width: 75%;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 0.85em;
    width: 90%;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 0.8em;
    width: 90%;
  }
`

const TompilerItem = styled("div")`
  display: block;
  /* position: absolute; */
  /* width: 100%; */
  min-height: 16%;
  text-align: justify;
  color: ${props => props.theme.color};
  line-height: 1.6;
  font-size: 0.9em;

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 0.8em;
  }
`

const Tompiler = () => {
  const windowSize = useWindowSize()

  return (
    <>
      <TompilerContainer>
        <TompilerItem mobile={windowSize.width < 650 ? true : false}>
          Hello, my name is tom. <br />
          <br />
          I'm a software engineer living in London. I like learning a lot.
          <br />
          <br />
          Here is a picture of me taken by a socially distanced photographer:
          <br />
        </TompilerItem>
        <FeatureImage />
      </TompilerContainer>
      {/* <TompilerItem> */}
      {/* </TompilerItem> */}
    </>
  )
}

export default Tompiler
