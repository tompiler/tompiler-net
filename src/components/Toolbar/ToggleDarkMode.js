import React, { useContext } from "react"
import Context from "../store/context"

import useWindowSize from "../useWindowSize"

import styled, { ThemeContext } from "styled-components"
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
  margin: 1.3vh 8px 0 0;
`

const Icon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.contactItem.color};

  &:hover {
    color: ${props => props.theme.contactItem.hover};
    cursor: pointer;
  }
`

const ToggleDarkMode = () => {
  const windowSize = useWindowSize()
  const { state, dispatch } = useContext(Context)
  const theme = useContext(ThemeContext)

  return (
    <ButtonContainer>
      <Button
        onClick={() => {
          console.log("Clicked", theme, state)
          dispatch({ type: "TOGGLE_DARK_MODE" })
        }}
      >
        <Icon
          size={
            windowSize.width > 1900
              ? "3x"
              : windowSize.width > 1000
              ? "2x"
              : "lg"
          }
          icon={state.isDark ? faSun : faMoon}
        />
      </Button>
    </ButtonContainer>
  )
}

export default ToggleDarkMode
