import axios from 'axios';

axios.defaults.withCredentials = true;

export const SEND_SIGNUP = 'SEND_SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';

const baseUrl = 'http://localhost:3000'; //make dynamic later

export const signup = x => dispatch => {
    dispatch({type: SEND_SIGNUP});
    axios.post(`${baseUrl}/api/register`, x)
        .then(res => {
            dispatch({type: SIGNUP_SUCCESS, payload: res.data})})
        .catch(err => dispatch({type: SIGNUP_FAIL, payload: err}));
}

export const SEND_LOGIN = 'SEND_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';


export const login = x => dispatch => {
    dispatch({type: SEND_LOGIN});
    axios.post(`${baseUrl}/api/login`, x)
        .then(res => {
            dispatch({type: LOGIN_SUCCESS, payload: res.data});
        })   
        .catch(err => dispatch({type: LOGIN_FAIL, payload: err}));
}