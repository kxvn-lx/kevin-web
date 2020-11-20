import { graphql, useStaticQuery, Link } from 'gatsby'
import React from 'react'

function Header() {
    const { site } = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <header className='py-10 mb-20'>
            <nav>
                <ul className='flex'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='ml-4'>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
