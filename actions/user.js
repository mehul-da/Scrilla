import React from 'react';
import { Alert } from 'react-native';
import Parse from 'parse';

export const UPDATE_EMAIL = "UPDATE_EMAIL";
export const UPDATE_NAME = "UPDATE NAME";
export const UPDATE_PASSWORD = "UPDATE PASSWORD";
export const UPDATE_ALERTS = "UPDATE ALERTS";
export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";

export const login = () => {
    return async (dispatch, getState) => {
        try {

        } catch(e) {

        }
    }
}

export const signup = (user) => {
    return async (dispatch, getState) => {
        dispatch({ type: SIGNUP, payload: user });
    }
}

export const updateName = name => {
    return {
        type: UPDATE_NAME,
        payload: name
    }
}

export const updateAlerts = alerts => {
    return {
        type: UPDATE_ALERTS,
        payload: alerts
    }
}

export const updateEmail = email => {
    return {
        type: UPDATE_EMAIL,
        payload: email
    }
}

export const updatePassword = password => {
    return {
        type: UPDATE_PASSWORD,
        payload: password
    }
}
