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

                <div className="w-full max-w-md text-center mx-auto">
                    <p>If you think this small software helps you in a way, please consider donating as it helps me, an indie dev a lot! ❤️</p>
                </div>
            </Layout>
        </BgWrapper>
    );
}

export default LofiiiPage;

const BgWrapper = styled.div`
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4d5eXlzc3OLi4ubm5uVlZWPj4+NjY19fX2JiYl/f39ra2uRkZGZmZlpaWmXl5dvb29xcXGTk5NnZ2c8TV1mAAAAG3RSTlNAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAvEOwtAAAFVklEQVR4XpWWB67c2BUFb3g557T/hRo9/WUMZHlgr4Bg8Z4qQgQJlHI4A8SzFVrapvmTF9O7dmYRFZ60YiBhJRCgh1FYhiLAmdvX0CzTOpNE77ME0Zty/nWWzchDtiqrmQDeuv3powQ5ta2eN0FY0InkqDD73lT9c9lEzwUNqgFHs9VQce3TVClFCQrSTfOiYkVJQBmpbq2L6iZavPnAPcoU0dSw0SUTqz/GtrGuXfbyyBniKykOWQWGqwwMA7QiYAxi+IlPdqo+hYHnUt5ZPfnsHJyNiDtnpJyayNBkF6cWoYGAMY92U2hXHF/C1M8uP/ZtYdiuj26UdAdQQSXQErwSOMzt/XWRWAz5GuSBIkwG1H3FabJ2OsUOUhGC6tK4EMtJO0ttC6IBD3kM0ve0tJwMdSfjZo+EEISaeTr9P3wYrGjXqyC1krcKdhMpxEnt5JetoulscpyzhXN5FRpuPHvbeQaKxFAEB6EN+cYN6xD7RYGpXpNndMmZgM5Dcs3YSNFDHUo2LGfZuukSWyUYirJAdYbF3MfqEKmjM+I2EfhA94iG3L7uKrR+GdWD73ydlIB+6hgref1QTlmgmbM3/LeX5GI1Ux1RWpgxpLuZ2+I+IjzZ8wqE4nilvQdkUdfhzI5QDWy+kw5Wgg2pGpeEVeCCA7b85BO3F9DzxB3cdqvBzWcmzbyMiqhzuYqtHRVG2y4x+KOlnyqla8AoWWpuBoYRxzXrfKuILl6SfiWCbjxoZJUaCBj1CjH7GIaDbc9kqBY3W/Rgjda1iqQcOJu2WW+76pZC9QG7M00dffe9hNnseupFL53r8F7YHSwJWUKP2q+k7RdsxyOB11n0xtOvnW4irMMFNV4H0uqwS5ExsmP9AxbDTc9JwgneAT5vTiUSm1E7BSflSt3bfa1tv8Di3R8n3Af7MNWzs49hmauE2wP+ttrq+AsWpFG2awvsuOqbipWHgtuvuaAE+A1Z/7gC9hesnr+7wqCwG8c5yAg3AL1fm8T9AZtp/bbJGwl1pNrE7RuOX7PeMRUERVaPpEs+yqeoSmuOlokqw49pgomjLeh7icHNlG19yjs6XXOMedYm5xH2YxpV2tc0Ro2jJfxC50ApuxGob7lMsxfTbeUv07TyYxpeLucEH1gNd4IKH2LAg5TdVhlCafZvpskfncCfx8pOhJzd76bJWeYFnFciwcYfubRc12Ip/ppIhA1/mSZ/RxjFDrJC5xifFjJpY2Xl5zXdguFqYyTR1zSp1Y9p+tktDYYSNflcxI0iyO4TPBdlRcpeqjK/piF5bklq77VSEaA+z8qmJTFzIWiitbnzR794USKBUaT0NTEsVjZqLaFVqJoPN9ODG70IPbfBHKK+/q/AWR0tJzYHRULOa4MP+W/HfGadZUbfw177G7j/OGbIs8TahLyynl4X4RinF793Oz+BU0saXtUHrVBFT/DnA3ctNPoGbs4hRIjTok8i+algT1lTHi4SxFvONKNrgQFAq2/gFnWMXgwffgYMJpiKYkmW3tTg3ZQ9Jq+f8XN+A5eeUKHWvJWJ2sgJ1Sop+wwhqFVijqWaJhwtD8MNlSBeWNNWTa5Z5kPZw5+LbVT99wqTdx29lMUH4OIG/D86ruKEauBjvH5xy6um/Sfj7ei6UUVk4AIl3MyD4MSSTOFgSwsH/QJWaQ5as7ZcmgBZkzjjU1UrQ74ci1gWBCSGHtuV1H2mhSnO3Wp/3fEV5a+4wz//6qy8JxjZsmxxy5+4w9CDNJY09T072iKG0EnOS0arEYgXqYnXcYHwjTtUNAcMelOd4xpkoqiTYICWFq0JSiPfPDQdnt+4/wuqcXY47QILbgAAAABJRU5ErkJggg==);
    background-color: rgb(252,252,249);
`

const FeatureGrid = styled.div`
    div {
        backdrop-filter: blur(10px) saturate(1.5);
        border-radius: 0.5rem;
        padding: 1rem;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
    }
`