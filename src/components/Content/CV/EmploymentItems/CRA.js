import React from "react"

import {
  Container,
  JobHeading,
  JobSummary,
  BulletList,
  JobDescription,
} from "./EmploymentStyles"

const CRA = () => {
  return (
    <Container>
      <JobHeading>Charles River Associates</JobHeading>
      <JobSummary>
        Charles River Associates (CRA) is a leading global consulting firm that
        offers business, financial, and economic consulting services to major
        law firms, corporations, and governments around the world.
      </JobSummary>
      <JobSummary>
        Leading a sub-team of up to two other data scientists, supporting a
        wider group of 60+ economic consultants in the European Competition
        Practice with ongoing casework.
      </JobSummary>
      <BulletList>
        <JobDescription>
          Analysis typically involves anticipating theories of harm in the
          context of the litigation - local overlap, entry & exit, price
          modelling analyses are common in retail mergers.
        </JobDescription>
        <JobDescription>
          Extremely fast-paced environment, a significant proportion of ad-hoc,
          exploratory analysis
        </JobDescription>
        <JobDescription>
          Built & maintained end-to-end data pipelines from databases or other
          storage methods to final analysis across multiple workstreams & cases.
          Data occasionally large (108+ rows).
        </JobDescription>
        <JobDescription>
          Managed ArcGIS software and most geospatial analysis, plus various
          other technology functions
        </JobDescription>
        <JobDescription>
          Provided training to colleagues worldwide covering python, ArcGIS,
          Excel, data visualisation and web scraping
        </JobDescription>
        <JobDescription>
          Built extensive core infrastructure in python including:
          <ul>
            <JobDescription>
              Software to process the calculation of millions of driving times
              per hour
            </JobDescription>
            <JobDescription>
              Automated map generation API with ArcPy & ArcGIS, saving dozens of
              hours of consultant time
            </JobDescription>
            <JobDescription>
              Generalised & customised WSS & Fascia Count calculators for a vast
              array of scenarios based on regulatory precedents
            </JobDescription>
            <JobDescription>
              Google Maps API connector using asyncio + aiohttp
            </JobDescription>
          </ul>
        </JobDescription>
      </BulletList>
    </Container>
  )
}

export default CRA
