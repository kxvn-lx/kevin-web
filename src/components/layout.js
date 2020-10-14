import PropTypes from "prop-types";
import React from "react";
import styled from 'styled-components'
import Footer from "./Footer";

import Header from "./header";

function Layout({ children }) {
    return (
        <div className="min-h-screen font w-full max-w-5xl mx-auto px-10">
            <Header />

            <MainWrapper>
                {children}
            </MainWrapper>

            <Footer />
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;

const MainWrapper = styled.main`
    h1, h2, h3, h4, h5, h6, p {
        margin-bottom: 1rem;
    }
`