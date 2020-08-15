import React from 'react'
import "./news.styles.scss"
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'
import Heading from '../../components/heading/Heading'

const News:React.FC = () => {
    return (
        <div className="News">
            <Heading>Add with our best newsportal and news letter</Heading>
            <div className="emailContainer">

                <Input type="email" placeholder="Enter your email Address"></Input>
                <Button>Send</Button>
            </div>
        </div>
    )
}

export default News
