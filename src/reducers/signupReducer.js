import {SEND_SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAIL} from '../actions';

const initialSignupState = {
    isLoading: false,
    registered: false,
    error: ''
}

export const signupReducer = (state = initialSignupState, action) => {
  switch (action.type){
    case SEND_SIGNUP:
      return {
        ...state,
        isLoading: true,
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        registered: true,
      }
    case SIGNUP_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state
  }
}