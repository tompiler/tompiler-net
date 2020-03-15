import React from "react"

import "./sideDrawer.css"

const SideDrawer = props => {
  let drawerClasses = "side-drawer"
  if (props.show) {
    drawerClasses = "side-drawer open"
  }
  return (
    <nav className={drawerClasses}>
      <div className="sideDrawer-container">
        <ul>
          <li>
            <a href="/">articles</a>
          </li>
          <li>
            <a href="/">tutorials</a>
          </li>
        </ul>
      </div>
      <ul>
        <li>
          <a href="/">cv</a>
        </li>
        <li>
          <a href="/">about</a>
        </li>
        <li>
          <a href="/">contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default SideDrawer
