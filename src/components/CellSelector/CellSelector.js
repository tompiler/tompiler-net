import React, { useState } from "react"
import CellSelectorData from "./CellSelectorData"
import Cell from "../cell"
import useHover from "../useHover"

import "./cellSelector.css"

const CellSelector = ({ route }) => {
  // console.log(route)

  const [hoverWord, setHoverWord] = useState(null)

  // console.log(CellSelectorData)

  console.log(hoverWord)

  var elements = []
  CellSelectorData.forEach(heading => {
    for (var i = 0; i < heading.text.length; i++) {
      if (heading.text[i] !== " ") {
        elements.push(
          <Cell
            heading={heading}
            text={heading.text[i]}
            position={i}
            key={[heading.word, heading.text, i].join("_")}
            route={route}
            hoverWord={hoverWord}
            setHoverWord={setHoverWord}
            // colour={
            //   hovered === heading.word || route === heading.word
            //     ? heading.colour
            //     : hovered === heading.word2 || route === heading.word2
            //     ? heading.colour2
            //     : "white"
            // }
          ></Cell>
        )
      }
    }
  })
  return <div>{elements}</div>
}

export default CellSelector
