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
        <Emoji symbol="👨‍💻" label="man with computer" /> Experience
      </h1>

      <div className="experience-wrapper">
        <h5>
          Sep 2019 - Present
          <span>
            {/* DateFrom needs to be 9, but somehow got the date wrong. Need to take a look more */}{" "}
            <MonthDiff dateFrom={new Date(2019, 8)} dateTo={new Date()} /> Mo.
          </span>
        </h5>
        <h1>ESPER Satellite Imagery</h1>
        <h5 style={{marginBottom: "2em"}}>Lead front-end developer & designer</h5>
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
        <h5 style={{marginBottom: "2em"}}>Front-end developer & designer, Team leader</h5>
        <p>
          This was an Industry Experience project I did as part of Monash
          University's final year graduate program. I was placed in a group of 6
          and was given a real client with their real business, for us to make
          them a web system.
        </p>
      </div>

      <div className="experience-wrapper">
        <h5>
          June 2019 - Present
          <span>
            <MonthDiff dateFrom={new Date(2019, 5)} dateTo={new Date()} /> Mo.
          </span>
        </h5>
        <h1>Freelance/Independent iOS Developer</h1>
        <h5 style={{marginBottom: "2em"}}>Current app: <a href="https://cutt.ly/nooknook">NookNook</a></h5>
        <p>
          NookNook is currently on its beta phase. Although it's still very new, I have genuinely received positive
          reviews from the community. What makes NookNook differences from other apps is its <i>user-centred design.</i>
          I am doing my best to keep the app lively and up-to-date to the current trend so that players could keep playing
          whilst having the right tools on their hand.
        </p>
      </div>

    </div>
  )
}

export default Main
