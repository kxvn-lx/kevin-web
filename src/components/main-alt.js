import React from "react"

const Main_alt = props => {
    return (
        <div className="main container main-alt">
            <h1>
                {props.title}
            </h1>
            <h3>
                {props.subtitle}
            </h3>
            <p>
                {props.body}
            </p>
        </div>
    )
}

export default Main_alt