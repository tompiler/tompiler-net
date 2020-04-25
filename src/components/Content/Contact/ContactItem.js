import React from "react"

import contactItemStyles from "./contactItem.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useWindowSize from "../../useWindowSize"

const ContactItem = ({ href, icon }) => {
  const windowSize = useWindowSize()

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
            size={
              windowSize.width > 1900
                ? "4x"
                : windowSize.width > 650
                ? "3x"
                : "2x"
            }
            icon={icon}
            className={contactItemStyles.icon}
          />
        </a>
      </div>
    </div>
  )
}

export default ContactItem
