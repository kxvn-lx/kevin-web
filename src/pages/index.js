import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

function IndexPage() {
    return (
        <Layout>
            <SEO
                keywords={[
                    `kevin laminto`,
                    `kevin laminto developer`,
                    `iOS developer`,
                    `software developer`,
                    `web developer`,
                ]}
                title='Home'
            />

            <section className='p-spacing h-spacing'>
                <img className='w-40' src={require('../images/headshot.png')} />
                <h1 className='mb-20'>
                    Hi, i'm Kevin — <br />
                    Software developer living in Melbourne, Australia.
                </h1>

                <p>
                    Part time front-end and iOS Engineer at{' '}
                    <a
                        href='https://espersatellites.co'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Esper Satellites Imagery
                    </a>{' '}
                    startup. Taking photos at{' '}
                    <a
                        href='https://www.kevinlaminto.com'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        www.kevinlaminto.com
                    </a>
                </p>
                <p>Looking for full-time developer position.</p>
            </section>
        </Layout>
    )
}

export default IndexPage
