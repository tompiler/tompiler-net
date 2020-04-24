import React from "react"
import transitionCellStyles from "./transitionCell.module.scss"

import { SpringLink } from "./SpringLink"
import SpringBar from "./SpringBar"

const MobileLink = props => (
  <div className={transitionCellStyles.link}>
    <SpringLink
      className={transitionCellStyles.springLink}
      to={`/${props.to}`}
      exitLength={0.5}
      entryLength={0.5}
      entryDelay={0.5}
      entryState={props.to}
      exitState={props.location.pathname === "/" ? "tompiler" : props.route}
    >
      {props.to === "tompiler" ? "home" : props.to}
    </SpringLink>
    <SpringBar {...props} />
  </div>
)

export default MobileLink
