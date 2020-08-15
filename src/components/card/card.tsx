import React from 'react'
import "./card.styles.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMicrophone} from '@fortawesome/free-solid-svg-icons'
import {faPalette} from '@fortawesome/free-solid-svg-icons'
import {faCog} from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
interface CardProps {
    name : string,
    cardTitle : string,
    cardText : string,
}
const Card:React.FC<CardProps> = (props) => {

    var myIcon;
    if (props.name === "mic") {
        myIcon = faMicrophone;
    } else if (props.name === "paint") {
        myIcon = faPalette
    } else if (props.name === "settings") {
        myIcon = faCog

    }
    return (
        <div className="card">
            <FontAwesomeIcon className="icon" icon={myIcon}/>
            <h2 className="cardTitle">{props.cardTitle}</h2>
            <p className="cardText">{props.cardText}</p>

        </div>
    )
}

export default Card
