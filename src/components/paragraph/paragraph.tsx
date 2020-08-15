import React from 'react'
import "./paragraph.styles.scss"

interface ParagraphProps {
    children : string,
    
}
const Paragraph :React.FC<ParagraphProps> = (props) => {
    return (
        <p className="Paragraph">{props.children}</p>
    )
}

export default Paragraph
