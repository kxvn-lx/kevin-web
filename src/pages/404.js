import React from "react"

import SEO from "../components/seo"
import Navigation from "../components/navigation/navigation.js"
import Footer from "../components/footer/footer"

const NotFoundPage = () => (
    <div>
        <SEO
            description="Kevin Laminto, iOS Developer, interested in UI/UX design."
            lang="us"
            title="404"
        />
        <div className="main">
            <Navigation />
            <div className="content-wrapper">
                <h2>PAGE NOT FOUND</h2>
            </div>
            <Footer />
        </div>
    </div>
)

export default NotFoundPage
