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
            <div className="content-wrapper">
                <h1>COMING SOON</h1>
            </div>
            <Footer />
        </div>
    </div>
)

export default AboutPage