import React, { Component } from "react"
import { Link } from "gatsby"

import "./navigation.scss"

export default class navigation extends Component {
    render() {
        return (
            <header>
                <nav>
                    <div className="site-details">
                        {
                            this.props.isLogoHidden ?
                                null
                                :
                                <h1>
                                    <Link to="/">Kevin Laminto</Link>
                                </h1>
                        }

                    </div>
                    <ul>
                        <li>
                            <Link to="/about" activeClassName="active">About</Link>
                        </li>
                    </ul>
                </nav></header>

        )
    }
}
