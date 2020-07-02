import React from "react"

import SEO from "../components/seo"
import Navigation from "../components/navigation/navigation.js"
import Footer from "../components/footer/footer"

import "../styles/shared.scss"

const AboutPage = () => (
    <div>
        <SEO
            description="Kevin Laminto, iOS Developer, interested in UI/UX design."
            lang="us"
            title="About"
        />
        <div className="main">
            <Navigation />
            <div className="content-wrapper blog-content-wrapper">
                <h2>Hey! 👋</h2>
                <p>
                    Let's keep this short. If you haven't notice, I love building iOS apps in my free time.
                    It's really fun and challenging. And with the new SwiftUI framework introduced in WWDC19,
                    iOS development just got more and more excited as ever!<br />
                </p>

                <p>
                    Apart from building apps, I enjoyed researching in UI/UX to ensure users have the best
                    experience in using the app.
                </p>

                <p>
                    I also enjoyed doing photography and making musics in my free time. You can check my photography website here <a href="https://www.kevinlaminto.com" target="_blank" rel="noreferrer">www.kevinlaminto.com</a>.
                </p>

                <p>
                    And that's it! Hope to get to know you too! get in touch via my email here  <a href="mailto:kevin.laminto@gmail.com">kevin.laminto@gmail.com</a>
                </p>

            </div>
            <Footer />
        </div>
    </div>
)

export default AboutPage