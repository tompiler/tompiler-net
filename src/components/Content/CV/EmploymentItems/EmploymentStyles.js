import styled from "styled-components"

const Container = styled("div")`
  margin: 0vh 1vw;
  line-height: 1.4em;
`

const JobHeading = styled("p")`
  width: 100%;
  font-size: 1.5em;
  text-align: center;
  font-weight: 600;
`

const JobSubheading = styled("p")`
  font-size: 1em;
  font-weight: 600;
`

const JobSummary = styled("p")`
  font-size: 0.95em;
`

const BulletList = styled("ul")`
  padding-left: 0.7vw;
`

const JobDescription = styled("li")`
  position: relative;
  margin: 0.8vh 0;
  font-size: 0.9em;
`

export {
  Container,
  JobHeading,
  JobSubheading,
  JobSummary,
  BulletList,
  JobDescription,
}
