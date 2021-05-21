import React from 'react'
import './../scss/blocks/radio.scss'

const RadioButton = (props) => {
    return (
        <div className={"radio-container"}>
            <input type={"radio"} className={props.className}
                   id={props.id} name={props.name} value={props.value}
                   defaultChecked={props.checked}/>
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    )
}

export default RadioButton