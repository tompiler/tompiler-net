import React from "react"

import contactItemStyles from "./contactItem.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ContactItem = ({ href, icon }) => {
  return (
    <div className={contactItemStyles.contactItem}>
      <div className={contactItemStyles.iconContainer}>
        <a className={contactItemStyles.itemLink} target="_blank" href={href}>
          <FontAwesomeIcon
            size={window.innerWidth > 2000 ? "8x" : "6x"}
            icon={icon}
          />
        </a>
      </div>
    </div>
  )
}

export default ContactItem
