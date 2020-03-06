import React from "react"
import Emoji from "../emoji"
import BigName from "../bigName/bigName.js"

const Main = () => {
    return (
        <div className="main container">
            <BigName name="Kevin Laminto"/>
            <h1>
                I'm a multidisciplinary developer and designer, who values aesthetic design and visuals, with amazing performance by default.
            </h1>
            <p>
                Hey there! I'm a full-stack developer (specialised in front-end) and UI/UX designer and researcher
                who's currently on a final year bachelor's degree in Software Development at Monash University.
                My knowledge in the realm of IT including, but not limited to, web application database, agile methodology, 
                project management, client interaction, and mobile apps development. I'm also passionate about photography and videography.
            </p>
            <p>
                I love to combine my knowledge in developing and design to create a system that not only look and functions flawlessly,
                but also keeping a strong focus on accessibility, user experience, usability, ethics, diversity and inclusion.
            </p>
            <p>
                My favourite project I have done so far is One Stop Solutions (Part of Monash University's Industry Experience project). A business where users can find almost all solutions to their problems 
                on a single website. I was the team leader and lead front-end engineer. Hence I am responsible in the productivity and project management
                of the whole team (of 6) and making sure the system follows a good UX design.
            </p>
            <p>
                Currently I am working casual as the lead front-end developer and designer of Esper Industries startup. I am <i>looking</i> for a new 
                part-time, full-time job. Available for freelance and speaking opportunities at <a href="mailto:kevin.laminto@gmail.com">kevin.laminto@gmail.com</a>
            </p>
            <p>
                <Emoji symbol="📌" label="red pin"/>  Located in Melbourne, Australia.
            </p>
        </div>
    )
}

export default Main