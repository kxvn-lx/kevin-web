import { graphql, useStaticQuery, Link } from "gatsby";
import React from "react";

function Header() {
    const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

    return (
        <header className="py-10 mb-20">
            <Link to="/" className="text-black"><h1 className="font-bold">{site.siteMetadata.title}</h1></Link>

            <nav>
                <ul>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
