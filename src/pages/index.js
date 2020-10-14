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

            <div className="max-w-md">
                <Circle />
                <h2>Hi, i'm Kevin — Software developer living in Melbourne, Australia.</h2>
                <p>Currently building <a href="https://kontax.cam" target="_blank" rel="noopener noreferrer">Kontax Cam</a> in my spare time, and a front-end developer at <a href="https://espersatellites.co" target="_blank" rel="noopener noreferrer">Esper Satellites Imagery</a> startup.</p>
                <p>Looking for casual, part-time, or full-time developer position.</p>
            </div>
        </Layout>
    );
}

export default IndexPage;

const Circle = styled.div`
    width: 1rem;
    margin-bottom: 1rem;
    height: 1rem;
    background: black;
    border-radius: 999px;
`