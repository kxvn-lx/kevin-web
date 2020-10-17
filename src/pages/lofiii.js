import React from "react";
import styled from 'styled-components'

import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "../components/Image"

function LofiiiPage() {
    return (
        <BgWrapper className="min-h-screen w-full overflow-auto">
            <Layout>
                <SEO
                    keywords={[`lofiii`, `lofi`, `lofi hiphop`, `lofi hip hop`, `lofi livestream`, `lofi hiphop livestream`, `chilledcow`]}
                    title="Lofiii"
                />

                <div className="text-center">
                    <h1 className="text-3xl font-semibold">lofiii for MacOS</h1>
                    <h4 className="text-lg">Chilledcow's lofi hiphop livestream straight from your mac - natively.</h4>

                    {/* download and support */}
                    <div className="my-10 inline-block">
                        <a className="mx-4 p-4 rounded-full bg-black text-white" href="./lofiii.zip" download>Download</a>
                        <a className="mx-4" href="https://paypal.me/kevinlaminto?locale.x=en_AU">Donate on Paypal</a>
                    </div>

                    <Image imageName="lofiii.png" className="mt-10 rounded-lg shadow-xl" />
                </div>

                <div className="mt-20">
                    <h4 className="text-3xl font-semibold text-center">Why?</h4>

                    {/* features grid */}
                    <FeatureGrid className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div>
                            <h5>Simple and lightweight</h5>
                            <p>lofiii serves one purpose, serving you with the hottest lofi tracks from Chilledcow's lofi hiphop youtube <a href="https://www.youtube.com/watch?v=5qap5aO4i9A&ab_channel=ChilledCow" target="_blank" rel="noopener noreferrer">livestream</a>.</p>
                        </div>

                        <div>
                            <h5>Native for MacOS</h5>
                            <p>lofiii is built natively for MacOS. Therefore, more optimised and better performance for your machine. (Since this is a very small and lightweight software, the difference is very minimum)</p>
                        </div>

                        <div>
                            <h5>Increase performance</h5>
                            <p>Multiple browser tabs take a lot of resources to allocate. That's where lofiii comes. Being a native app and lightweight, it can just live in your dock whilst you browse that many tabs you open!</p>
                        </div>

                        <div>
                            <h5>Utilise the native controls</h5>
                            <p>Use the keyboard to pause, play or even increase/decrease volume. You can also minimise and maximise it as any other native app could do.</p>
                        </div>

                        <div>
                            <h5>Open sourced!</h5>
                            <p><a href="https://github.com/kxvn-lx/lofiii" target="_blank" rel="noopener noreferrer">here</a>'s the link if you want to check it on github or want to compile it yourself. You can also download the zipped precompiled version and move it to the application folder.</p>
                        </div>
                    </FeatureGrid>
                </div>

                {/* download and support */}
                <div className="my-40 text-center">
                    <a className="mx-4 p-4 rounded-full bg-black text-white" href="./lofiii.zip" download>Download</a>
                </div>

                <div className="w-full max-w-md">
                    <span>Photo by <a href="https://unsplash.com/@staticlaw?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Fabrizio Conti</a> on <a href="https://unsplash.com/s/photos/calm-nature?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
                    <p>If you think this small software helps you in a way, please consider donating as it helps me an indie dev a lot! ❤️</p>
                </div>
            </Layout>
        </BgWrapper>
    );
}

export default LofiiiPage;

const BgWrapper = styled.div`
    background: url(${require('../images/bg.jpg')}) no-repeat center center;
    background-size: cover;
`

const FeatureGrid = styled.div`
    div {
        backdrop-filter: blur(10px) saturate(1.5);
        border-radius: 0.5rem;
        padding: 1rem;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
    }
`