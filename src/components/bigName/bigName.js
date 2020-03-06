import React from 'react'
import "../bigName/bigName.scss"

const bigName = props => (
    <div className="container">
    <p className="coloured-text big-name">
        {props.name}
    </p>
</div>
);

export default bigName
