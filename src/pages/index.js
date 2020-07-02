import React from "react"
import SEO from "../components/seo"
import styled from "styled-components"

import "../styles/shared.scss"
import "../styles/index.scss"

import nooknook from "../images/nooknook-icon.png"
import kontaxcam from "../images/kontaxcam-icon.png"
import Navigation from "../components/navigation/navigation.js"
import download from "../images/downloadAppStore.svg"

// Component
import Showcase from "../components/showcase/showcase"
import Footer from "../components/footer/footer"

const ShowcaseContainer = styled.div`
    margin-top: 1em;

    a {
        font-size: 0.8em;
    }
`

const IndexPage = () => (
    <>
        <SEO
            description="Kevin Laminto, iOS Developer, interested in UI/UX design."
            lang="us"
            title="Home"
        />
        <div className="main">
            <Navigation />

            <div className="content-wrapper">
                <h2>PROJECTS</h2>

                <div className="flexbox">
                    <div className="col" style={{ marginLeft: "0" }}>
                        <Showcase
                            appIcon={nooknook}
                            appTitle={"NookNook: Companion for ACNH"}
                            appDescription={"NookNook is a companion app for Animal Crossing: New Horizons. It is simple, yet powerful enough to show every informations a player need for the game."}
                        >
                            <ShowcaseContainer>
                                <a href="https://apps.apple.com/au/app/nooknook-companion-for-acnh/id1510282831" target="_blank" rel="noreferrer">
                                    <img className="downloadNowImg" src={download} alt="download now" />
                                </a>
                            </ShowcaseContainer>
                        </Showcase>
                    </div>

                    <div className="col" style={{ marginLeft: "0" }}>
                        <Showcase
                            appIcon={kontaxcam}
                            appTitle={"Kontax Cam"}
                            appDescription={"Kontax Cam is an open-sourced project I did for iOS device. It's an instant camera app with personalised custom filters and effect."}
                        >
                            <ShowcaseContainer>
                                <a href="https://github.com/kxvn-lx/Kontax-Cam" target="_blank" rel="noreferrer">
                                    View on github
                                </a>
                            </ShowcaseContainer>
                        </Showcase>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    </>
)

export default IndexPage
