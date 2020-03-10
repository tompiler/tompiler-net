import React from "react"
import "./toolbar.css"

const Toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div></div>
      <div className="toolbar__logo">
        <a href="/">tompiler</a>
      </div>
      <div className="toolbar-gap"></div>
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/">cv</a>
          </li>
          <li>
            <a href="/">articles</a>
          </li>
          <li>
            <a href="/">tutorials</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Toolbar
