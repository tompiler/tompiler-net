import React from "react"

import styled from "styled-components"

const DetailTitleContainer = styled("div")`
  display: inline-block;
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 10%;
  border: 1px dashed lightpink;
`

const DetailTitleInnerContainer = styled("div")`
  display: inline-block;
  position: absolute;
  top: 0%;
  left: 0%;
  width: 70%;
  height: 70%;
  border: 1px dashed lightpink;
`

const JobHeading = styled("p")`
  width: 100%;
  font-size: 1.5em;
  text-align: left;
  font-weight: 600;
  margin: 1em 0 0 2vw;
`

const DetailTitlePositionContainer = styled("div")`
  display: inline-block;
  position: absolute;
  top: 0%;
  left: 70%;
  width: 30%;
  height: 70%;
  border: 1px dashed lightpink;
`

const JobTitle = styled("p")`
  top: 2%;
  text-align: center;
  font-style: italic;
  font-size: 0.8em;
  margin: 1.5em 0.8vw;
`

const DetailTitleDurationContainer = styled("div")`
  display: inline-block;
  position: absolute;
  top: 70%;
  left: 0%;
  width: 100%;
  height: 30%;
  border: 1px dashed lightpink;
`

const JobDuration = styled("p")`
  text-align: left;
  font-style: italic;
  font-size: 0.8em;
  margin: 0 0 0 2vw;
`

const JobSubheading = styled("p")`
  font-size: 1em;
  font-weight: 600;
`

const JobSummary = styled("p")`
  font-size: 0.95em;
  margin: 4.5vh 0;
`

const JobDescription = styled("li")`
  position: relative;
  margin: 0.8vh 0;
  font-size: 0.9em;
`

const DetailContentContainer = styled("div")`
  display: inline-block;
  position: absolute;
  top: 10%;
  left: 0%;
  width: 100%;
  height: 40%;
  border: 1px dashed lightpink;
  overflow-y: scroll;
  overflow-x: hidden;
`

const DetailInnerContentContainer = styled("div")`
  padding: 1vh 2vw;
`

const CVDetailLayout = props => {
  return (
    <>
      <DetailTitleContainer>
        <DetailTitleInnerContainer>
          <JobHeading>Mindshare</JobHeading>
        </DetailTitleInnerContainer>
        <DetailTitlePositionContainer>
          <JobTitle>Data Analyst</JobTitle>
        </DetailTitlePositionContainer>
        <DetailTitleDurationContainer>
          <JobDuration>November 2013-August 2014</JobDuration>
        </DetailTitleDurationContainer>
      </DetailTitleContainer>
      <DetailContentContainer>
        <DetailInnerContentContainer>
          Lorem ipsum dolor sit amet, pri quas luptatum comprehensam cu. Omittam
          intellegebat sit ne, per dicam similique in. Ceteros suavitate
          consequat ex has, at suas case solum sit, his et inermis nusquam. Ad
          quo utinam comprehensam, nec fabulas senserit intellegam no. Ex sit
          error semper voluptatum, te meliore pertinacia consetetur vis, quod
          omittam mea et. Adhuc tritani insolens id eum. Vim soluta democritum
          suscipiantur et. Et vix munere minimum, ei labore nemore eam. Pro
          dicit eirmod intellegebat ad, his sint novum mollis ut. His recusabo
          interpretaris at. Per id liber corpora eloquentiam, eos id dicunt
          accusam. Ut decore laudem percipit has, quis graeco aliquando et mel.
          Ea utinam viderer qui, meis salutatus usu ut. Cu aliquam voluptatibus
          vix, ne eam velit liberavisse, eam ei magna delenit scripserit. Nihil
          deserunt disputando ei eam, vel te mutat essent, pri iuvaret
          moderatius an. Duo ad utamur alienum sensibus, eu est hinc choro
          mnesarchum, no soluta persius has. Te reque voluptaria nec, iuvaret
          feugait te eam, nullam eligendi consequat eum ut. An pri soluta
          iuvaret, aliquam repudiandae at vim, ne probo legere contentiones vis.
          Inani harum sadipscing cum at, in vel nominati molestiae suscipiantur.
          Labore splendide hendrerit an vim. Te duo quem consectetuer, ex usu
          enim erat. Has tantas volutpat mediocrem eu, brute cotidieque eos ne.
          Eam duis vocibus maiorum in, graecis blandit vituperata usu ei, vel cu
          brute molestiae. Et case instructior eos, ex his quod consequuntur
          voluptatibus. Adhuc simul iriure mei et, cu has quando interesset,
          feugiat laboramus pri te. Nec phaedrum cotidieque eu, id porro integre
          eam. Ut etiam dolor legimus qui.
        </DetailInnerContentContainer>
      </DetailContentContainer>
    </>
  )
}

export default CVDetailLayout
