import {combineReducers} from "redux";
import * as LoggedOut from './loggedOut.js';

export default combineReducers(Object.assign(
    LoggedOut,
))