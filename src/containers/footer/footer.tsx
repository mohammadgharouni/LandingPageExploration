import React from 'react'
import "./footer.styles.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faInstagramSquare} from '@fortawesome/free-brands-svg-icons'
import {faGooglePlus} from '@fortawesome/free-brands-svg-icons'
import Heading from "../../components/heading/Heading"
import {faPinterest} from '@fortawesome/free-brands-svg-icons'
const Footer:React.FunctionComponent = () => {
    return (
        <div>
            <div className="row">
                <div className="column">
                    <Heading>Rexon</Heading>
                    <p>copyright 2020</p>
                </div>
                <div className="column">
                    <Heading>portfolio</Heading>
                    <ul>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy</li>
                    </ul>
                </div>
                <div className="column">
                    <Heading>Blogging</Heading>
                    <ul>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy</li>
                    </ul>
                </div>
                <div className="column">
                    <Heading>followed by</Heading>

                    <FontAwesomeIcon className="icons" icon={faPinterest}/>
                    <FontAwesomeIcon className="icons" icon={faTwitter}/>
                    <FontAwesomeIcon className="icons" icon={faInstagramSquare}/>
                    <FontAwesomeIcon className="icons" icon={faGooglePlus}/>
                </div>
            </div>
        </div>
    )
}

export default Footer
