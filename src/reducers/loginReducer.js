import {SEND_LOGIN, LOGIN_SUCCESS, LOGIN_FAIL} from '../actions';

const initialLoginState = {
    username: '',
    token: '',
    userID: '',
    usertype: 0,
    loggedIn: false,
    isLoading: false
}

export const loginReducer = (state = initialLoginState, action) => {
  switch (action.type){
    case SEND_LOGIN:
      return {
        ...state,
        isLoading: true
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        username: action.payload.username,
        token: action.payload.token,
        userID: action.payload.userID,
        usertype: action.payload.usertype,
        loggedIn: true,
        isLoading: false
      }
    case LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state
  }
}