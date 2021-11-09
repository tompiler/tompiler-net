import React from "react"

import styled from "styled-components"

const HeadlineCompany = styled("div")`
  display: inline-block;
  width: 100%;
  top: 0%;
  left: 0%;
  height: auto;
  margin: 2vh 0 0vh 0;

  @media ${props => props.theme.breakpoints.md} {
    margin: 0;
  }
  /* border: 1px dashed lightpink; */
`

const Company = styled("h3")`
  position: relative;
  top: 15%;
  height: auto;
  width: 100%;
  font-weight: 700;
  margin: 0em 0 0 0vw;
  padding: 0vh 2vw;
  text-align: left;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 1em;
  }
`

const CompanyContainer = styled("div")`
  flex: 3;
  /* border: 1px dashed lightpink; */
`

const RoleContainer = styled("div")`
  flex: 1;
  /* border: 1px dashed lightpink; */
`

const FlexContainer = styled("div")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Role = styled("p")`
  text-align: center;
  font-style: italic;
  font-size: 0.85vw;
  margin: 0.5vh 0 0.5vh 0;
  line-height: 2vh;
  /* border: 1px dashed lightblue; */

  @media ${props => props.theme.breakpoints.desktopsm} {
    font-size: 0.8vw;
    margin: 0vh 0 0vh 0;
    line-height: 2vh;
  }

  @media ${props => props.theme.breakpoints.md} {
    font-size: 0.75em;
  }
`

const DurationContainer = styled("div")`
  display: flex;
  flex: 2;
  /* border: 1px dashed lightpink; */
`

const Duration = styled("p")`
  display: flex;
  text-align: left;
  font-style: italic;
  font-size: 0.8vw;
  line-height: 1vh;
  margin: 1.5vh 0 1vh 2vw;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 0.75em;
  }
`

const DetailContentContainer = styled("div")`
  flex-grow: ${props => (!props.menu && props.mobile ? 0 : 1)};
  width: 100%;
  overflow-y: auto;
  padding: 0 1vw 0 2vw;
  text-align: left;
  /* border: 1px dashed lightpink; */
`

const JobSummary = styled("p")`
  font-size: 0.85vw;
  margin: 0vh 0 2vh 0;
  font-weight: 600;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 0.8vw;
    margin: 2vh 0 2vh 0;
  }
`

const EducationContainer = styled("div")`
  margin: 0 0 1vh 0;
`

const Education = styled("p")`
  font-size: 0.9vw;
  font-weight: ${props => (props.title ? 600 : 400)};
  margin: 0;
`

const Placement = styled("h4")`
  font-weight: 600;
  margin: 2vh 0 0 0;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 0.9vw;
  }
`

const JobDescriptionUL = styled("ul")`
  display: block;
  list-style-type: disc;
  margin: 0;
  padding-inline-start: 0;
  @media ${props => props.theme.breakpoints.md} {
    padding-inline-start: 4vw;
  }
`

const JobDescriptionLI = styled("li")`
  position: relative;
  font-size: 0.85vw;
  margin: 1vh 0vw 1vh 0vw;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 0.75vw;
  }
`

const JobSubDescriptionLI = styled("li")`
  position: relative;
  font-size: 0.75vw;
  margin: 1vh 0vw 1vh 0vw;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 0.7vw;
  }
`

const Detail = ({ mobile, selected, data, setSelected }) => {
  const [jobDetail] = data.dataJson.detail.filter(job => {
    return job.selected === selected
  })

  const { heading } = jobDetail
  const { education, title, duration, summary, placements } = jobDetail.values

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: !selected.menu & mobile ? "auto" : "40vh",
        margin: !selected.menu & mobile ? "0 0 2vh 0" : "0"
      }}
    >
      <HeadlineCompany>
        <FlexContainer>
          <CompanyContainer>
            <Company>{heading}</Company>
          </CompanyContainer>
        </FlexContainer>
        <FlexContainer>
          <DurationContainer>
            <Duration>{duration}</Duration>
          </DurationContainer>
          <RoleContainer>
            <Role>{title}</Role>
          </RoleContainer>
        </FlexContainer>
      </HeadlineCompany>
      <DetailContentContainer
        education={selected === -1}
        mobile={mobile ? 1 : 0}
        menu={selected.menu ? 1 : 0}
      >
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
    </div>
  )
}

export default Detail
