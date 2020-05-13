import React, { useState } from "react"

import useInterval from "../../useInterval"

import { Timeline } from "./Timeline"
import useWindowSize from "../../useWindowSize"

import data from "./links"

const CV = () => {
  const windowSize = useWindowSize()
  const mobile = windowSize.width < 650
  const [open, toggle] = useState(false)
  const [selected, setSelected] = useState({
    value: mobile ? null : 5, // no default job view in detail with mobile view
    prevValue: null,
    menu: !mobile ? false : true
  })
  const [hover, setHover] = useState(null)
  const [first, toggleFirst] = useState(true)

  const margin = {
    top: mobile ? 0 : 10,
    right: 0,
    bottom: mobile ? 4 : 8,
    left: 0
  }

  const padding = {
    bottom: mobile ? 0 : 3,
    top: mobile ? 3 : 10
  }

  const circleNodes = Object.keys(data.timelineNodes).length
  const circleRadius = 6
  const circleRadiusInv = (circleRadius / windowSize.height) * 100
  const svgHeight = (mobile ? 58 : 100) - margin.top - margin.bottom
  const innerSvgHeight = svgHeight - padding.bottom

  const lineLength =
    (svgHeight - padding.top - padding.bottom) / (circleNodes - 1) -
    circleRadiusInv

  useInterval(() => {
    toggleFirst(false)
    if (first) {
      toggle(true)
    }
  }, 1000)

  return (
    <>
      {/* <Button onClick={() => toggle(!open)}>Toggle Animation</Button> */}
      <Timeline
        open={open}
        mobile={mobile}
        hover={hover}
        selected={selected}
        setHover={setHover}
        setSelected={setSelected}
        svgHeight={svgHeight}
        innerSvgHeight={innerSvgHeight}
        lineLength={lineLength}
        circleRadius={circleRadius}
        circleRadiusInv={circleRadiusInv}
      />
    </>
  )
}

export default CV
