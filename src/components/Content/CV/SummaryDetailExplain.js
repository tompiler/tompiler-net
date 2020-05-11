import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import { useTransition, animated } from "react-spring"

import Detail from "./Detail"
import Summary from "./Summary"
import Explain from "./Explain"

import styled from "styled-components"

const SummaryDetailExplain = styled(animated.div)`
  display: inline-block;
  position: absolute;
  top: 0vh;
  left: ${props => (!props.menu && props.mobile ? "0%" : "62%")};
  /* left: 58vw; */
  height: 93vh;
  width: ${props => (!props.menu && props.mobile ? "80%" : "24%")};
  /* width: 28vw; */
  border: 1px dashed lightpink;
  overflow: hidden;
`

const SummaryContainer = styled("div")`
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0%;
  width: 100%;
  height: 18%;
  margin: 0vh 0vw;

  border: 1px dashed lightpink;
`

const DetailContainer = styled("div")`
  display: inline-block;
  position: absolute;
  top: 21%;
  left: 0%;
  width: 100%;
  height: auto;
  margin: 0vh 0vw;
  border: 1px dashed lightpink;
`

const ExplainContainer = styled("div")`
  display: inline-block;
  position: absolute;
  top: 67%;
  left: 0%;
  width: 100%;
  height: 40%;
  margin: 0vh 0vw;
  border: 1px dashed lightpink;
`

const EmploymentDetail = ({ mobile, selected, detailProps }) => {
  const data = useStaticQuery(graphql`
    query CVQuery {
      dataJson {
        summary {
          heading
          text
        }
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
    (!mobile || !selected.menu) && (
      <SummaryDetailExplain
        menu={selected.menu ? 1 : 0}
        mobile={mobile ? 1 : 0}
        style={{ opacity: detailProps.opacity }}
      >
        <SummaryContainer>
          <Summary data={data} />
        </SummaryContainer>
        <DetailContainer>
          {transitions.map(
            ({ item, key, props }) =>
              item && (
                <animated.div key={key} style={props}>
                  <Detail selected={item} data={data} />
                </animated.div>
              )
          )}
        </DetailContainer>
        <ExplainContainer>
          <Explain data={data} />
        </ExplainContainer>
      </SummaryDetailExplain>
    )
  )
}

export default EmploymentDetail
