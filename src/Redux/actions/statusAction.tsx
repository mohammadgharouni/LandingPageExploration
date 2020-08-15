
import * as actionTypes from '../actions/actionTypes';
// TypeScript infers that this function is returning SendMessageAction



export const SHOWAction=(status:boolean):actionTypes.AppActions =>({
    type: actionTypes.SHOW,
    payload: status,
  
})


export const HIDEAction=(status:boolean): actionTypes.AppActions  =>({
  type: actionTypes.HIDE,
  payload: status,

})
