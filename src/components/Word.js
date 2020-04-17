import React, { useState } from "react"
// import { Transition } from "react-spring/renderprops"

import WordSelectorData from "./CellSelector/WordSelectorData"
import Cell from "./cell2"

const Word = ({
  word,
  transitionStatus,
  exitState,
  entryState,
  setFirst,
  first,
  setClickedWord,
  setFadeOut,
  fadeOut,
  setFadeIn,
  fadeIn,
  setHoverAlpha,
  setHoverElement,
  clickedWord,
  hoverElement,
  alpha,
  route,
}) => {
  const getLetters = () => {
    var elements = []
    WordSelectorData[word].forEach((letter, i) => {
      elements.push(
        <Cell
          key={[word, i].join("_")}
          linkText={letter.text}
          to={word}
          setFirst={setFirst}
          first={first}
          left={`${letter.left}vw`}
          top={`${letter.top}vh`}
          exitState={exitState}
          entryState={entryState}
          transitionStatus={transitionStatus}
          setClickedWord={setClickedWord}
          setHover={setHoverAlpha}
          setHoverElement={setHoverElement}
          clickedWord={clickedWord}
          setFadeOut={setFadeOut}
          fadeOut={fadeOut}
          setFadeIn={setFadeIn}
          fadeIn={fadeIn}
          hoverElement={hoverElement}
          alpha={alpha}
          activeColour={letter.colour}
          route={route}
        ></Cell>
      )
    })
    return elements
  }

  return <div>{getLetters()}</div>
}

export default Word
