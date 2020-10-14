import React from 'react'
import styled from 'styled-components'

export default function FeatureView(props) {
    const name = props.name
    const description = props.desc
    const links = props.links

    return (
        <FeatureWrapper className="max-w-md">
            <h4>{name}</h4>
            <p>{description}</p>
            <ul className="my-4">
                {links.map(link => (
                    <li key={link.name}>
                        <a href={link.url}>{link.name} →</a>
                    </li>
                ))}
            </ul>

            <Divider className="bg-gray-200" />
        </FeatureWrapper>
    )
}

const FeatureWrapper = styled.div`
    h1,h2,h3,h4,h5,h6,p {
        margin: 0;
    }
`

const Divider = styled.div`
    height: 1px;
    width: 100%;
`