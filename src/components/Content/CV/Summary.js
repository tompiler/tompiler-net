import React from "react"

import styled from "styled-components"

const SummaryHeadingContainer = styled("div")`
  display: inline-block;
  position: relative;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 20%;
  padding: 0 2vw;
  margin: 0;
  border-top: none;
  /* border: 1px dashed lightpink; */

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 1vh 2vw 0 2vw;
    margin: 1vh 0 0 0;
    border-top: ${(props) => `1px solid ${props.theme.color}`};
  }
`

const SummaryHeading = styled("h3")`
  top: 0%;
  width: 100%;
  text-align: left;
  font-size: 0.95vw;
  font-weight: 700;
  margin: 0 0 0.2vh 0;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 3vw;
    margin: 0 0 1vh 0;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 4vw;
    margin: 0 0 2vh 0;
  }
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
  text-align: left;
  margin: 0;
  font-size: 0.8vw;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 2.5vw;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 3vw;
  }
`

const Summary = ({ mobile, data }) => {
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
