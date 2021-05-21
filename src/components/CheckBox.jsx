import React from 'react'
import './../scss/blocks/checkbox.scss'

const Checkbox = (props) => {
    return (
        <>
            <input type={"checkbox"} className={props.className} id={props.id}/>
            <label htmlFor={props.id}>{props.label}</label>
        </>
    )
}

export default Checkbox