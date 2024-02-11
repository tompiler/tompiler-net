import React from "react"

import ContactItem from "./ContactItem"

import { faHome, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faLinkedinIn,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import styled from "styled-components"

const ContactContainer = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1.5fr));
  grid-template-rows: 7vh 7vh;
  grid-column-gap: 0.2vw;
  grid-row-gap: 2vh;
  justify-content: space-between;
  /* border: 1px dashed lightpink; */
  width: 40%;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
  }
`

const Contact = () => {
  return (
    <ContactContainer>
      <ContactItem
        icon={faEnvelope}
        href="mailto:tom@tompiler.net"
      ></ContactItem>
      <ContactItem
        icon={faLinkedinIn}
        href="https://www.linkedin.com/in/thomas-lynch-88700354/"
      ></ContactItem>
      <ContactItem
        icon={faGithub}
        href="https://www.github.com/tompiler"
      ></ContactItem>
    </ContactContainer>
  )
}

export default Contact
