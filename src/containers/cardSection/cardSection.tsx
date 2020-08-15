import React from 'react'
import Card from "../../components/card/card";
import "./cardSection.styles.scss"
import Heading from '../../components/heading/Heading';


const CardSection :React.FC = () => {
    return (

        <div className="cardSection">

            <Heading>We are commited to develop a better patients in mind by following our services</Heading>

            <div className="response">
                <Card
                    cardText="this is the best way to get to the point"
                    cardTitle="Relaxation Create on mind"
                    name="mic"/>
                <Card
                    cardText="this is the best way to get to the point"
                    cardTitle="Relaxation Create on mind"
                    name="paint"/>
                <Card
                    cardText="this is the best way to get to the point"
                    cardTitle="Relaxation Create on mind"
                    name="settings"/>

                <Card
                    cardText="this is the best way to get to the point"
                    cardTitle="Relaxation Create on mind"
                    name="settings"/>

            </div>
        </div>
    )
}

export default CardSection
