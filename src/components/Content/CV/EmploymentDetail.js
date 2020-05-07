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

const DetailSubContainer = styled("div")`
  display: inline-block;
  position: absolute;
  left: 18%;
  width: 82%;
  height: 70%;
  /* border: 1px dashed lightpink; */
  overflow-y: scroll;
  overflow-x: hidden;
`

const DetailTitleContainer = styled("div")`
  display: inline-block;
  position: absolute;
  top: 15%;
  width: 18%;
  height: 55%;
  /* border: 1px dashed lightpink; */
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

const DetailSvgContainer = styled("div")`
  display: inline-block;
  position: absolute;
  width: 18%;
  height: 15%;
  /* border: 1px dashed lightpink; */
`

const ExplainContainer = styled("div")`
  display: inline-block;
  position: absolute;
  top: 70%;
  width: 100%;
  height: 30%;
  padding: 1vh 2vw;
  /* border: 1px dashed lightpink; */
`

const ExplainContainerHeading = styled("h3")`
  /* display: inline-block; */
  position: relative;
  /* border: 1px dashed lightpink; */
`

const ExplainContainerContent = styled("p")`
  position: relative;
`

const DetailSvg = styled(animated.svg)`
  display: inline-block;
  position: absolute;
  width: 100%;
  height: 100%;
`

const AnimatedDetailDiv = styled(animated.div)`
  position: absolute;
  width: 100%;
  overflow: hidden;
`

const EmploymentDetail = ({ detailProps, transitions }) => {
  return (
    <DetailContainer style={{ opacity: detailProps.opacity }}>
      <DetailSvgContainer>
        <DetailSvg>
          <Line x1="50%" x2="50%" y1="15%" y2="85%" />

          {transitions.map(
            ({ item, key, props }) =>
              item && (
                <Circle
                  key={key}
                  cx="50%"
                  cy={props.cy}
                  r="6"
                  selected={true}
                  style={{ opacity: props.opacity }}
                />
              )
          )}
        </DetailSvg>
      </DetailSvgContainer>
      <DetailTitleContainer>
        {transitions.map(({ item, key, props }) => {
          switch (item) {
            case "0":
              return null
            case "1":
              return (
                <AnimatedDetailDiv key={key} style={{ opacity: props.opacity }}>
                  <JobTitle>Data Analyst</JobTitle>
                  <JobDuration>November 2013 - August 2014</JobDuration>
                </AnimatedDetailDiv>
              )
            case "2":
              return (
                <AnimatedDetailDiv key={key} style={{ opacity: props.opacity }}>
                  <JobTitle>Business Intelligence Developer</JobTitle>
                  <JobDuration>September 2014 - September 2016</JobDuration>
                </AnimatedDetailDiv>
              )
            case "3":
              return (
                <AnimatedDetailDiv key={key} style={{ opacity: props.opacity }}>
                  <JobTitle>Data Scientist</JobTitle>
                  <JobDuration>October 2016 - December 2018</JobDuration>
                </AnimatedDetailDiv>
              )
            case "4":
              return (
                <AnimatedDetailDiv key={key} style={{ opacity: props.opacity }}>
                  <JobTitle>React Developer</JobTitle>
                  <JobDuration>January 2019 - June 2019</JobDuration>
                </AnimatedDetailDiv>
              )
            case "5":
              return (
                <AnimatedDetailDiv key={key} style={{ opacity: props.opacity }}>
                  <JobTitle>Data Engineer</JobTitle>
                  <JobDuration>July 2019 - present</JobDuration>
                </AnimatedDetailDiv>
              )
            case "6":
              return null
            default:
              return (
                <AnimatedDetailDiv key={key} style={{ opacity: props.opacity }}>
                  <JobTitle>Data Engineer</JobTitle>
                  <JobDuration>July 2019 - present</JobDuration>
                </AnimatedDetailDiv>
              )
          }
        })}
      </DetailTitleContainer>
      <DetailSubContainer>
        {transitions.map(({ item, key, props }) => {
          switch (item) {
            case "0":
              return (
                <AnimatedDetailDiv key={key} style={{ opacity: props.opacity }}>
                  <Education />
                </AnimatedDetailDiv>
              )
            case "1":
              return (
                <AnimatedDetailDiv
                  key={key}
                  style={{
                    opacity: props.opacity,
                  }}
                >
                  <Mindshare />
                </AnimatedDetailDiv>
              )
            case "2":
              return (
                <AnimatedDetailDiv key={key} style={{ opacity: props.opacity }}>
                  <RatedPeople />
                </AnimatedDetailDiv>
              )
            case "3":
              return (
                <AnimatedDetailDiv key={key} style={{ opacity: props.opacity }}>
                  <CRA />
                </AnimatedDetailDiv>
              )
            case "4":
              return (
                <AnimatedDetailDiv key={key} style={{ opacity: props.opacity }}>
                  <Decathlon />
                </AnimatedDetailDiv>
              )
            case "5":
              return (
                <AnimatedDetailDiv
                  key={key}
                  style={{
                    opacity: props.opacity,
                  }}
                >
                  <InfinityWorks />
                </AnimatedDetailDiv>
              )
            case "6":
              return (
                <AnimatedDetailDiv key={key} style={{ opacity: props.opacity }}>
                  <SideProjects />
                </AnimatedDetailDiv>
              )
            default:
              return (
                <AnimatedDetailDiv
                  key={key}
                  style={{
                    opacity: props.opacity,
                  }}
                >
                  <InfinityWorks />
                </AnimatedDetailDiv>
              )
          }
        })}
      </DetailSubContainer>
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
