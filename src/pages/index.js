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
            <Navigation />

            <ParentWrapper>
                <div className="content-wrapper">
                    <img className="memoji-img" style={{marginBottom: '1rem'} }src={require('../images/memoji-hi.png')} alt="kevin's memoji"/>
                    <h1>Hi, i'm Kevin —<br />Software developer living in Melbourne, Australia.</h1>

                    <p>
                        Currently building <KontaxA className="colourful-a" href="https://kontaxcam.netlify.app" target="_blank" rel="noreferrer">Kontax Cam</KontaxA> in my spare time
                        and a front-end developer at <EsperA className="colourful-a" href="https://espersatellites.co" target="_blank" rel="noreferrer">Esper Satellites Imagery</EsperA> startup.
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

const KontaxA = styled.a`
    color: #a18cd1;
    background-color: rgba(161, 140, 209, 0.1);

    &:hover {
        background-color: rgba(161, 140, 209, 0.15);
    }
`

const EsperA = styled.a`
    color: #fda085;
    background-color: rgba(253, 161, 133, 0.1);

    &:hover {
        background-color: rgba(253, 161, 133, 0.15);
    }
`