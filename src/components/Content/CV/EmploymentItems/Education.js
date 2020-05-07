import React from "react"

import styled from "styled-components"

import {
  Container,
  JobHeading,
  JobSubheading,
  JobSummary,
} from "./EmploymentStyles"

const Institution = styled("p")`
  font-weight: 600;
  margin: 0;
`

const Education = () => {
  return (
    <Container>
      <JobHeading>Education</JobHeading>
      <Institution>University of Nottingham</Institution>
      <Institution>2012-2013</Institution>
      <JobSummary>Msc Economics</JobSummary>
      <JobSubheading></JobSubheading>
      <Institution>Keele University</Institution>
      <Institution>2009-2012</Institution>
      <JobSummary>BA Economics (First class)</JobSummary>
    </Container>
  )
}

export default Education
