import React from 'react'
import FeatureView from '../components/FeatureView'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { selectedProjects } from '../datas/selectedProjects'

export default function about() {
    return (
        <Layout>
            <SEO
                keywords={[
                    `kevin laminto`,
                    `kevin laminto developer`,
                    `iOS developer`,
                    `software developer`,
                ]}
                title='About'
            />

            <section className='p-spacing'>
                <h1 className='mb-20'>About</h1>
                <p>
                    I'm a recent graduate of Monash University with a bachelor
                    of IT in Software Development. I love building products with
                    a clean user interface whilst having impeccable value.
                </p>
                <p>
                    I'm interested in building mobile apps (iOS) and web apps.
                    Hence the technologies that I'm using quite a lot are React,
                    GatsbyJS, NextJS, Styled components, TailwindCSS, and
                    GraphQL for the web - Swift and SwiftUI for iOS.
                </p>
                <p>
                    When I'm not hacking around different techs, I enjoy doing{' '}
                    <a
                        href='https://www.kevinlaminto.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        photography
                    </a>
                    , and listening/going to metal concerts.
                </p>
                <a href='./Resume.pdf' download>
                    Download resume
                </a>
            </section>

            <section className='mt-20'>
                <h2>Selected works & projects</h2>
                <ul>
                    {selectedProjects.map((item) => (
                        <li key={item.name} className='my-10'>
                            <FeatureView {...item} />
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}
