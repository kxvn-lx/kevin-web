import React, { Component } from 'react'

import "./footer.scss"

export default class footer extends Component {
    render() {
        return (
            <footer>
                <div className="footerLink">
                    <a href="https://twitter.com/kevinlx_" target="_blank" rel="noreferrer">Twitter</a>
                    <a href="https://www.linkedin.com/in/kevinlaminto/" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href="https://github.com/kxvn-lx" target="_blank" rel="noreferrer">Github</a>
                    <a href="mailto:kevin.laminto@gmail.com" target="_blank" rel="noreferrer">Email</a>
                </div>
            </footer>
        )
    }
}
