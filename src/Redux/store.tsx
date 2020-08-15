import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import statusReducer from "./reducers/statusReducer"

import { composeWithDevTools } from 'redux-devtools-extension';
 
export const rootReducer=combineReducers({
  status:statusReducer
});

export type AppState=ReturnType<typeof rootReducer>

  export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
    // other store enhancers if any
  ));
