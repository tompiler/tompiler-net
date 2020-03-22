import React from "react"
import CellSelectorData from "./CellSelectorData"
import Cell from "../cell"
import "./cellSelector.css"

class CellSelector extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selected: "tompiler", hover: false, hoverWord: "" }

    this.mouseEnter = this.mouseEnter.bind(this)
    this.mouseLeave = this.mouseLeave.bind(this)
  }

  mouseEnter(word) {
    this.setState({ hover: true, hoverWord: word })
  }

  mouseLeave(word) {
    this.setState({ hover: false, hoverWord: word })
  }

  render() {
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
              onMouseEnter={this.mouseEnter}
              onMouseLeave={this.mouseLeave}
              colour={
                (this.state.hover && this.state.hoverWord === heading.word) ||
                this.props.route === heading.word
                  ? heading.colour
                  : (this.state.hover &&
                      this.state.hoverWord === heading.word2) ||
                    this.props.route === heading.word2
                  ? heading.colour2
                  : "white"
              }
              routeHandler={this.props.routeHandler}
            ></Cell>
          )
        }
      }
    })
    return <React.Fragment>{elements}</React.Fragment>
  }
}

export default CellSelector
