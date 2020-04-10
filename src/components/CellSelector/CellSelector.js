import React from "react"
import CellSelectorData from "./CellSelectorData"
import Cell from "../cell"
import Word from "../word"
// import useHover from "../useHover"

import "./cellSelector.css"

const CellSelector = ({ route }) => {
  // console.log("Updated")
  var elements = []
  CellSelectorData.forEach(heading => {
    for (var i = 0; i < heading.text.length; i++) {
      if (heading.text[i] !== " ") {
        elements.push(
          <Cell
            heading={heading}
            text={heading.text[i]}
            position={i}
            key={heading.text[i] + "_" + i}
            route={route}
          ></Cell>
        )
      }
    }
  })
  return <div>{elements}</div>
}

export default CellSelector
