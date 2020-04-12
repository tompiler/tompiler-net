import React from "react"

import WordSelectorData from "./CellSelector/WordSelectorData"
import Letter from "./Letter"

const Word = ({
  word,
  route,
  transitionStatus,
  setClickedWord,
  setHoverAlpha,
  setHoverElement,
  clickedWord,
  hoverElement,
  alpha,
}) => {
  var elements = []

  console.log(transitionStatus, route)
  WordSelectorData[word].forEach(letter => {
    // console.log(letter)
    elements.push(
      <Letter
        linkText={letter.text}
        to={word}
        route={route}
        left={`${letter.left}vw`}
        top={`${letter.top}vh`}
        transitionStatus={transitionStatus}
        setClickedWord={setClickedWord}
        setHover={setHoverAlpha}
        setHoverElement={setHoverElement}
        clickedWord={clickedWord}
        hoverElement={hoverElement}
        alpha={alpha}
        activeColour={`rgba(${letter.colour.red},${letter.colour.green},${letter.colour.blue},${letter.colour.a})`}
      ></Letter>
    )
  })

  return <div>{elements}</div>
}

export default Word
