import React from "react"

import { useTransition, animated } from "react-spring"
import { graphql, useStaticQuery } from "gatsby"

import styled from "styled-components"

const TitleContainer = styled("div")`
  display: inline-block;
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 10%;
  /* border: 1px dashed lightpink; */
`

const TitleInnerContainer = styled("div")`
  display: inline-block;
  position: absolute;
  top: 0%;
  left: 0%;
  width: 80%;
  height: 70%;
  /* border: 1px dashed lightpink; */
`

const JobHeading = styled("p")`
  width: 100%;
  font-size: 1.5em;
  text-align: left;
  font-weight: 700;
  margin: 1em 0 0 2vw;
`

const PositionContainer = styled("div")`
  display: inline-block;
  position: absolute;
  top: 20%;
  left: 80%;
  width: 20%;
  height: 80%;
  /* border: 1px dashed lightpink; */
`

const JobTitle = styled("p")`
  top: 2%;
  text-align: center;
  font-style: italic;
  font-size: 0.9em;
  margin: 1.5em 0.8vw;
`

const DurationContainer = styled("div")`
  display: inline-block;
  position: absolute;
  top: 70%;
  left: 0%;
  width: 80%;
  height: 30%;
  /* border: 1px dashed lightpink; */
`

const JobDuration = styled("p")`
  text-align: left;
  font-style: italic;
  font-size: 0.9em;
  margin: 0 0 0 2vw;
`

const JobSubheading = styled("p")`
  font-size: 1em;
  font-weight: 600;
  margin: 0;
  padding: 2vh 0vw 0vh 2vw;
`

const JobSummary = styled("p")`
  font-size: 0.95em;
  margin: 0vh 2vw 1vh 2vw;
  font-weight: 600;
`

const EducationContainer = styled("div")`
  margin: 0vh 0vw 1vh 2vw;
`

const Education = styled("p")`
  font-size: 0.95em;
  font-weight: ${props => (props.title ? 600 : 400)};
  margin: 0;
`

const JobDescriptionUL = styled("ul")`
  /* margin: 2.5vh 0vw 0 0vw; */
  /* padding-inline-start: 2vw; */
  display: block;
  list-style-type: disc;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  margin: 0 2vw;
  padding-inline-start: 0;
`

const JobDescription = styled("li")`
  position: relative;
  font-size: 0.85em;
  margin: 2vh 0vw 0 0vw;
`

const JobSubDescription = styled("li")`
  position: relative;
  font-size: 0.85em;
  margin: 1vh 0vw 0 0vw;
`

const DetailContentContainer = styled("div")`
  display: inline-block;
  position: absolute;
  top: 10%;
  left: 0%;
  width: 100%;
  height: 50%;
  /* border: 1px dashed lightpink; */
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 2vh 0;
`

const CVDetailLayout = ({ selected }) => {
  const data = useStaticQuery(graphql`
    query CVQuery {
      allCvDataJson {
        edges {
          node {
            heading
            selected
            values {
              placements {
                name
                description {
                  text
                  subText
                }
              }
              education {
                name
                award
              }
              duration
              summary
              title
            }
          }
        }
      }
    }
  `)

  const [node] = data.allCvDataJson.edges.filter(edge => {
    return edge.node.selected === selected
  })

  if (node === undefined) {
    return null
  }

  const { heading } = node.node
  const { education, title, duration, summary, placements } = node.node.values

  return (
    <div>
      <TitleContainer>
        <TitleInnerContainer>
          <JobHeading>{heading}</JobHeading>
        </TitleInnerContainer>
        <PositionContainer>
          <JobTitle>{title}</JobTitle>
        </PositionContainer>
        <DurationContainer>
          <JobDuration>{duration}</JobDuration>
        </DurationContainer>
      </TitleContainer>
      <DetailContentContainer>
        {summary && <JobSummary>{summary}</JobSummary>}
        {selected === -1 &&
          education.map(uni => (
            <EducationContainer>
              <Education title>{uni.name}</Education>
              <Education>{uni.award}</Education>
            </EducationContainer>
          ))}
        {placements &&
          placements.map(placement => {
            return (
              <div key={placement.name}>
                {placement.name && (
                  <JobSubheading>{placement.name}</JobSubheading>
                )}
                {placement.description.map((desc, i) => (
                  <JobDescriptionUL key={"descUL" + i}>
                    <JobDescription>{desc.text}</JobDescription>
                    {desc.subText &&
                      desc.subText.map((subText, i) => (
                        <ul key={"subUL" + i}>
                          <JobSubDescription>{subText}</JobSubDescription>
                        </ul>
                      ))}
                  </JobDescriptionUL>
                ))}
              </div>
            )
          })}
      </DetailContentContainer>
    </div>
  )
}

export default CVDetailLayout
