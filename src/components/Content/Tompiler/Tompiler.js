import React from "react"
import useWindowSize from "../../useWindowSize"

import styled from "styled-components"

const TompilerItem = styled("div")`
  display: inline-block;
  width: 75%;
  height: 0;
  text-align: justify;
  color: black;
  line-height: 1.6;
  font-size: 0.84em;
`

const Tompiler = () => {
  const windowSize = useWindowSize()

  return (
    <TompilerItem mobile={windowSize.width < 650 ? true : false}>
      Hello, my name is tom. <br />
      <br />
      I'm a software engineer living in London. I like learning a lot.
      <br />
      <br />
    </TompilerItem>
  )
}

export default Tompiler
