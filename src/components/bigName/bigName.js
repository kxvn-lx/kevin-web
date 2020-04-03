import React from "react"
import "../bigName/bigName.scss"

import DownArrow from "../../images/down-arrow.svg"

const bigName = props => (
  <>
    <div className="big-name-wrapper">
      {/* <div>
        <p id="masthead-phrase-p"> I am a Web <span id="masthead-phrase" className="coloured-text"></span> </p>
      </div> */}
      <p className="big-name">{props.name}</p>
      <div id="masthead-arrow-wrapper">
          <img src={DownArrow} alt="down-arrow" />
      </div>
    </div>
  </>
)

export default bigName
