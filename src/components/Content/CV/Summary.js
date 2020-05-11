import React from "react"

import styled from "styled-components"

const SummaryHeadingContainer = styled("div")`
  display: inline-block;
  position: relative;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 20%;
  padding: ${props => (props.mobile ? "1vh 2vw 0 0" : "0 2vw")};
  margin: ${props => (props.mobile ? "1vh 0 0 0" : "0")};
  border-top: ${props =>
    props.mobile ? `1px solid ${props.theme.color}` : "none"};
  /* border: 1px dashed lightpink; */
`

const SummaryHeading = styled("h3")`
  top: 0%;
  width: 100%;
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
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0vh 2vw;
  /* border: 1px dashed lightpink; */
`

const SummaryDescription = styled("p")`
  font-size: 0.95em;
  text-align: left;
  margin: 0vh 0vw 0vh 0vw;
  /* font-weight: 600; */
`

const Summary = ({ mobile, data }) => {
  console.log(mobile)
  return (
    <>
      <SummaryHeadingContainer mobile={mobile}>
        <SummaryHeading>{data.dataJson.summary.heading}</SummaryHeading>
      </SummaryHeadingContainer>
      <SummaryDescriptionContainer>
        <SummaryDescription>{data.dataJson.summary.text}</SummaryDescription>
      </SummaryDescriptionContainer>
    </>
  )
}

export default Summary
