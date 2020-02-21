import {compose, createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers'


function configureStore(initialState) {
    const enhancer = compose(
        applyMiddleware(
            thunkMiddleware,
        )
    );

    return createStore(reducer, initialState, enhancer);

}

export default configureStore({})