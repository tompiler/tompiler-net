import React from "react"

import styled from "styled-components"

const ExplainContainerHeading = styled("h3")`
  display: inline-block;
  width: 100%;
  font-weight: 700;
  padding: 1vh 0 1vh 2vw;
  margin: 0;
  text-align: left;
  /* border: 1px dashed lightpink; */
`

const ExplainDescription = styled("p")`
  position: relative;
  font-size: 0.85vw;
  margin: 0.5vh 0 1vh 0;
`

const ExplainDescriptionContainer = styled("div")`
  display: inline-block;
  position: relative;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 80%;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 0.5vw 2vw 2vw;
  text-align: left;
  /* border: 1px dashed lightpink; */
`

const Explain = ({ data }) => {
  return (
    <>
      <ExplainContainerHeading>
        {data.dataJson.explain.heading}
      </ExplainContainerHeading>
      <ExplainDescriptionContainer>
        {data.dataJson.explain.paragraphs.map((paragraph, i) => (
          <ExplainDescription key={i}>{paragraph}</ExplainDescription>
        ))}
      </ExplainDescriptionContainer>
    </>
  )
}

export default Explain
