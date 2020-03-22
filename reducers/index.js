import React from 'react';
import { combineReducers } from 'redux';
import { LOGIN, SIGNUP, UPDATE_EMAIL, UPDATE_NAME, UPDATE_PASSWORD, UPDATE_ALERTS } from '../actions/user';

const user = (state = {}, action) => {
    switch(action.type) {
        case LOGIN:
            return action.payload;
        case SIGNUP:
            return action.payload;
        case UPDATE_EMAIL:
            return { ...state, email: action.payload }
        case UPDATE_PASSWORD:
            return { ...state, password: action.payload }
        case UPDATE_NAME:
            return { ...state, username: action.payload }
        case UPDATE_ALERTS:
            return { ...state, alerts: action.payload }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    user
});

export default rootReducer;


