import React from 'react'
import styled from 'styled-components'

export default function FeatureView(props) {
    const { name, description, links } = props

    return (
        <React.Fragment>
            <h4 className="font-bold">{name}</h4>
            <p>{description}</p>
            <ul className='my-4'>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.url}>{link.name} →</a>
                    </li>
                ))}
            </ul>

            <Divider className='bg-gray-300' />
        </React.Fragment>
    )
}

const Divider = styled.div`
    height: 1px;
    width: 100%;
`
