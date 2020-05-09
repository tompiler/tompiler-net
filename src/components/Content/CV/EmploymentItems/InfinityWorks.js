import React from "react"

import {
  Container,
  JobHeading,
  JobSubheading,
  JobSummary,
  BulletList,
  JobDescription
} from "./EmploymentStyles"

const InfinityWorks = () => {
  return (
    <Container>
      <JobHeading>Infinity Works</JobHeading>
      <JobSummary>
        Infinity Works is one of the UK's leading digital transformation and
        engineering consultancies, delivering value in large technology-led
        projects in a variety of sectors including government, retail, energy,
        and financial services.
      </JobSummary>
      <JobSubheading>Placement 1: Online Tech Company </JobSubheading>
      <BulletList>
        <JobDescription>
          Assisted a team to migrate a system of some 160+ data pipelines,
          shifting several TB/day of data orchestrated by cron to being
          scheduled using an airflow cluster.
        </JobDescription>
        <JobDescription>
          Main role in supporting other teams reliant on this legacy system,
          fixing ongoing issues, weighing heavily on a variety of AWS services
          such as ECS, EMR, Athena, Redshift and more.
        </JobDescription>
      </BulletList>
      <JobSubheading>Placement 2: FTSE 100 Multinational </JobSubheading>
      <BulletList>
        <JobDescription>
          A green-field project, worked within a team to build a developer
          compliance tool to help senior stakeholders understand developer
          maturity and best practices amongst engineering teams globally, from
          proof-of-concept stage all the way to a fully scalable application.
        </JobDescription>
        <JobDescription>
          This was achieved using Azure Data Factory, SQL Server and Power BI,
          deployable via a CI/CD pipeline using Azure DevOps and ARM templates.
        </JobDescription>
        <JobDescription>
          My focus was on the data lifecycle, designing and building the data
          model and database, and visualising the output in Power BI.
        </JobDescription>
      </BulletList>
    </Container>
  )
}

export default InfinityWorks
