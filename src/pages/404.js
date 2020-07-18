import React from "react"

import SEO from "../components/seo"
import Navigation from "../components/navigation/navigation.js"
import Footer from "../components/footer/footer"
import styled from "styled-components"
import "../styles/glitch.scss"
import { Link } from "gatsby"

const NotFoundPage = () => (
    <div>
        <SEO
            description="Kevin Laminto, iOS Developer, interested in UI/UX design."
            lang="us"
            title="404"
        />
        <div className="main">
            <Navigation />
            <ParentWrapper>
                <div className="content-wrapper">
                    <h2 className="glitch" data-text="PAGE NOT FOUND">PAGE NOT FOUND</h2>
                    <Link to="/">Back to home</Link>
                </div>
            </ParentWrapper>
            <Footer />
        </div>
    </div>
)

export default NotFoundPage

// Styled components
const ParentWrapper = styled.div`
    width: 70vw;
    margin: 0 auto;
`