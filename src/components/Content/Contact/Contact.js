import React from "react"

import useWindowSize from "../../useWindowSize"

import ContactItem from "./ContactItem"

import { faHome, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faLinkedinIn,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import styled from "styled-components"

const ContactContainer = styled("div")`
  width: ${props => (props.mobile ? "100%" : "80%")};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(70px, 2fr));
  grid-template-rows: 7vh 7vh;
  grid-column-gap: 0.2vw;
  grid-row-gap: 2vh;
  justify-content: space-between;
`

const Contact = () => {
  const windowSize = useWindowSize()

  return (
    <ContactContainer mobile={windowSize.width < 650 ? true : false}>
      <ContactItem
        icon={faHome}
        href="https://www.google.com/maps/place/East+Dulwich,+London/@51.4543338,-0.0784063,16z/data=!3m1!4b1!4m5!3m4!1s0x4876039570044f17:0xb3ff4c32542fd4d!8m2!3d51.4545635!4d-0.0732101"
      ></ContactItem>
      <ContactItem
        icon={faEnvelope}
        href="mailto:tom@tompiler.net"
      ></ContactItem>
      <ContactItem
        icon={faLinkedinIn}
        href="https://www.linkedin.com/in/thomas-lynch-88700354/"
      ></ContactItem>
      <ContactItem
        icon={faTwitter}
        href="https://www.twitter.com/tompiler"
      ></ContactItem>
      <ContactItem
        icon={faGithub}
        href="https://www.github.com/tompiler"
      ></ContactItem>
    </ContactContainer>
  )
}

export default Contact
