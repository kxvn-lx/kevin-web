import React, { Component } from "react"
import { Link } from "gatsby"

import "./navigation.scss"

export default class navigation extends Component {
    render() {
        return (
            <header>
                <nav>
                    <div className="site-details">
                        <h1>
                            <Link to="/">Kevin Laminto</Link>
                        </h1>
                        <p>iOS Developer, interested in UI/UX Design.</p>
                    </div>
                    <ul>
                        <li>
                            <Link to="/about" activeClassName="active">About</Link>
                        </li>
                        {/* <li>
                            <p>Blog</p>
                        </li> */}
                    </ul>
                </nav></header>

        )
    }
}
