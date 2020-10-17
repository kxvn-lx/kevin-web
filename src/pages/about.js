import React from 'react'
import FeatureView from '../components/FeatureView';

import Layout from "../components/layout"
import SEO from "../components/seo";

export default function about() {
    return (
        <Layout>
            <SEO
                keywords={[`kevin laminto`, `kevin laminto developer`, `iOS developer`, `software developer`]}
                title="About"
            />

            <section className="max-w-md my-20 p-spacing">
                <p>I'm a recent graduate of Monash University with a bachelor of IT in Software Development. I love building products with a clean user interface whilst having impeccable value.</p>
                <p>I'm interested in building mobile apps (iOS) and web apps. Hence the technologies that I'm using quite a lot are React, GatsbyJS, NextJS, Styled components, TailwindCSS, and GraphQL for the web - Swift and SwiftUI for iOS.</p>
                <p>When I'm not hacking around different techs, I enjoy doing <a href="https://www.kevinlaminto.com/" target="_blank" rel="noopener noreferrer">photography</a>, and listening/going to metal concerts.</p>
                <a href="./Resume.pdf" download>Download resume</a>
            </section>

            <section className="my-20">
                <h2>Selected works & projects</h2>
                <ul>
                    {SelectedDatasource.map(item => (
                        <li key={item.name} className="my-10">
                            <FeatureView name={item.name} desc={item.desc} links={item.links} />
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}

const SelectedDatasource = (
    [
        {
            name: `lofiii`,
            desc: `ChilledCow's lofi hiphop livestream straight from your mac - natively.`,
            links: [
                {
                    name: `View`,
                    url: `/lofiii`
                }
            ]
        },
        {
            name: `Kontax Cam`,
            desc: `Open source instant camera hybrid app for film and digital photographers.`,
            links: [
                {
                    name: `Download on the  app store`,
                    url: `https://apps.apple.com/app/kontax-cam/id1527110773`
                },
                {
                    name: `Visit the website`,
                    url: `https://kontax.cam/`
                }
            ]
        },
        {
            name: `Personal photography portfolio`,
            desc: `Designed and developed my own photography portfolio website using React (GatsbyJS), TailwindCSS, and contentful integration.`,
            links: [
                {
                    name: `Visit the website`,
                    url: `https://www.kevinlaminto.com/`
                }
            ]
        },
        {
            name: `Esper Satellites Imagery`,
            desc: `Designed and developed the landing page of the company`,
            links: [
                {
                    name: `Visit the website`,
                    url: `https://espersatellites.co/`
                }
            ]
        },
        {
            name: `sMasheDe`,
            desc: `Developed the landing page with React and Tailwind, integrated with Mailchimp.`,
            links: [
                {
                    name: `Visit the website`,
                    url: `https://smashe.de/`
                }
            ]
        },
        {
            name: `Ghibliii`,
            desc: `Studio Ghibli movie database for iOS, iPadOS, and MacOS. 100% written in Swift. Utilise iCloud Sync, native cross-platform, and more.`,
            links: [
                {
                    name: `View on Github`,
                    url: `https://github.com/kxvn-lx/Ghibliii`
                }
            ]
        },
        {
            name: `NookNook: Companion for ACNH`,
            desc: `Powerful gesture-based Companion app for Animal Crossing: New Horizons.`,
            links: [
                {
                    name: `Download on the  app store`,
                    url: `https://apps.apple.com/au/app/nooknook-companion-for-acnh/id1510282831`
                }
            ]
        }
    ]
)
