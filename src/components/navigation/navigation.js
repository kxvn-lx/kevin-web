import React, { Component } from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import "./navigation.scss"

export default class navigation extends Component {
    render() {
        return (
            <header>
                <nav>
                    <div className="site-details">
                        <TitleWrapper>
                            <Link to="/">Kevin Laminto</Link>
                        </TitleWrapper>
                    </div>
                    <ul>
                        <li>
                            <Link to="/about" activeClassName="active">About</Link>
                        </li>
                        <li>
                            <Link to="/resume" activeClassName="active">Resume</Link>
                        </li>
                    </ul>
                </nav>
            </header>

        )
    }
}

const TitleWrapper = styled.h1`
    font-size: 1.5rem;
    a {
        color: white;
    }
`