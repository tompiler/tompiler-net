// import React from "react"
// import CellSelectorData from "./CellSelectorData"
// import Cell from "../cell2"
// import Word from "../word"
// // import useHover from "../useHover"

// import "./cellSelector.css"
// import { TransitionState } from "gatsby-plugin-transition-link"

import React, { useState } from "react"
import { TransitionState } from "gatsby-plugin-transition-link"
import { useSpring } from "react-spring"

import Letter from "../Letter"

const CellSelector = ({ route }) => {
  const [{ alpha }, set] = useSpring(() => ({
    alpha: 0,
  }))

  const [hoverElement, setHoverElement] = useState(null)
  return (
    <TransitionState>
      {({ transitionStatus, exit, entry }) => {
        return (
          <div>
            <Letter
              linkText={"t"}
              to={"tompiler"}
              route={route}
              left={"9vw"}
              transitionStatus={transitionStatus}
              setHover={set}
              setHoverElement={setHoverElement}
              hoverElement={hoverElement}
              alpha={alpha}
              activeColour={"rgba(74,171,255,0.7)"}
            ></Letter>
            <Letter
              linkText={"o"}
              to={"tompiler"}
              route={route}
              left={"12vw"}
              transitionStatus={transitionStatus}
              setHover={set}
              setHoverElement={setHoverElement}
              hoverElement={hoverElement}
              alpha={alpha}
              activeColour={"rgba(74,171,255,0.7)"}
            ></Letter>
            <Letter
              linkText={"m"}
              to={"tompiler"}
              route={route}
              left={"15vw"}
              transitionStatus={transitionStatus}
              setHover={set}
              setHoverElement={setHoverElement}
              hoverElement={hoverElement}
              alpha={alpha}
              activeColour={"rgba(74,171,255,0.7)"}
            ></Letter>
            <Letter
              linkText={"t"}
              to={"tutorials"}
              route={route}
              left={"30vw"}
              transitionStatus={transitionStatus}
              setHover={set}
              setHoverElement={setHoverElement}
              hoverElement={hoverElement}
              alpha={alpha}
              activeColour={"rgba(250,146,63,0.7)"}
            ></Letter>
            <Letter
              linkText={"u"}
              to={"tutorials"}
              route={route}
              left={"33vw"}
              transitionStatus={transitionStatus}
              setHover={set}
              setHoverElement={setHoverElement}
              hoverElement={hoverElement}
              alpha={alpha}
              activeColour={"rgba(250,146,63,0.7)"}
            ></Letter>
            <Letter
              linkText={"t"}
              to={"tutorials"}
              route={route}
              left={"36vw"}
              transitionStatus={transitionStatus}
              setHover={set}
              setHoverElement={setHoverElement}
              hoverElement={hoverElement}
              alpha={alpha}
              activeColour={"rgba(250,146,63,0.7)"}
            ></Letter>
          </div>
        )
      }}
    </TransitionState>
  )
}

// const CellSelector = props => {
//   // console.log("Updated")

//   var elements = []

//   CellSelectorData.forEach(heading => {
//     for (var i = 0; i < heading.text.length; i++) {
//       elements.push(
//         <Cell
//           heading={heading}
//           text={heading.text[i]}
//           position={i}
//           key={[heading.word, heading.text, i].join("_")}
//           transitionStatus={props.transitionStatus}
//           route={props.route}
//         ></Cell>
//       )
//     }
//   })

//   return <div>{elements}</div>
// }

export default CellSelector
