import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import { useTransition, animated } from "react-spring"

import Detail from "./Detail"
import Summary from "./Summary"
import Explain from "./Explain"

import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import styled from "styled-components"

const SummaryDetailExplainContainer = styled(animated.div)`
  display: inline-block;
  position: ${props => (props.mobile ? "relative" : "absolute")};
  top: ${props => (props.mobile ? "3%" : "0%")};
  left: ${props => (props.mobile ? "0%" : "62%")};
  /* left: 58vw; */
  height: ${props =>
    props.menu && props.mobile
      ? "27vh"
      : !props.menu && props.mobile
      ? "auto"
      : "92vh"};
  width: ${props => (props.mobile ? "80%" : "24%")};
  overflow: hidden;
  /* border: 1px dashed lightpink; */
`

const SummaryContainer = styled("div")`
  display: inline-block;
  position: ${props => (props.mobile ? "relative" : "absolute")};
  top: 0;
  left: 0%;
  width: 100%;
  height: ${props => (props.mobile ? "23vh" : "18%")};
  margin: ${props => (props.mobile ? "0" : "0 0vw 2vh 0")};
  /* border: 1px dashed lightpink; */
`

const DetailContainer = styled("div")`
  /* display: inline-block; */
  position: ${props => (!props.menu && props.mobile ? "relative" : "absolute")};
  top: ${props => (!props.menu && props.mobile ? "0" : "20.5%")};
  left: 0%;
  width: 100%;
  margin: 0vh 0vw;
  /* border: 1px dashed lightpink; */
`

const ExplainContainer = styled("div")`
  display: inline-block;
  position: ${props => (!props.menu && props.mobile ? "relative" : "absolute")};
  top: ${props => (!props.menu && props.mobile ? "25%" : "67%")};
  left: 0%;
  width: 100%;
  height: 40%;
  margin: 0vh 0vw;
  /* border: 1px dashed lightpink; */
`

const BackButton = styled("button")`
  position: relative;
  height: auto;
  top: -2vh;
  /* margin: 0.5vh 0; */
  width: 100%;
  font-size: 0.9em;
  font-weight: 600;
  border-radius: 5px;
  background-color: ${props => props.theme.cv.button.background};
  color: ${props => props.theme.cv.button.color};
  border: ${props => `1px solid ${props.theme.cv.button.border}`};
  text-align: ${props => (props.mobile ? "center" : "right")};
  cursor: pointer;

  &:focus {
    outline: none;
  }
`

const SummaryDetailExplain = ({
  mobile,
  selected,
  detailProps,
  setSelected
}) => {
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
      opacity: mobile ? 1 : 0
    },
    update: { opacity: 1 },
    leave: {
      opacity: mobile ? 1 : 0
    },
    config: {
      mass: 1,
      tension: 270,
      friction: 30
    }
  })
  return (
    <SummaryDetailExplainContainer
      menu={selected.menu ? 1 : 0}
      mobile={mobile ? 1 : 0}
      style={{ opacity: detailProps.opacity }}
    >
      <SummaryContainer mobile={mobile ? 1 : 0} menu={selected.menu ? 1 : 0}>
        <Summary data={data} mobile={mobile ? 1 : 0} />
      </SummaryContainer>
      {mobile ? (
        <BackButton
          mobile={mobile}
          onClick={() =>
            setSelected(state => ({
              value: state.value,
              prevValue: state.prevValue,
              menu: true
            }))
          }
        >
          {selected.menu
            ? "Click on a role in the timeline below"
            : "Return to timeline"}
        </BackButton>
      ) : null}
      {(!mobile || !selected.menu) && (
        <DetailContainer mobile={mobile ? 1 : 0} menu={selected.menu ? 1 : 0}>
          {transitions.map(
            ({ item, key, props }) =>
              item && (
                <animated.div key={key} style={props}>
                  <Detail
                    selected={item}
                    data={data}
                    mobile={mobile ? 1 : 0}
                    setSelected={setSelected}
                  />
                </animated.div>
              )
          )}
        </DetailContainer>
      )}
      {!mobile && (
        <ExplainContainer mobile={mobile ? 1 : 0} menu={selected.menu ? 1 : 0}>
          <Explain data={data} />
        </ExplainContainer>
      )}
    </SummaryDetailExplainContainer>
  )
}

export default SummaryDetailExplain