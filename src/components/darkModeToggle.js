import { ThemeToggler } from "gatsby-plugin-dark-mode"
import React, { useState } from "react"
import styled from "styled-components"
import sun from "../images/sun.svg"
import moon from "../images/moon.svg"

const ToggleWrapper = styled.div`
  cursor: pointer;
  display: inline;
`

const IconWrapper = styled.div`
    width: 1rem;
    display: inline-block;
    vertical-align: middle;
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */

    &:hover {
      position: relative;
      animation: hover-animation 1s forwards ease;
    }

    &:hover:after {
      content: "";
      display: block;
      width: 100%;
      height: 3px;
      background-image: linear-gradient(45deg, black 50%, orange 50%);
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position: 100% 0;
      position: absolute;
      bottom: -0.25em;
      right: 0;
      animation: link-animation 1s ease-out forwards;
    }
`

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <>
      <ThemeToggler>
        {({ toggleTheme }) => (
            <ToggleWrapper
            onClick={() => {
                toggleTheme(darkMode ? "light" : "dark")
                setDarkMode(!darkMode)
            }}
            >
            <IconWrapper>
                <img
                    src={darkMode ? sun : moon}
                    alt={darkMode ? "light mode" : "dark mode"}
                />
            </IconWrapper>
            </ToggleWrapper>
        )}
      </ThemeToggler>
    </>
  )
}

export default DarkModeToggle
