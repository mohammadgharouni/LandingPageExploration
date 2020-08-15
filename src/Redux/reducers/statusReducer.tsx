import * as actionTypes from '../actions/actionTypes';



  const initialState:actionTypes.payloadType= {
    show: false
};

const StatusReducer = (state = initialState, action:actionTypes.Status):actionTypes.payloadType => {
    switch (action.type) {
      case actionTypes.SHOW:
        return{
            ...state,
            show:action.payload

        }

        case actionTypes.HIDE:
            return{
                ...state,
                show:action.payload

            }

      default:
        return state;
    }
  };

  export default StatusReducer
  