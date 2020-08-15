import React from 'react'
import "./Input.styles.scss"
interface InputProps {
    type:string
    placeholder:string
}
const Input :React.FC<InputProps> = (props) => {
    return (
        <div>
            <input type={props.type} placeholder={props.placeholder}></input>

        </div>
    )
}

export default Input
