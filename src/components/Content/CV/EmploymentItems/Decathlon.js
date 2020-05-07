import React from "react"

import {
  Container,
  JobHeading,
  JobSummary,
  BulletList,
  JobDescription,
} from "./EmploymentStyles"

const Decathlon = () => {
  return (
    <Container>
      <JobHeading>Decathlon UK</JobHeading>
      <JobSummary>
        Decathlon is a global sporting goods retailer with a presence in nearly
        50 countries worldwide.
      </JobSummary>
      <BulletList>
        <JobDescription>
          Solely responsible for the entire build and delivery of a interactive
          business intelligence dashboard application (“Playbook”)
        </JobDescription>
        <JobDescription>
          Designed to make Decathlon’s data more accessible to store managers,
          sport leaders and other stakeholders throughout the business.
        </JobDescription>
        <JobDescription>
          Modern web development tools such as React, D3, Node, GraphQL, Python
          and MongoDB used throughouts
        </JobDescription>
      </BulletList>
    </Container>
  )
}

export default Decathlon
