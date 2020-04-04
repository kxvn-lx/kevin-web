import React from "react"
import "../bigName/bigName.scss"


const bigName = props => (
  <>
    <div className="big-name-wrapper">
      {/* <div>
        <p id="masthead-phrase-p"> I am a Web <span id="masthead-phrase" className="coloured-text"></span> </p>
      </div> */}
      <p className="big-name">{props.name}</p>
    </div>
  </>
)

export default bigName
