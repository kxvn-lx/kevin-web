import { Link } from "gatsby"
import React from "react"

// Components
import DarkModeToggle from "./darkModeToggle"

const Header = props => (
  <header>
    <div className="bg-container">
      <div className="inner-header">
        <div className="logo">
          <p className={`coloured-text ${props.logoHidden}`}>
            <Link to="/">Kevin Laminto</Link>
          </p>
        </div>
        <div className="navigation">
          <nav>
            <ul>
              <li>
                <Link to="/experience">Experience</Link>
              </li>
              <li>
                <DarkModeToggle />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header
