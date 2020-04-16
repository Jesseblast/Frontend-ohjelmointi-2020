// 'export const' and 'export default'

import React from "react"

const TextToUpperCase = (props) => {
    return (
        <p>{ props.text.toUpperCase() }</p>
    )
}

export const ExportExample = (props) => {
    return (
        <div>
            <TextToUpperCase text={ props.text } />
        </div>
    )
}

export default function ExportDefaultExample (props) {
    return (
        <div>
            <TextToUpperCase text={ props.text } />
        </div>
    )
}