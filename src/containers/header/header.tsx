import React, {Component} from 'react'
import "./header.styles.scss"
import Button from '../../components/button/Button'
import image from "../../assets/img/lake.jpg"
import Input from '../../components/input/Input'
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons'
import {faQuoteRight} from '@fortawesome/free-solid-svg-icons'
import Paragraph from '../../components/paragraph/paragraph'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import DropDown from '../../components/dropdown/DropDown'
import Popup from "../../components/popup/popup"
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { SHOWAction, HIDEAction } from '../../Redux/actions/statusAction'
import { AppState } from '../../Redux/store'


type MyProps = {
    // using `interface` is also ok

};
  type MyState = {
    showMenu: boolean; // like this
  };

  type Props = MyProps & LinkStateProps & LinkDispatchProps;

  class Header extends React.Component<Props, MyState> {
    state:MyState = {
        showMenu: false
        
    }
    
    menuClicked = () => {
        console.log("menu clicked");
        if (this.state.showMenu===false) {
            this.setState({showMenu: true})
        } else {
            this.setState({showMenu: false})
            
        }
        
    };
    
    render() {
        
        console.log(this.props.show , "from header");
        return (

            <div className="Header">
                <div className="menu">

                    <FontAwesomeIcon className="menuIcon" onClick={this.menuClicked} icon={faBars}/>
                    <DropDown showMenu={this.state.showMenu}/>

                </div>
                <nav className="navbar">

                    <ul>
                        <li>
                            <a className="tag" href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Portfolio</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>

                    </ul>
                </nav>
                <Button>Register</Button>

                <div className="main">

                    <Popup heading="Email recieved successfully" paragraph="we'll get in touch with you"/>

                    <div className="imageContainer">
                        <img src={image} alt="imagee"/>
                        <div className="textBox">

                            <FontAwesomeIcon className="iconLeft" icon={faQuoteLeft}/>
                            <Paragraph>This helps me to create a happy life ever in the society</Paragraph>
                            <FontAwesomeIcon className="iconRight" icon={faQuoteRight}/>

                        </div>
                    </div>

                    <div className="textContainer">
                        <h1 className="title">Best Outcome on waiting</h1>
                        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa vitae tortor .</Paragraph>
                        <h4>Get access easily?</h4>

                        <form  className="email">

                            <Input type="email" placeholder="Enter your email Address"/>
                            <Button onclick={()=>this.props.SHOWAction(true)} >Sign up</Button>
                        </form>

                    </div>
                </div>

            </div>
        );
    }

}

interface LinkDispatchProps {
    SHOWAction : (status : boolean) => void;
    HIDEAction : (status : boolean) => void;
}

interface LinkStateProps {
    show : boolean;
}

const mapStateToProps = (state : AppState) : LinkStateProps => ({show: state.status.show});


const mapDispatchToProps = (dispatch : Dispatch) : LinkDispatchProps => ({
    SHOWAction: bindActionCreators(SHOWAction, dispatch),
    HIDEAction: bindActionCreators(HIDEAction, dispatch)
});

export default connect(mapStateToProps,mapDispatchToProps)(Header)


