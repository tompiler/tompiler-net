// import React from "react"
// import CellSelectorData from "./CellSelectorData"
// import Cell from "../cell2"
// import Word from "../word"
// // import useHover from "../useHover"

// import "./cellSelector.css"
// import { TransitionState } from "gatsby-plugin-transition-link"

import React, { useState } from "react"
// import { TransitionState } from "gatsby-plugin-transition-link"
import { useSpring } from "react-spring"

// import WordSelectorData from "./WordSelectorData"

import Word from "../Word"

const CellSelector = ({ transitionStatus, exit, entry, route }) => {
  const [{ alpha }, setHoverAlpha] = useSpring(() => ({
    alpha: 0,
    config: {
      mass: 1,
      tension: 170,
      friction: 40,
    },
  }))

  const [first, setFirst] = useState(true)

  const mount = ["entering", "entered"].includes(transitionStatus)

  const [{ fadeOut }, setFadeOut] = useSpring(() => ({
    fadeOut: mount ? 0 : 0.7,
  }))

  const [{ fadeIn }, setFadeIn] = useSpring(() => ({
    fadeIn: mount ? 0 : 0.7,
  }))

  const [clickedWord, setClickedWord] = useState(null)
  const [hoverElement, setHoverElement] = useState(null)

  //console.log(route)

  // console.log(hoverElement)
  // console.log(transitionStatus, exit.state.exitState, entry.state.entryState)

  const persistentClicked =
    clickedWord || exit.state.exitState || entry.state.entryState || route

  // console.log("Just Clicked: ", persistentClicked)

  return (
    <div>
      <Word
        word="tompiler"
        transitionStatus={transitionStatus}
        exitState={exit.state}
        entryState={entry.state}
        setFirst={setFirst}
        first={first}
        setClickedWord={setClickedWord}
        setFadeOut={setFadeOut}
        fadeOut={fadeOut}
        setFadeIn={setFadeIn}
        fadeIn={fadeIn}
        setHoverAlpha={setHoverAlpha}
        setHoverElement={setHoverElement}
        clickedWord={persistentClicked}
        hoverElement={hoverElement}
        alpha={alpha}
        route={route}
      />
      <Word
        word="tutorials"
        transitionStatus={transitionStatus}
        exitState={exit.state}
        entryState={entry.state}
        setFirst={setFirst}
        first={first}
        setClickedWord={setClickedWord}
        setFadeOut={setFadeOut}
        fadeOut={fadeOut}
        setFadeIn={setFadeIn}
        fadeIn={fadeIn}
        setHoverAlpha={setHoverAlpha}
        setHoverElement={setHoverElement}
        clickedWord={persistentClicked}
        hoverElement={hoverElement}
        alpha={alpha}
        route={route}
      />
      <Word
        word="contact"
        transitionStatus={transitionStatus}
        exitState={exit.state}
        entryState={entry.state}
        setFirst={setFirst}
        first={first}
        setClickedWord={setClickedWord}
        setFadeOut={setFadeOut}
        fadeOut={fadeOut}
        setFadeIn={setFadeIn}
        fadeIn={fadeIn}
        setHoverAlpha={setHoverAlpha}
        setHoverElement={setHoverElement}
        clickedWord={persistentClicked}
        hoverElement={hoverElement}
        alpha={alpha}
        route={route}
      />
      <Word
        word="articles"
        transitionStatus={transitionStatus}
        exitState={exit.state}
        entryState={entry.state}
        setFirst={setFirst}
        first={first}
        setClickedWord={setClickedWord}
        setFadeOut={setFadeOut}
        fadeOut={fadeOut}
        setFadeIn={setFadeIn}
        fadeIn={fadeIn}
        setHoverAlpha={setHoverAlpha}
        setHoverElement={setHoverElement}
        clickedWord={persistentClicked}
        hoverElement={hoverElement}
        alpha={alpha}
        route={route}
      />
    </div>
  )
}

export default CellSelector
