import React from "react"

import styled from "styled-components"

const TitleContainer = styled("div")`
  display: inline-block;
  top: 0%;
  left: 0%;
  border: 1px dashed lightpink;
`

const TitleInnerContainer = styled("div")`
  display: inline-block;
  position: relative;
  top: 0%;
  left: 0%;
  width: 80%;
  /* border: 1px dashed lightpink; */
`

const JobHeading = styled("h3")`
  position: relative;
  font-weight: 700;
  line-height: 2vh;
  top: 15%;
  width: 100%;
  font-size: 1.5em;
  font-weight: 700;
  margin: 0em 0 0 0vw;
  padding: 0vh 2vw;
`

const PositionContainer = styled("div")`
  display: inline-block;
  position: absolute;
  top: 0%;
  left: 80%;
  width: 20%;
  /* border: 1px dashed lightpink; */
`

const JobTitle = styled("p")`
  display: inline;
  vertical-align: bottom;
  top: 0%;
  text-align: left;
  font-style: italic;
  font-size: 0.9em;
  margin: 0 0 0 0;
`

const DurationContainer = styled("div")`
  display: inline-block;
  position: relative;
  top: 0%;
  left: 0%;
  width: 80%;
  height: 35%;
  /* border: 1px dashed lightpink; */
`

const JobDuration = styled("p")`
  line-height: 1vh;
  text-align: left;
  font-style: italic;
  font-size: 0.9em;
  margin: 0 0 0 0vw;
  padding: 0vh 2vw;
`

const DetailContentContainer = styled("div")`
  display: inline-block;
  position: absolute;
  top: 12%;
  left: 0%;
  width: 100%;
  height: 80%;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0 2vw 0 2vw;
  margin: ${props => (props.education ? "0 0 0 0" : "2vh 0 0 0")};
  /* border: 1px dashed lightpink; */
`

const JobSummary = styled("p")`
  font-size: 0.95em;
  margin: 0 0 2vh 0;
  font-weight: 600;
`

const EducationContainer = styled("div")`
  margin: 0 0 1vh 0;
`

const Education = styled("p")`
  font-size: 0.95em;
  font-weight: ${props => (props.title ? 600 : 400)};
  margin: 0;
`

const Placement = styled("p")`
  font-size: 1em;
  font-weight: 600;
  margin: 2.5vh 0 0 0;
`

const JobDescriptionUL = styled("ul")`
  display: block;
  list-style-type: disc;
  margin: 0 0 0 0;
  padding-inline-start: 0;
`

const JobDescriptionLI = styled("li")`
  position: relative;
  font-size: 0.85em;
  margin: 1vh 0vw 1vh 0vw;
`

const JobSubDescriptionLI = styled("li")`
  position: relative;
  font-size: 0.85em;
  margin: 1vh 0vw 1vh 0vw;
`

const CVDetailLayout = ({ selected, data }) => {
  const [jobDetail] = data.dataJson.detail.filter(job => {
    return job.selected === selected
  })

  const { heading } = jobDetail
  const { education, title, duration, summary, placements } = jobDetail.values

  return (
    <>
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
      <DetailContentContainer education={selected === -1}>
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
                {placement.name && <Placement>{placement.name}</Placement>}
                {placement.description.map((desc, i) => (
                  <JobDescriptionUL key={"descUL" + i}>
                    <JobDescriptionLI>{desc.text}</JobDescriptionLI>
                    {desc.subText &&
                      desc.subText.map((subText, i) => (
                        <ul key={"subUL" + i}>
                          <JobSubDescriptionLI>{subText}</JobSubDescriptionLI>
                        </ul>
                      ))}
                  </JobDescriptionUL>
                ))}
              </div>
            )
          })}
      </DetailContentContainer>
    </>
  )
}

export default CVDetailLayout
