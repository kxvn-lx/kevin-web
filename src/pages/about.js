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
                <ContentWrapper>
                    <div style={{ marginBottom: '2em' }}>
                        <AboutImageWrapper>
                            <img src={require('../images/kevin.jpg')} alt="kevin profile" />
                        </AboutImageWrapper>

                        <p>Hello.</p>
                        <p>
                            I'm a recent graduate of Monash University with a bachelor of IT in Software Development.
                            I love building products with a clean user interface whilst having impeccable value.
                        </p>

                        <p>
                            I'm interested in building mobile apps (iOS) and web apps.
                            Hence the technologies that I'm using quite a lot are React, Gatsby, Styled components, TailwindCSS, and GraphQL for the web - Swift and SwiftUI for iOS.
                        </p>

                        <p>
                            When I'm not hacking around different techs, I enjoy doing <a className="colourful-a normal-link" href="https://www.instagram.com/kxvn.lx/" target="_blank" rel="noreferrer">photography</a>,
                            listening and going to metal concerts, and chill while watching a movie.
                        </p>
                    </div>

                    <div style={{ marginBottom: '5rem', marginTop: '7.5rem' }}>
                        <p>Selected works / projects</p>

                        <ProjectWrapper>
                            <CurrentWrapper className="pulse">Current</CurrentWrapper>
                            <h3>Kontax Cam</h3>
                            <p>Open source instant camera hybrid with custom effects and filters for photographers, by photographers.</p>
                            <ul>
                                <li><a href="https://apps.apple.com/app/kontax-cam/id1527110773" target="_blank" rel="noreferrer">Download on the  app store →</a></li>
                                <li><a href="https://kontax.cam" target="_blank" rel="noreferrer">Visit the website →</a></li>
                            </ul>
                        </ProjectWrapper>

                        <div className="divider"></div>

                        <ProjectWrapper>
                            <h3>Esper Satellites Imagery</h3>
                            <p>Designed and developed the landing page of the website</p>
                            <ul>
                                <li><a href="https://espersatellites.co" target="_blank" rel="noreferrer">View the website →</a></li>
                            </ul>
                        </ProjectWrapper>

                        <div className="divider"></div>

                        <ProjectWrapper>
                            <h3>My photography portfolio website</h3>
                            <p>Designed and developed my own photography portfolio website using React, TailwindCSS, and contentful integration. Opensourced and can be accessed via github.</p>
                            <ul>
                                <li><a href="https://www.kevinlaminto.com" target="_blank" rel="noreferrer">Visit the website →</a></li>
                            </ul>
                        </ProjectWrapper>

                        <div className="divider"></div>

                        <ProjectWrapper>
                            <h3>sMasheDe</h3>
                            <p>Developed the landing page with React and Tailwind, integrated with Mailchimp.</p>
                            <ul>
                                <li><a href="https://smashe.de" target="_blank" rel="noreferrer">Visit the website →</a></li>
                            </ul>
                        </ProjectWrapper>

                        <div className="divider"></div>

                        <ProjectWrapper>
                            <h3>Ghibliii</h3>
                            <p>Studio Ghibli movie database for iOS, iPadOS, and MacOS. 100% written in Swift.</p>
                            <ul>
                                <li><a href="https://github.com/kxvn-lx/Ghibliii" target="_blank" rel="noreferrer">View on github →</a></li>
                            </ul>
                        </ProjectWrapper>

                        <div className="divider"></div>

                        <ProjectWrapper>
                            <h3>NookNook: Companion for ACNH</h3>
                            <p>Powerful gesture-based Companion app for Animal Crossing: New Horizons.</p>
                            <ul>
                                <li><a href="https://apps.apple.com/au/app/nooknook-companion-for-acnh/id1510282831" target="_blank" rel="noreferrer">Download on the  app store →</a></li>
                            </ul>
                        </ProjectWrapper>
                    </div>

                    <div style={{ marginBottom: '5rem', marginTop: '7.5rem' }}>
                        <p>Selected designs</p>

                        <ProjectWrapper>
                            <img src={require('../images/vsco-mac.png')} alt="VSCO for MAC design" />
                            <h3>VSCO for MacOS concept (Sep 2020)</h3>
                        </ProjectWrapper>
                    </div>
                </ContentWrapper>
            </ParentWrapper>

            <Footer />
        </div>
    </div>
)

export default AboutPage

// Styled components
const AboutImageWrapper = styled.div`
    margin-bottom: 2rem;
    

    @media(max-width: 768px) {
        text-align: center;
    }
`

const ContentWrapper = styled.div`
    margin-top: 10rem;
    max-width: 450px;

`

const ParentWrapper = styled.div`
    width: 70vw;
    margin: 0 auto;

    @media(max-width: 768px) {
        width: 90vw;
    }
`

const ProjectWrapper = styled.div`
    padding: 1em 0;
    margin-top: 1em;

    h3 {
        font-size: 1rem;
        font-weight: 400;
    }

    p {
        opacity: .75;
    }
`

const CurrentWrapper = styled.span`
    font-size: 0.6rem;
    border: 1px solid #F06449;
    padding: 5px 10px;
    border-radius: 5px;
    color: #F06449;
    text-align: center;
    margin-bottom: 0.5rem;
    display: inline-block;
`