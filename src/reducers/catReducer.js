import {FETCHING_CAT, FETCHED_CAT, FAIL} from '../actions';

const initialCatState = {
  fetching: false,
  fetched: false,
  categories: []
}

export const catReducer = (state = initialCatState, action) => {
  switch(action.type){
    case FETCHING_CAT:
      return {
        ...state,
        fetching: true,
        fetched: false
      }
    case FETCHED_CAT:
      return {
        ...state,
        fetching: false,
        fetched: true,
        categories: action.payload
      }
    default:
      return state
  }
}