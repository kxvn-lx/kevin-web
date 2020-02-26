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
    width: 1.2rem;
    display: inline-block;
    vertical-align: middle;
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
`

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <>
      <ThemeToggler>
        {({ toggleTheme }) => (
            <ToggleWrapper
            onClick={() => {
                toggleTheme(darkMode ? "dark" : "light")
                setDarkMode(!darkMode)
            }}
            >
            <IconWrapper>
                <img
                    class={darkMode ? "dark-mode" : "light-mode"}
                    src={darkMode ? moon : sun}
                    alt={darkMode ? "dark mode" : "light mode"}
                />
            </IconWrapper>
            </ToggleWrapper>
        )}
      </ThemeToggler>
    </>
  )
}

export default DarkModeToggle
