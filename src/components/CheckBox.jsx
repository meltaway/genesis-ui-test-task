import React from 'react'
import './../scss/blocks/checkbox.scss'

const Checkbox = (props) => {
    return (
        <input type={"checkbox"} className={props.classname} id={props.id}/>
    )
}

export default Checkbox