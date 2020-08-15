import React from 'react'
import "./explain.styles.scss"
import GirlImg from "../../assets/img/twoWomen.jpg"
import Button from '../../components/button/Button'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStickyNote} from '@fortawesome/free-solid-svg-icons'
import Paragraph from '../../components/paragraph/paragraph'
import Heading from '../../components/heading/Heading'
import Picture from '../../components/picture/Picture'
import Popup from '../../components/popup/popup'
import {connect} from 'react-redux'
import {ConnectedProps} from 'react-redux'
import {AppState} from '../../Redux/store'
import {Dispatch, bindActionCreators} from 'redux'
import {payloadType} from '../../Redux/actions/actionTypes'
import {SHOWAction, HIDEAction} from '../../Redux/actions/statusAction'

interface ExplainProps {
    id?: string;
    color?: string;
}



type Props = ExplainProps & LinkStateProps & LinkDispatchProps;

const Explain : React.FC < Props > = (props) => {

    console.log(props.show,"**");
    return (

        <div className="Explain">
            <Popup heading="Fast, secure and convenient outcome" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod temporsed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod temporsed do eiusmod tempor."/>

            <div className="textContainer">
                <Heading>Fast, secure and convenient outcome</Heading>

                <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod temporsed do eiusmod tempor.
                </Paragraph>
                <div className="CustomButton">

                <Button onclick={()=>props.SHOWAction(true)}>Read More</Button>
       

                  
                </div>

            </div>

            <div className="imgContainer">

                <Picture src={GirlImg} alt="GirlImg"/>
                <div className="credit">
                    <FontAwesomeIcon className="creditIcon" icon={faStickyNote}/>
                    <h3 >Check credit!</h3>
                    <h2>200$</h2>
                </div>

            </div>

        </div>
    )
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

export default connect(mapStateToProps,mapDispatchToProps)(Explain)

