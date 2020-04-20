import React from "react"

import contactItemStyles from "./contactItem.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ContactItem = ({ href, icon }) => {
  return (
    <div className={contactItemStyles.contactItem}>
      <div className={contactItemStyles.iconContainer}>
        <a
          className={contactItemStyles.itemLink}
          target="_blank"
          rel="noopener noreferrer"
          href={href}
        >
          <FontAwesomeIcon
            size={window.innerWidth > 2000 ? "6x" : "4x"}
            icon={icon}
          />
        </a>
      </div>
    </div>
  )
}

export default ContactItem
