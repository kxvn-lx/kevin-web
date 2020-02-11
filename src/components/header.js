import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <div className="bg-container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/">Kevin Laminto</Link>
        </div>
        <div className="navigation">
          <nav>
            <a href="https://github.com/kxvn-lx/" target="_blank" rel="noopener">Github</a>
          </nav>
        </div>
      </div>
    </div>
  </header> 
)

export default Header
