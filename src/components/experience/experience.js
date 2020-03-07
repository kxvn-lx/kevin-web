import React from "react"
import "../experience/experience.scss"

const Main = () => {
  return (
    <div className="main container">
      <h1 className="page-title">Experience</h1>

      <div className="experience-wrapper">
        <h5>Sep 2019 - Present</h5>
        <h1>ESPER Satellite Imagery</h1>
        <p>
          ESPER Satellite Imagery is a startup company of which me and my
          friends build and develop a surveying solutions for agriculture and
          mining, using spaceborne platforms to capture hyperspectral imagery.
          Hyperspectral imagery is an imaging technique which uses a specialised
          camera to capture images in hundreds of infrared wavelengths.
        </p>

        <p>
          My job as the Front-End engineer, is to design and develop a working
          web system to sell the product. I also occasionally helps the
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
        <h5>July 2019 - Feb 2020</h5>
        <h1>One Stop Solutions</h1>
        <p>
            This was an Industry Experience project I did, as part of Monash University's final year graduate program.
            I was placed in a group of 6 and was given a real client with their real business, for us to make them a web system.
        </p>

        <p>
            I was the team leader and lead front-end engineer of the project.
        </p>
      </div>
    </div>
  )
}

export default Main
