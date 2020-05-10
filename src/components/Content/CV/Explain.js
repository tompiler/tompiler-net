import React from "react"

import styled from "styled-components"

const ExplainContainerHeading = styled("h3")`
  position: relative;
  font-weight: 700;
  padding: 0vh 2vw;
  margin: 2vh 0 1vh 0;
  /* border: 1px dashed lightpink; */
`

const ExplainDescription = styled("p")`
  position: relative;
  font-size: 0.95em;
  margin: 0.5vh 0 1vh 0;
`

const ExplainDescriptionContainer = styled("div")`
  display: inline-block;
  position: relative;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 80%;
  border: 1px dashed lightpink;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0 2vw;
  /* margin: 2vh 0; */
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
