import React, { Component } from "react"
import PropTypes from "prop-types"

import "./showcase.scss"

export default class showcase extends Component {
  render() {
    return (
      <div className="app-icon-wrapper">
        <img style={{marginBottom: '1em'}} src={this.props.appIcon} alt="NookNook app icon" />
        <p className="title">{this.props.appTitle}</p>
        <p className="description">{this.props.appDescription}</p>
        { this.props.children }
      </div>
    )
  }
}

showcase.propTypes = {
  appIcon: PropTypes.object,
  appTitle: PropTypes.string,
  appDescription: PropTypes.string
}
