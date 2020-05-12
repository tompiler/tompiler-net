import React from "react"

import useWindowSize from "../../useWindowSize"

import styled from "styled-components"

import { FeatureImage } from "./ProfilePic"

const TompilerItem = styled("div")`
  display: inline-block;
  width: 75%;
  height: 30%;
  text-align: justify;
  color: ${props => props.theme.color};
  line-height: 1.6;
  font-size: 0.88em;
`

const Tompiler = () => {
  const windowSize = useWindowSize()

  return (
    <>
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
    </>
  )
}

export default Tompiler
