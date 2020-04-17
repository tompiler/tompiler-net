import React from "react"
import WordSelectorData from "./CellSelector/WordSelectorData"
import Cell from "./cell"

const Word = ({
  word,
  route,
  transitionStatus,
  setHoverAlpha,
  alpha,
  setHoverElement,
  hoverElement,
}) => {
  var elements = []
  WordSelectorData[word].forEach((letter, i) => {
    elements.push(
      <Cell
        key={[word, i].join("_")}
        linkText={letter.text}
        word={word}
        word2={letter.word2}
        route={route}
        left={`${letter.left}vw`}
        top={`${letter.top}vh`}
        activeColour={letter.colour}
        activeColour2={letter.colour2}
        transitionStatus={transitionStatus}
        setHoverAlpha={setHoverAlpha}
        alpha={alpha}
        setHoverElement={setHoverElement}
        hoverElement={hoverElement}
      ></Cell>
    )
  })
  return <div>{elements}</div>
}

export default Word
