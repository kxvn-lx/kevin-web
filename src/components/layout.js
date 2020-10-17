import PropTypes from "prop-types";
import React from "react";
import Footer from "./Footer";

import Header from "./header";

function Layout({ children }) {
    return (
        <div className="min-h-screen font w-full max-w-5xl mx-auto px-10">
            <Header />

            <div>
                {children}
            </div>

            <Footer />
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;