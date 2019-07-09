import axios from 'axios';

axios.defaults.withCredentials = true;

export const SEND_SIGNUP = 'SEND_SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';

const baseUrl = 'http://localhost:9000'; //make dynamic later

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

export const FAIL = 'FAIL';
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ADDING = 'ADDING';
export const ADDED = 'ADDED';
export const UPDATING = 'UPDATING';
export const UPDATED = 'UPDATED';
export const DELETING = 'DELETING';
export const DELETED = 'DELETED';
export const FETCHING_CAT = 'FETCHING_CAT';
export const FETCHED_CAT = 'FETCHED_CAT';

export const fetchAll = (token) => dispatch => {
    dispatch({type: FETCHING});
    let headers = {Authorization: token,};
    axios.get(`${baseUrl}/api/guides`, {headers: headers})
        .then(res => dispatch({type: FETCHED, payload: res.data}))
        .catch(err => dispatch({type: FAIL, payload: err}));
}

export const fetchByCategory = (token, categoryID) => dispatch => {
    dispatch({type: FETCHING});
    let headers = {Authorization: token,};
    axios.get(`${baseUrl}/api/category/${categoryID}`, {headers: headers})
        .then(res => dispatch({type: FETCHED, payload: res.data}))
        .catch(err => dispatch({type: FAIL, payload: err}));
}

export const fetchByUser = (userID, token) => dispatch => {
    dispatch({type: FETCHING});
    let headers = {Authorization: token,};
    axios.get(`${baseUrl}/api/${userID}/guides`, {headers: headers})
        .then(res => dispatch({type: FETCHED, payload: res.data}))
        .catch(err => dispatch({type: FAIL, payload: err}));
}

export const fetchByGuide = (userID, guideID, token) => dispatch => {
    dispatch({type: FETCHING});
    let headers = {Authorization: token,};
    axios.get(`${baseUrl}/api/${userID}/guides/${guideID}`, {headers: headers})
        .then(res => dispatch({type: FETCHED, payload: res.data}))
        .catch(err => dispatch({type: FAIL, payload: err}));
}

export const fetchByGuideReadOnly = (guideID, token) => dispatch => {
    dispatch({type: FETCHING});
    let headers = {Authorization: token,};
    axios.get(`${baseUrl}/api/guides/${guideID}`, {headers: headers})
        .then(res => dispatch({type: FETCHED, payload: res.data}))
        .catch(err => dispatch({type: FAIL, payload: err}));
}

export const addGuide = (userID, guide, token) => dispatch => {
    dispatch({type: ADDING});
    let headers = {Authorization: token,};
    axios.post(`${baseUrl}/api/users/${userID}`, guide, {headers: headers})
        .then(res => dispatch({type: ADDED, payload: res.data}))
        .then(() => fetchByUser(userID, token)(dispatch))
        .catch(err => dispatch({type: FAIL, payload: err}));
}

export const updateGuide = (guideID, userID, post, token) => dispatch => {
    dispatch({type: UPDATING});
    let headers = {Authorization: token,};
    axios.put(`${baseUrl}/api/${userID}/guides/${guideID}`, post, {headers: headers})
        .then(res => dispatch({type: UPDATED, payload: res.data}))
        .then(() => fetchByGuide(userID, token)(dispatch))
        .catch(err => dispatch({type: FAIL, payload: err}))
}

export const deleteGuide = (userID, guideID, token) => dispatch => {
    dispatch({type: DELETING});
    let headers = {Authorization: token,};
    axios.delete(`${baseUrl}/api/${userID}/guides/${guideID}`, {headers: headers})
        .then(res => dispatch({type: DELETED, payload: res.data}))
        .then(() => fetchByUser(userID, token)(dispatch))
        .catch(err => dispatch({type: FAIL, payload: err}))
}

export const getCategories = token => dispatch => {
    dispatch({type: FETCHING_CAT});
    let headers = {Authorization: token,};
    axios.get(`${baseUrl}/api/categories`, {headers: headers})
        .then(res => dispatch({type: FETCHED_CAT, payload: res.data}))
        .catch(err => dispatch({type: FAIL, payload: err}))
}