import React from 'react'
import "./Heading.styles.scss"
interface HeadingProps {
    children : string,

}
const Heading :React.FC<HeadingProps> = (props) => {
    return (
        <h1>{props.children}</h1>
    )
}

export default Heading
