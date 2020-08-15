import React from 'react'
import "./popup.styles.scss"
import { payloadType } from '../../Redux/actions/actionTypes'
import { connect } from 'react-redux'
import { AppState } from '../../Redux/store'
import Button from '../button/Button'
import { bindActionCreators, Dispatch } from 'redux'
import { SHOWAction, HIDEAction } from '../../Redux/actions/statusAction'
interface PopopProps {
    show:boolean,
    heading:string,
    paragraph:string,


}
type Props = PopopProps & LinkStateProps & LinkDispatchProps;

const Popup:React.FC<Props> = (props: Props) => {
    console.log(props.show,"popup")
    // if(props.show){
    //     console.log(props.show,"true statment");
    //     display ="popup show"
    // }
    // else{
    //     console.log(props.show);

    //     console.log("omad");
    //      display=  "popup hide"
    // }
    const close=()=>{
        props.HIDEAction(false);
    }
    const RenderOption = () => {
        if(props.show){
            return <div className="popup show">

                <h1>{props.heading}</h1>
        <p>{props.paragraph}</p>
                <Button onclick={()=>close()}>close</Button>
            </div>
        }

        return <div className="popup hide"></div>
    }
    // console.log(display,"display");
    return (
       RenderOption()
    )
}
interface LinkStateProps {
    show : boolean;
}


interface LinkDispatchProps {
    SHOWAction : (status : boolean) => void;
    HIDEAction : (status : boolean) => void;
}


const mapDispatchToProps = (dispatch : Dispatch) : LinkDispatchProps => ({
    SHOWAction: bindActionCreators(SHOWAction, dispatch),
    HIDEAction: bindActionCreators(HIDEAction, dispatch)
});

const mapStateToProps = (state : AppState) : LinkStateProps => ({show: state.status.show});

export default connect(mapStateToProps,mapDispatchToProps)(Popup)
