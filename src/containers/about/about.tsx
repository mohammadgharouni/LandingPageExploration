import React from 'react'
import girl from "../../assets/img/girl.jpg"
import lake from "../../assets/img/lake.jpg"
import guyWphone from "../../assets/img/guyWphone.jpg"
import "./about.styles.scss"
import Paragraph from '../../components/paragraph/paragraph'
import Heading from '../../components/heading/Heading'
import Picture from '../../components/picture/Picture'

const About :React.FC = (props) => {
    return (
        <div className="about">

            <div className="imageContainer">
                <Picture src={girl} alt="girl"/>
                <Picture src={lake} alt="lake"/>
                <Picture src={guyWphone} alt="guy"/>
            </div>

            <div className="textContainer">

                <Heading>
                    we treat based on real result
                </Heading>

                <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam</Paragraph>
                <hr/>
            </div>
        </div>
    )
}

export default About
