import React from "react"

import SEO from "../components/seo"
import Navigation from "../components/navigation/navigation.js"
import Footer from "../components/footer/footer"
import styled from "styled-components"

// Styles
import "../styles/shared.scss"

const AboutPage = () => (
    <div>
        <SEO
            description="Kevin Laminto - iOS Developer, interested in UI/UX design."
            lang="us"
            title="About"
        />
        <div className="main">
            <Navigation />
            <ParentWrapper>
                <div className="content-wrapper">
                    <div style={{ marginBottom: '2em' }}>
                        <h1>Hello.</h1>
                        <p>
                            I'm a Monash University graduate with a bachelor of IT in Software Development.
                            I love building great products that not only provide value, but also great UI/UX design to the user.
                            My interests are iOS development, UI/UX Design, photography, front-end development, listening to heavy musics and going to gigs!
                        </p>

                        <p>If i'm not hacking around different techs, you can find me taking photos for my instagram <a href="https://www.instagram.com/kxvn.lx/" target="_blank" rel="noreferrer">kxvn.lx</a>.</p>
                    </div>

                    <div style={{ marginBottom: '2em' }}>
                        <h2 style={{ marginBottom: '0.8em' }}>Projects</h2>
                        <ProjectWrapper>
                            <h3>NookNook: Companion for ACNH</h3>
                            <p>Powerful gesture-based Companion app for Animal Crossing: New Horizons.</p>
                            <ul>
                                <li><a href="https://apps.apple.com/au/app/nooknook-companion-for-acnh/id1510282831" target="_blank" rel="noreferrer">Download on the  app store</a></li>
                            </ul>
                        </ProjectWrapper>

                        <ProjectWrapper>
                            <h3>Kontax Cam</h3>
                            <p>Open source instant camera hybrid with custom effects and filters for photographers, by photographers.</p>
                            <ul>
                                <li><a href="https://github.com/kxvn-lx/Kontax-Cam" target="_blank" rel="noreferrer">View on github</a></li>
                                <li><a href="https://kontaxcam.netlify.app" target="_blank" rel="noreferrer">Visit the website</a></li>
                            </ul>
                        </ProjectWrapper>

                        <ProjectWrapper>
                            <h3>Spendt</h3>
                            <p>Dead simple and minimalistic spending tracker built with React, on top of Apple's Human Interface Guidelines.</p>
                            <ul>
                                <li><a href="https://spendt.netlify.app" target="_blank" rel="noreferrer">Visit the web app</a></li>
                            </ul>
                        </ProjectWrapper>


                        <ProjectWrapper>
                            <h3>Ghibliii</h3>
                            <p>Studio Ghibli movie database for iOS, iPadOS, and MacOS. 100% written in Swift.</p>
                            <ul>
                                <li><a href="https://github.com/kxvn-lx/Ghibliii" target="_blank" rel="noreferrer">View on github</a></li>
                            </ul>
                        </ProjectWrapper>

                    </div>
                </div>
            </ParentWrapper>

            <Footer />
        </div>
    </div>
)

export default AboutPage

// Styled components
const ParentWrapper = styled.div`
    width: 70vw;
    margin: 0 auto;
`

const ProjectWrapper = styled.div`
    padding: 1em;
    margin-top: 1em;
    background: #F2F2F7;
    border-radius: 10px;

    h3 {
        font-weight: 600;
    }
    p {
        color: #8E8E93;
    }
`