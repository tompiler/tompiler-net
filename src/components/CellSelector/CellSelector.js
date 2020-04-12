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

import WordSelectorData from "./WordSelectorData"

import Word from "../Word"

const CellSelector = ({ route }) => {
  const [{ alpha }, setHoverAlpha] = useSpring(() => ({
    alpha: 0,
  }))

  const [clickedWord, setClickedWord] = useState("tompiler")
  const [hoverElement, setHoverElement] = useState(null)

  console.log(clickedWord)
  return (
    <TransitionState>
      {({ transitionStatus, exit, entry }) => {
        return (
          <div>
            <Word
              word="tompiler"
              route={route}
              transitionStatus={transitionStatus}
              setClickedWord={setClickedWord}
              setHoverAlpha={setHoverAlpha}
              setHoverElement={setHoverElement}
              clickedWord={clickedWord}
              hoverElement={hoverElement}
              alpha={alpha}
            />
            <Word
              word="tutorials"
              route={route}
              transitionStatus={transitionStatus}
              setClickedWord={setClickedWord}
              setHoverAlpha={setHoverAlpha}
              setHoverElement={setHoverElement}
              clickedWord={clickedWord}
              hoverElement={hoverElement}
              alpha={alpha}
            />
            {/* <Word
              word="contact"
              route={route}
              transitionStatus={transitionStatus}
              setClickedWord={setClickedWord}
              setHoverAlpha={setHoverAlpha}
              setHoverElement={setHoverElement}
              clickedWord={clickedWord}
              hoverElement={hoverElement}
              alpha={alpha}
            />
            <Word
              word="articles"
              route={route}
              transitionStatus={transitionStatus}
              setClickedWord={setClickedWord}
              setHoverAlpha={setHoverAlpha}
              setHoverElement={setHoverElement}
              clickedWord={clickedWord}
              hoverElement={hoverElement}
              alpha={alpha}
            /> */}
          </div>
        )
      }}
    </TransitionState>
  )
}

export default CellSelector

// <Letter
//   linkText={"t"}
//   to={"tompiler"}
//   route={route}
//   left={"9vw"}
//   transitionStatus={transitionStatus}
//   setHover={set}
//   setHoverElement={setHoverElement}
//   hoverElement={hoverElement}
//   alpha={alpha}
//   activeColour={"rgba(74,171,255,0.7)"}
// ></Letter>
// <Letter
//   linkText={"o"}
//   to={"tompiler"}
//   route={route}
//   left={"12vw"}
//   transitionStatus={transitionStatus}
//   setHover={set}
//   setHoverElement={setHoverElement}
//   hoverElement={hoverElement}
//   alpha={alpha}
//   activeColour={"rgba(74,171,255,0.7)"}
// ></Letter>
// <Letter
//   linkText={"m"}
//   to={"tompiler"}
//   route={route}
//   left={"15vw"}
//   transitionStatus={transitionStatus}
//   setHover={set}
//   setHoverElement={setHoverElement}
//   hoverElement={hoverElement}
//   alpha={alpha}
//   activeColour={"rgba(74,171,255,0.7)"}
// ></Letter>
// <Letter
//   linkText={"t"}
//   to={"tutorials"}
//   route={route}
//   left={"30vw"}
//   transitionStatus={transitionStatus}
//   setHover={set}
//   setHoverElement={setHoverElement}
//   hoverElement={hoverElement}
//   alpha={alpha}
//   activeColour={"rgba(250,146,63,0.7)"}
// ></Letter>
// <Letter
//   linkText={"u"}
//   to={"tutorials"}
//   route={route}
//   left={"33vw"}
//   transitionStatus={transitionStatus}
//   setHover={set}
//   setHoverElement={setHoverElement}
//   hoverElement={hoverElement}
//   alpha={alpha}
//   activeColour={"rgba(250,146,63,0.7)"}
// ></Letter>
// <Letter
//   linkText={"t"}
//   to={"tutorials"}
//   route={route}
//   left={"36vw"}
//   transitionStatus={transitionStatus}
//   setHover={set}
//   setHoverElement={setHoverElement}
//   hoverElement={hoverElement}
//   alpha={alpha}
//   activeColour={"rgba(250,146,63,0.7)"}
// ></Letter>
