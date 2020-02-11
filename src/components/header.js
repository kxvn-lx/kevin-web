import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <div className="bg-container">
      <div className="inner-header">
        <div className="logo">
          <p className="">
            <Link to="/">Kevin Laminto</Link>
          </p>
        </div>
        <div className="navigation">
          <nav>
            <a href="https://github.com/kxvn-lx/" target="_blank" rel="noopener noreferrer">Github</a>
          </nav>
        </div>
      </div>
    </div>
  </header> 
)

export default Header
