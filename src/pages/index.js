import React from "react";
import styled from 'styled-components'

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
    return (
        <Layout>
            <SEO
                keywords={[`kevin laminto`, `kevin laminto developer`, `iOS developer`, `software developer`]}
                title="Home"
            />

            <div className="max-w-md p-spacing h-spacing">
                <Circle />
                <h2 className="text-2xl font-semibold">Hi, i'm Kevin — Software developer living in Melbourne, Australia.</h2>
                <p>Creator of <a href="https://kontax.cam" target="_blank" rel="noopener noreferrer">Kontax Cam</a>. Part time front-end and iOS Engineer at <a href="https://espersatellites.co" target="_blank" rel="noopener noreferrer">Esper Satellites Imagery</a> startup. Taking photos at <a href="https://www.kevinlaminto.com" target="_blank" rel="noopener noreferrer">www.kevinlaminto.com</a></p>
                <p>Looking for full-time developer position.</p>
            </div>
        </Layout>
    );
}

export default IndexPage;

const Circle = styled.div`
    width: 1rem;
    margin-bottom: 2rem;
    height: 1rem;
    background: black;
    border-radius: 999px;
`