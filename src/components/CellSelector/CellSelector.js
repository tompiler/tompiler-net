import React, { useState } from "react"
import CellSelectorData from "./CellSelectorData"
import Cell from "../cell"
import useHover from "../useHover"
import "./cellSelector.css"

const CellSelector = ({ route }) => {
  // const [hoverRef, isHovered] = useHover()

  // console.log(route)

  // const [hovered, setHovered] = useState(null)
  // const [clicked, setClicked] = useState(null)

  // console.log(hovered, route)
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

// class CellSelector extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { selected: "tompiler", hover: false, hoverWord: "" }

//     this.mouseEnter = this.mouseEnter.bind(this)
//     this.mouseLeave = this.mouseLeave.bind(this)
//   }

//   mouseEnter(word) {
//     this.setState({ hover: true, hoverWord: word })
//   }

//   mouseLeave(word) {
//     this.setState({ hover: false, hoverWord: word })
//   }

//   render() {
//     var elements = []
//     CellSelectorData.forEach(heading => {
//       for (var i = 0; i < heading.text.length; i++) {
//         if (heading.text[i] !== " ") {
//           elements.push(
//             <Cell
//               heading={heading}
//               text={heading.text[i]}
//               position={i}
//               key={[heading.word, heading.text, i].join("_")}
//               onMouseEnter={this.mouseEnter}
//               onMouseLeave={this.mouseLeave}
//               colour={
//                 (this.state.hover && this.state.hoverWord === heading.word) ||
//                 this.props.route === heading.word
//                   ? heading.colour
//                   : (this.state.hover &&
//                       this.state.hoverWord === heading.word2) ||
//                     this.props.route === heading.word2
//                   ? heading.colour2
//                   : "white"
//               }
//               routeHandler={this.props.routeHandler}
//             ></Cell>
//           )
//         }
//       }
//     })
//     return <div>{elements}</div>
//   }
// }

// export default CellSelector
