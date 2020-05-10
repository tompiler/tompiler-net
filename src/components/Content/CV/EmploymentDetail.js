import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import { useTransition, animated } from "react-spring"

import CVDetailLayout from "./CVDetailLayout"

import styled from "styled-components"

const DetailContainer = styled(animated.div)`
  display: inline-block;
  position: absolute;
  left: 58vw;
  height: 92vh;
  width: 28vw;
  /* border: 1px dashed lightpink; */
  overflow: hidden;
`

const ExplainContainer = styled("div")`
  display: inline-block;
  position: absolute;
  top: 65%;
  width: 100%;
  height: 40%;
  padding: 1vh 2vw;
  overflow-y: scroll;
  overflow-x: hidden;
  /* border: 1px dashed lightpink; */
`

const ExplainContainerHeading = styled("h3")`
  position: relative;
  /* border: 1px dashed lightpink; */
  font-weight: 700;
`

const ExplainContainerContent = styled("p")`
  position: relative;
  font-size: 0.95em;
`

const EmploymentDetail = ({ selected, detailProps }) => {
  const data = useStaticQuery(graphql`
    query CVQuery {
      dataJson {
        explain {
          heading
          paragraphs
        }
        detail {
          heading
          selected
          values {
            placements {
              name
              description {
                text
                subText
              }
            }
            education {
              name
              award
            }
            duration
            summary
            title
          }
        }
      }
    }
  `)

  const transitions = useTransition(selected.value, null, {
    from: {
      opacity: 0
    },
    update: { opacity: 1 },
    leave: {
      opacity: 0
    },
    config: {
      mass: 1,
      tension: 270,
      friction: 30
    }
  })

  return (
    <DetailContainer style={{ opacity: detailProps.opacity }}>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props}>
              <CVDetailLayout selected={item} data={data} />
            </animated.div>
          )
      )}
      <ExplainContainer>
        <ExplainContainerHeading>
          {data.dataJson.explain.heading}
        </ExplainContainerHeading>
        {data.dataJson.explain.paragraphs.map((paragraph, i) => (
          <ExplainContainerContent key={i}>{paragraph}</ExplainContainerContent>
        ))}
      </ExplainContainer>
    </DetailContainer>
  )
}

export default EmploymentDetail
