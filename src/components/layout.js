import PropTypes from 'prop-types'
import React from 'react'
import Footer from './Footer'

import Header from './header'

function Layout({ children }) {
    return (
        <div className='min-h-screen w-full mx-auto px-10 max-w-2xl tracking-wide'>
            <Header />

            <main className="flex-1">
                {children}
            </main>

            <Footer />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
