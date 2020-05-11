import React from "react"

import styled from "styled-components"

const SummaryHeadingContainer = styled("div")`
  display: inline-block;
  position: relative;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 20%;
  border: 1px dashed lightpink;
  padding: 0vh 2vw;
`

const SummaryHeading = styled("p")`
  line-height: 2vh;
  top: 0%;
  width: 100%;
  font-size: 1.5em;
  text-align: left;
  font-weight: 700;
  margin: 0em 0 0 0vw;
`

const SummaryDescriptionContainer = styled("div")`
  display: inline-block;
  position: relative;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 80%;
  border: 1px dashed lightpink;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0vh 2vw;
`

const SummaryDescription = styled("p")`
  font-size: 0.95em;
  text-align: left;
  margin: 0vh 0vw 0vh 0vw;
  /* font-weight: 600; */
`

const Summary = ({ data }) => {
  return (
    <>
      <SummaryHeadingContainer>
        <SummaryHeading>{data.dataJson.summary.heading}</SummaryHeading>
      </SummaryHeadingContainer>
      <SummaryDescriptionContainer>
        <SummaryDescription>{data.dataJson.summary.text}</SummaryDescription>
      </SummaryDescriptionContainer>
    </>
  )
}

export default Summary
