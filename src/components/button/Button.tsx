import React from 'react'
import "./Button.styles.scss"
interface ButtonProps {
    children : string
    onclick?:()=>void
}
const Button:React.FC<ButtonProps>= (props) => {
    return (

        <button onClick={props.onclick} type="button" className="myButton">{props.children}</button>
    )
}

export default Button
