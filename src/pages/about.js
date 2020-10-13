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
                        <Circle style={{ marginBottom: '2em' }} />
                        <h3>Hello</h3>
                        <p>
                            I'm a recent graduate of Monash University with a bachelor of IT in Software Development.
                            I love building products with a clean user interface whilst having impeccable value.
                        </p>

                        <p>
                            I'm interested in building mobile apps (iOS) and web apps.
                            Hence the technologies that I'm using quite a lot are React, GatsbyJS, NextJS, Styled components, TailwindCSS, and GraphQL for the web - Swift and SwiftUI for iOS.
                        </p>

                        <p>
                            When I'm not hacking around different techs, I enjoy doing <a className="colourful-a normal-link" href="https://www.kevinlaminto.com" target="_blank" rel="noreferrer">photography</a>,
                            listening and going to metal concerts, and chill while watching a movie.
                        </p>
                    </div>

                    <div style={{ marginBottom: '5rem', marginTop: '7.5rem' }}>
                        <h3>Selected works / projects</h3>

                        <ProjectWrapper>
                            <CurrentWrapper className="pulse">Current</CurrentWrapper>
                            <h4>Kontax Cam</h4>
                            <p>Open source instant camera hybrid app for film and digital photographers.</p>
                            <ul>
                                <li><a href="https://apps.apple.com/app/kontax-cam/id1527110773" target="_blank" rel="noreferrer">Download on the  app store →</a></li>
                                <li><a href="https://kontax.cam" target="_blank" rel="noreferrer">Visit the website →</a></li>
                            </ul>
                        </ProjectWrapper>

                        <ProjectWrapper>
                            <h4>Personal photography portfolio</h4>
                            <p>Designed and developed my own photography portfolio website using React (GatsbyJS), TailwindCSS, and contentful integration.</p>
                            <ul>
                                <li><a href="https://www.kevinlaminto.com" target="_blank" rel="noreferrer">Visit the website →</a></li>
                            </ul>
                        </ProjectWrapper>

                        <ProjectWrapper>
                            <h4>Esper Satellites Imagery</h4>
                            <p>Designed and developed the landing page of the company</p>
                            <ul>
                                <li><a href="https://espersatellites.co" target="_blank" rel="noreferrer">View the website →</a></li>
                            </ul>
                        </ProjectWrapper>

                        <ProjectWrapper>
                            <h4>sMasheDe</h4>
                            <p>Developed the landing page with React and Tailwind, integrated with Mailchimp.</p>
                            <ul>
                                <li><a href="https://smashe.de" target="_blank" rel="noreferrer">Visit the website →</a></li>
                            </ul>
                        </ProjectWrapper>

                        <ProjectWrapper>
                            <h3>Ghibliii</h3>
                            <p>Studio Ghibli movie database for iOS, iPadOS, and MacOS. 100% written in Swift.</p>
                            <ul>
                                <li><a href="https://github.com/kxvn-lx/Ghibliii" target="_blank" rel="noreferrer">View on github →</a></li>
                            </ul>
                        </ProjectWrapper>

                        <ProjectWrapper>
                            <h4>NookNook: Companion for ACNH</h4>
                            <p>Powerful gesture-based Companion app for Animal Crossing: New Horizons.</p>
                            <ul>
                                <li><a href="https://apps.apple.com/au/app/nooknook-companion-for-acnh/id1510282831" target="_blank" rel="noreferrer">Download on the  app store →</a></li>
                            </ul>
                        </ProjectWrapper>
                    </div>

                    <div style={{ marginBottom: '5rem', marginTop: '7.5rem' }}>
                        <h3>Selected designs</h3>

                        <ProjectWrapper>
                            <img src={require('../images/vsco-mac.png')} alt="VSCO for MAC design" />
                            <h4>VSCO for MacOS concept (Sep 2020)</h4>
                        </ProjectWrapper>
                    </div>
                </ContentWrapper>
            </ParentWrapper>

            <Footer />
        </div>
    </div>
)

export default AboutPage

const Circle = styled.div`
    width: 1rem;
    height: 1rem;
    background: white;
    border-radius: 999px;
`

// Styled components
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
    margin-top: 3rem;

    h4 {
        font-weight: 500;
        margin: 0;
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