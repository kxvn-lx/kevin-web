import React from 'react'
import styled from 'styled-components'

export default function FeatureView(props) {
    const name = props.name
    const description = props.desc
    const links = props.links

    return (
        <div className="max-w-md">
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
        </div>
    )
}

const Divider = styled.div`
    height: 1px;
    width: 100%;
`