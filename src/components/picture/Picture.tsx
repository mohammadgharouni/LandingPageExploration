import React from 'react'
import "./Picture.styles.scss"
interface PictureProps {
    src:string
    alt:string
}
const Picture :React.FC<PictureProps> = (props) => {

    return (
        <div>
            <img className={` ${props.alt} Picture `} src={props.src} alt={props.alt}/>

        </div>
    )
}

export default Picture
