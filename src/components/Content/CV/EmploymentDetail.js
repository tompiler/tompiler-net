import React from "react"

import { animated } from "react-spring"

import { Line, Circle } from "./Timeline"

import CRA from "./EmploymentItems/CRA"
import Decathlon from "./EmploymentItems/Decathlon"
import InfinityWorks from "./EmploymentItems/InfinityWorks"
import RatedPeople from "./EmploymentItems/RatedPeople"
import SideProjects from "./EmploymentItems/SideProjects"
import Mindshare from "./EmploymentItems/Mindshare"
import Education from "./EmploymentItems/Education"

import CVDetailLayout from "./CVDetailLayout"

import styled from "styled-components"

const DetailContainer = styled(animated.div)`
  display: inline-block;
  position: absolute;
  left: 56vw;
  height: 89vh;
  width: 30vw;
  border: 1px dashed lightpink;
  overflow: hidden;
`

const JobTitle = styled("p")`
  top: 2%;
  text-align: center;
  font-style: italic;
  font-size: 0.8em;
  margin: 1vh 0.8vw;
`

const JobDuration = styled("p")`
  top: 10%;
  text-align: center;
  font-style: italic;
  font-size: 0.8em;
  margin: 1vh 0.5vw;
`

const ExplainContainer = styled("div")`
  display: inline-block;
  position: absolute;
  top: 70%;
  width: 100%;
  height: 30%;
  padding: 1vh 2vw;
  border: 1px dashed lightpink;
`

const ExplainContainerHeading = styled("h3")`
  /* display: inline-block; */
  position: relative;
  border: 1px dashed lightpink;
`

const ExplainContainerContent = styled("p")`
  position: relative;
`

const AnimatedDetailDiv = styled(animated.div)`
  position: absolute;
  width: 100%;
  overflow: hidden;
`

const EmploymentDetail = ({ detailProps, transitions }) => {
  return (
    <DetailContainer style={{ opacity: detailProps.opacity }}>
      {transitions.map(({ item, key, props }) => (
        <CVDetailLayout key={key} item={item}>
          blah
        </CVDetailLayout>
      ))}
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
