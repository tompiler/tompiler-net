import React from "react"
import Header from "../header"
import contactStyles from "./contact.module.scss"
import { Link, graphql, useStaticQuery } from "gatsby"

const Contact = () => {
  return (
    <div className="contact">
      <div>
        <h1 className={contactStyles.title}>
          <Link to="/">Contact</Link>
        </h1>
      </div>
      <ul>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Contact
