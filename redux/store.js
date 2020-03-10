import {applyMiddleware, combineReducers, createStore} from "redux";
import photoReducer from './photoReducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  photoPage: photoReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));


export default store;

