import React from "react"

// Components
import Emoji from "../components/emoji"

const Main_alt = props => {
  return (
    <div className="main container main-alt">
      <h1 className="page-title">
        <Emoji symbol={props.emoji} label={props.emoLabel}/> {props.title}
      </h1>
      <h3>{props.subtitle}</h3>
      <p>{props.body}</p>
    </div>
  )
}

export default Main_alt
