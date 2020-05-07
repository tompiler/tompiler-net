import React from "react"

import { Container, JobHeading, JobSummary } from "./EmploymentStyles"

const SideProjects = () => {
  return (
    <Container>
      <JobHeading>Side Projects</JobHeading>
      <JobSummary>
        Like most software engineers I meet, I've got a lot of side projects,
        and far more that have been started than have been finished.
      </JobSummary>
      <JobSummary>
        However, my inbox is always open and I'd love to hear from anyone
        looking to collaborate.
      </JobSummary>
    </Container>
  )
}

export default SideProjects
