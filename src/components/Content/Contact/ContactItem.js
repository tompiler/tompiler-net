import React from "react"

import useWindowSize from "../../useWindowSize"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

const IconContainer = styled("div")`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const ItemLink = styled("a")`
  display: flex;
  /* color: rgb(54, 54, 54); */
  color: ${props => props.theme.contactItem.color};
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const Icon = styled(FontAwesomeIcon)`
  &:hover {
    color: ${props => props.theme.contactItem.hover};
    cursor: pointer;
  }
`

const ContactItem = ({ href, icon }) => {
  const windowSize = useWindowSize()

  return (
    <IconContainer>
      <ItemLink target="_blank" rel="noopener noreferrer" href={href}>
        <Icon
          size={
            windowSize.width > 1900
              ? "4x"
              : windowSize.width > 650
              ? "3x"
              : "2x"
          }
          icon={icon}
        />
      </ItemLink>
    </IconContainer>
  )
}

export default ContactItem
