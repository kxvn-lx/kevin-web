import React from "react"
import "../experience/experience.scss"

// Components
import Emoji from "../emoji"

function MonthDiff(props) {
  var dateFrom = props.dateFrom
  var dateTo = props.dateTo
  return (
    dateTo.getMonth() -
    dateFrom.getMonth() +
    12 * (dateTo.getFullYear() - dateFrom.getFullYear())
  )
}

const Main = () => {
  return (
    <div className="main container">
      <h1 className="page-title">
        <Emoji symbol="👨‍💻" label="man awith computer" /> Experience
      </h1>

      <div className="experience-wrapper">
        <h5>
          Sep 2019 - Present
          <span>
            {" "} <MonthDiff dateFrom={new Date(2019, 9)} dateTo={new Date()} /> Mo.
          </span>
        </h5>
        <h1>ESPER Satellite Imagery</h1>
        <p>
          ESPER Satellite Imagery is a startup company of which me and my
          friends build and develop a surveying solutions for agriculture and
          mining, using space-borne platforms to capture hyperspectral imagery.
          Hyperspectral imagery is an imaging technique that uses a specialised
          camera to capture images in hundreds of infrared wavelengths.
        </p>

        <p>
          My job as the Front-End developer is to design and develop a working
          web system to sell the product. I also occasionally help the
          engineering team at writing down and research the solutions.
        </p>
        <a
          href="http://www.espersatellites.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ESPER's site.
        </a>
      </div>

      <div className="experience-wrapper">
        <h5>
          July 2019 - Feb 2020
          <span>
          {" "}
            <MonthDiff
              dateFrom={new Date(2019, 7)}
              dateTo={new Date(2020, 2)}
            />{" "}
            Mo.
          </span>
        </h5>
        <h1>One Stop Solutions</h1>
        <p>
          This was an Industry Experience project I did as part of Monash
          University's final year graduate program. I was placed in a group of 6
          and was given a real client with their real business, for us to make
          them a web system.
        </p>

        <p>I was the team leader and lead front-end developer of the project.</p>
      </div>
    </div>
  )
}

export default Main
