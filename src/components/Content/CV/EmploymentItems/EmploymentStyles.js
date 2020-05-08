import styled from "styled-components"

const Container = styled("div")`
  position: relative;
  margin: 0 0 0 0.5vw;
  line-height: 1.4em;
`

const HeadingContainer = styled("div")`
  /* position: absolute; */
  width: 100%;
  height: 25%;
  border: 1px dashed lightpink;
`

const JobHeading = styled("p")`
  width: 100%;
  font-size: 1.5em;
  text-align: left;
  font-weight: 600;
`

const JobSubheading = styled("p")`
  font-size: 1em;
  font-weight: 600;
`

const JobSummary = styled("p")`
  font-size: 0.95em;
  margin: 4.5vh 0;
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
  HeadingContainer,
  JobHeading,
  JobSubheading,
  JobSummary,
  BulletList,
  JobDescription,
}
