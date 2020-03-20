import React from "react"
import contactStyles from "./contact.module.scss"
import ContactItem from "./ContactItem"

import { faHome, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faLinkedin,
  faTwitterSquare,
  faGithubSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons"

const Contact = () => {
  return (
    <React.Fragment>
      <div className={contactStyles.headerContainer}>
        <h1 className={contactStyles.title}>contact</h1>
      </div>
      <div className={contactStyles.contactContainer}>
        <ContactItem
          icon={faHome}
          href="https://www.google.com/maps/place/East+Dulwich,+London/@51.4543338,-0.0784063,16z/data=!3m1!4b1!4m5!3m4!1s0x4876039570044f17:0xb3ff4c32542fd4d!8m2!3d51.4545635!4d-0.0732101"
        ></ContactItem>
        <ContactItem
          icon={faEnvelope}
          href="mailto:tom@tompiler.net"
        ></ContactItem>
        <ContactItem
          icon={faLinkedin}
          href="https://www.linkedin.com/in/thomas-lynch-88700354/"
        ></ContactItem>
        <ContactItem
          icon={faTwitterSquare}
          href="https://www.twitter.com/tompiler"
        ></ContactItem>
        <ContactItem
          icon={faGithubSquare}
          href="https://www.github.com/tompiler"
        ></ContactItem>
        <ContactItem
          icon={faYoutubeSquare}
          href="https://www.youtube.com/channel/UCghVvAggSPShlctFuVTqWKA/featured?view_as=subscriber"
        ></ContactItem>
      </div>
    </React.Fragment>
  )
}

export default Contact
