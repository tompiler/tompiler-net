import React, { useRef, useEffect } from "react"
import { Transition } from "react-spring/renderprops"

import WordSelectorData from "./CellSelector/WordSelectorData"
import Letter from "./Letter"

const Word = ({
  word,
  route,
  transitionStatus,
  setClickedWord,
  setHoverAlpha,
  setHoverElement,
  exitState,
  entryState,
  clickedWord,
  hoverElement,
  alpha,
}) => {
  //   console.log(transitionStatus, route, word)

  // console.log(clickedWord)

  const colour = `rgba(${WordSelectorData[word][0].colour.red},${WordSelectorData[word][0].colour.green},${WordSelectorData[word][0].colour.blue},${WordSelectorData[word][0].colour.a})`
  const getLetters = () => {
    var elements = []
    WordSelectorData[word].forEach((letter, i) => {
      elements.push(
        <Letter
          // {...props}
          key={[word, i].join("_")}
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
    return elements
  }

  return <div>{getLetters()}</div>
}

export default Word
