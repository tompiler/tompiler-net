import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import { useTransition, animated } from "react-spring"

import Detail from "./Detail"
import Summary from "./Summary"
import Explain from "./Explain"

import styled from "styled-components"

const SummaryDetailExplainContainer = styled(animated.div)`
  display: inline-block;
  position: ${props => (props.mobile ? "relative" : "absolute")};
  top: ${props => (props.mobile ? "3%" : "0%")};
  left: ${props => (props.mobile ? "0%" : "62%")};
  /* left: 58vw; */
  height: ${props =>
    props.menu && props.mobile
      ? "24vh"
      : !props.menu && props.mobile
      ? "auto"
      : "92vh"};
  width: ${props => (props.mobile ? "80%" : "24%")};

  /*
    Four scenarios:
      menu is true, mobile is true = view of summary and employment timeline
      menu is false, mobile is true = view of summary and selected job
      menu is true, mobile is false = ?
      menu is false, mobile is false = usual desktop view
    */

  /* width: 28vw; */
  border: 1px dashed lightpink;
  overflow: hidden;
`

const SummaryContainer = styled("div")`
  display: inline-block;
  position: ${props => (props.mobile ? "relative" : "absolute")};
  top: 0;
  left: 0%;
  width: 100%;
  height: ${props => (props.mobile ? "24vh" : "18%")};
  margin: ${props => (props.mobile ? "0" : "0 0vw 2vh 0")};

  border: 1px dashed lightpink;
`

const DetailContainer = styled("div")`
  /* display: inline-block; */
  position: ${props => (!props.menu && props.mobile ? "relative" : "absolute")};
  top: ${props => (!props.menu && props.mobile ? "4%" : "20.5%")};
  left: 0%;
  width: 100%;
  margin: 0vh 0vw;
  border: 1px dashed lightpink;
`

const ExplainContainer = styled("div")`
  display: inline-block;
  position: ${props => (!props.menu && props.mobile ? "relative" : "absolute")};
  top: ${props => (!props.menu && props.mobile ? "25%" : "67%")};
  left: 0%;
  width: 100%;
  height: 40%;
  margin: 0vh 0vw;
  border: 1px dashed lightpink;
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
        <Summary data={data} />
      </SummaryContainer>
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
