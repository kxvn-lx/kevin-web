import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function NotFoundPage() {
    return (
        <Layout>
            <SEO title="404: Not found" />

            <div className="max-w-md">
                <img className="w-64" src={require('../images/lost.jpeg')} alt="lost meme"  />
                <h2>You lost my dude?</h2>
                <p>The page does not exist. Off you go 👩‍🦽</p>
            </div>
        </Layout>
    );
}

export default NotFoundPage;
