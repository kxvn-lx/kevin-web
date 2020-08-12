import React from "react"
import SEO from "../components/seo"
import styled from "styled-components"

// Styles
import "../styles/shared.scss"
import "../styles/index.scss"

// Component
import Footer from "../components/footer/footer"
import Navigation from "../components/navigation/navigation.js"

const IndexPage = () => (
    <>
        <SEO
            description="Kevin Laminto, software developer, interested in UI/UX design."
            lang="us"
            title="Home"
        />
        <div className="main">
            <Navigation isLogoHidden={true} />

            <ParentWrapper>
                <div className="content-wrapper">
                    <h1>Hello, i'm Kevin. Software developer living in Melbourne, Australia.</h1>

                    <p>
                        Currently building iOS apps in my spare time and a front-end developer at <a href="https://espersatellites.co" target="_blank" rel="noreferrer">Esper Satellites Imagery</a> startup.
                    </p>

                    <p>
                        Looking for casual, part-time, or full-time developer position.
                    </p>
                </div>
            </ParentWrapper>


            <Footer />
        </div>
    </>
)

export default IndexPage

// Styled components
const ParentWrapper = styled.div`
    width: 70vw;
    margin: 0 auto;
`