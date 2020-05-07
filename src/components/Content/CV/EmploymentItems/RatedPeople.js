import React from "react"

import {
  Container,
  JobHeading,
  JobSummary,
  BulletList,
  JobDescription,
} from "./EmploymentStyles"

const RatedPeople = () => {
  return (
    <Container>
      <JobHeading>Rated People</JobHeading>
      <JobSummary>
        Rated People is an online marketplace connecting homeowners and
        tradespeople throughout the UK.
      </JobSummary>
      <JobSummary>
        Within the finance team, providing access to business intelligence to
        stakeholders across the business.
      </JobSummary>
      <BulletList>
        <JobDescription>
          Migrating business intelligence away from MS Office applications by
          developing and maintaining a code base in python that automated all
          non-web based reports to the business, plus managing several complex
          dashboards in Excel using data from internal databases on active
          users, sales, jobs posted and much more
        </JobDescription>
        <JobDescription>
          Processes removed slow MS Access/Excel intermediary in the BI
          reporting pipeline where possible, by writing efficient SQL queries
          and using efficient data processing methods in python
        </JobDescription>
        <JobDescription>
          Developed a user-friendly interactive dashboard in d3.js, showing
          vital information to the business and helping insight to circulate
          amongst non-technical colleagues
        </JobDescription>
        <JobDescription>
          Deployed a random forest model to predict customer churn on a monthly
          basis
        </JobDescription>
      </BulletList>
    </Container>
  )
}

export default RatedPeople
