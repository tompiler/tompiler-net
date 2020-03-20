import React from "react"
import Header from "../header"
import contactStyles from "./contact.module.scss"
import { Link, graphql, useStaticQuery } from "gatsby"

import { faHome, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faLinkedin,
  faTwitterSquare,
  faGithubSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class EmailButton extends React.Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }
  onClick() {
    window.location.href = `mailto:tom@tompiler.net`
  }
  render() {
    return <button onClick={this.onClick}>EmailButton</button>
  }
}

const Contact = () => {
  return (
    <React.Fragment>
      <div className={contactStyles.headerContainer}>
        <h1 className={contactStyles.title}>contact</h1>
      </div>
      <div className={contactStyles.contactContainer}>
        <div className={contactStyles.contactItem}>
          <div className={contactStyles.iconContainer}>
            <a
              className={contactStyles.itemLink}
              target="_blank"
              href="https://www.google.com/maps/place/East+Dulwich,+London/@51.4543338,-0.0784063,16z/data=!3m1!4b1!4m5!3m4!1s0x4876039570044f17:0xb3ff4c32542fd4d!8m2!3d51.4545635!4d-0.0732101"
            >
              <FontAwesomeIcon
                size={window.innerWidth > 2000 ? "8x" : "6x"}
                icon={faHome}
              />
            </a>
          </div>
          <div>
            {/* <span style={{ position: "relative", top: "-3.5vh" }}>
              East Dulwich, London
            </span> */}
          </div>
        </div>
        <div className={contactStyles.contactItem}>
          <div className={contactStyles.iconContainer}>
            <a
              className={contactStyles.itemLink}
              target="_blank"
              href="mailto:tom@tompiler.net"
            >
              <FontAwesomeIcon
                size={window.innerWidth > 2000 ? "8x" : "6x"}
                icon={faEnvelope}
              />
            </a>
          </div>
          <div>
            {/* <span
              style={{ fontSize: "1em", position: "relative", top: "-3.5vh" }}
            >
              tom@tompiler.net
            </span> */}
          </div>
        </div>
        <div className={contactStyles.contactItem}>
          <div className={contactStyles.iconContainer}>
            <a
              className={contactStyles.itemLink}
              target="_blank"
              href="https://www.linkedin.com/in/thomas-lynch-88700354/"
            >
              <FontAwesomeIcon
                size={window.innerWidth > 2000 ? "8x" : "6x"}
                icon={faLinkedin}
              />
            </a>
          </div>
        </div>
        <div className={contactStyles.contactItem}>
          <div className={contactStyles.iconContainer}>
            <a
              className={contactStyles.itemLink}
              target="_blank"
              href="https://www.twitter.com/tompiler"
            >
              <FontAwesomeIcon
                size={window.innerWidth > 2000 ? "8x" : "6x"}
                icon={faTwitterSquare}
              />
            </a>
          </div>
        </div>
        <div className={contactStyles.contactItem}>
          <div className={contactStyles.iconContainer}>
            <a
              className={contactStyles.itemLink}
              target="_blank"
              href="https://www.github.com/tompiler"
            >
              <FontAwesomeIcon
                size={window.innerWidth > 2000 ? "8x" : "6x"}
                icon={faGithubSquare}
              />
            </a>
          </div>
        </div>
        <div className={contactStyles.contactItem}>
          <div className={contactStyles.iconContainer}>
            <a
              className={contactStyles.itemLink}
              target="_blank"
              href="https://www.youtube.com/channel/UCghVvAggSPShlctFuVTqWKA/featured?view_as=subscriber"
            >
              <FontAwesomeIcon
                size={window.innerWidth > 2000 ? "8x" : "6x"}
                icon={faYoutubeSquare}
              />
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Contact
