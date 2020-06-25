import React, { useContext } from "react"
import Context from "../store/context"

import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"

const Button = styled("button")`
  border: none;
  background: none;
  &:focus {
    outline: none;
  }
`

const ButtonContainer = styled("div")`
  float: right;
  margin: 1.3vh 0 0 0;
`

const Icon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.contactItem.color};

  &:hover {
    color: ${props => props.theme.contactItem.hover};
    cursor: pointer;
  }
`

const ToggleDarkMode = () => {
  const { state, dispatch } = useContext(Context)

  return (
    <ButtonContainer>
      <Button
        aria-label="Toggle Dark Mode"
        onClick={() => {
          dispatch({ type: "TOGGLE_DARK_MODE" })
        }}
      >
        <Icon size={"lg"} icon={state.isDark ? faSun : faMoon} />
      </Button>
    </ButtonContainer>
  )
}

export default ToggleDarkMode
