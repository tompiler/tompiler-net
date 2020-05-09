import React from "react"

import { useTransition, animated } from "react-spring"

import CVDetailLayout from "./CVDetailLayout"

import styled from "styled-components"

const DetailContainer = styled(animated.div)`
  display: inline-block;
  position: absolute;
  left: 56vw;
  height: 89vh;
  width: 30vw;
  /* border: 1px dashed lightpink; */
  overflow: hidden;
`

const ExplainContainer = styled("div")`
  display: inline-block;
  position: absolute;
  top: 65%;
  width: 100%;
  height: 35%;
  padding: 1vh 2vw;
  /* border: 1px dashed lightpink; */
`

const ExplainContainerHeading = styled("h3")`
  position: relative;
  /* border: 1px dashed lightpink; */
  font-weight: 700;
`

const ExplainContainerContent = styled("p")`
  position: relative;
  font-size: 0.95em;
`

const EmploymentDetail = ({ selected, detailProps }) => {
  const transitions = useTransition(selected.value, null, {
    from: {
      opacity: 0
    },
    update: { opacity: 1 },
    leave: {
      opacity: 0
    },
    config: {
      mass: 1,
      tension: 270,
      friction: 30
    }
  })

  return (
    <DetailContainer style={{ opacity: detailProps.opacity }}>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div item={item} key={key} style={props}>
              <CVDetailLayout selected={item}></CVDetailLayout>
            </animated.div>
          )
      )}
      <ExplainContainer>
        <ExplainContainerHeading>
          Work Experience Dendogram
        </ExplainContainerHeading>
        <ExplainContainerContent>
          The chart to the left shows the relationship between my work
          experience and the skills I acquired during that time.
        </ExplainContainerContent>
        <ExplainContainerContent>
          The first heading, 'Experience', details each job I've had. The next
          lists broad categories in which the individual tools under the final
          heading belong to. Hovering over each job in the left-hand column
          highlights each of the links between those categories and tools.
        </ExplainContainerContent>
        <ExplainContainerContent>
          To see more detail on each job, click on one of these jobs in the left
          hand column and more detail will be visible in the panel directly
          above this one.
        </ExplainContainerContent>
      </ExplainContainer>
    </DetailContainer>
  )
}

export default EmploymentDetail
