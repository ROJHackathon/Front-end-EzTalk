import createReducer from '../helpers/createReducer.js';
import * as types from '../actions/types.js';

export const loggedInStatus = createReducer({}, {
    [types.SET_LOGGED_IN_STATE](state, action) {
        return action;
    }
});