import React from "react"
import Emoji from "../emoji"
import BigName from "../bigName/bigName.js"

const Main = () => {
    return (
        <>
        <BigName name="Kevin Laminto"/>
        <div className="main container" id="main-wrapper">
            <h1>
                I'm a multidisciplinary developer and designer, who values aesthetic design and visuals, with amazing performance by default.
            </h1>
            <p>
                Hey there! I'm a full-stack developer (specialised in front-end), UI/UX designer and iOS Developer
                who's currently on a final year bachelor's degree in Software Development at Monash University.
                My knowledge in the realm of IT including, but not limited to, web application database, agile methodology, 
                project management, client interaction, and mobile apps development. I'm also passionate about photography and videography.
            </p>
            <p>
                I love to combine my knowledge in developing and design to create a system that not only look and functions flawlessly,
                but also keeping a strong focus on accessibility, user experience, usability, ethics, diversity, and inclusion.
            </p>
            <p>
                Aside from web development, I am working on an iOS application called <a href="https://cutt.ly/nooknook">NookNook</a>. It is an Animal Crossing: New Horizons
                companion app where you can see all the avaiable in-game items, critters, and villagers. The app has tons of new features and I will be adding more over time!
            </p>
            <p>
                Currently, I am working casual as the lead front-end developer and designer of Esper Industries startup. I am <i>looking</i> for a new 
                part-time, full-time job. Available for freelance and speaking opportunities at <a href="mailto:kevin.laminto@gmail.com">kevin.laminto@gmail.com</a>
            </p>
            <p>
                <Emoji symbol="📌" label="red pin"/>  Located in Melbourne, Australia.
            </p>
        </div>
        </>
    )
}

export default Main