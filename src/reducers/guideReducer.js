import {
  FAIL,
  FETCHING,
  FETCHED,
  ADDING,
  ADDED,
  UPDATING,
  UPDATED,
  DELETING,
  DELETED    
}from '../actions';

const initialGuideState = {
  fetching: false,
  fetched: false,
  adding: false,
  added: false,
  updating: false,
  updated: false,
  deleting: false,
  deleted: false,
  guides: [],
  category: 0,
  error: null
}

export const guideReducer = (state = initialGuideState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        fetching: true,
        error: ''
      }
    case FETCHED: {
      let cat = 0;
      if(action.payload.category !== 0){
        cat = action.payload.category;
      }
      return {
        ...state,
        guides: action.payload,
        fetching: false,
        fetched: true,
        category: cat,
        error: ''
      }
    }
    case ADDING:
      return {
        ...state,
        adding: true,
        error: ''
      }
    case ADDED:
      return {
        ...state,
        adding: false,
        error: ''
      }
    case DELETING:
      return {
        ...state,
        deleting: true,
        error: ''
      }
    case DELETED:
      return {
        ...state,
        deleting: false,
        error: ''
        }
    case UPDATING:
      return {
        ...state,
        updating: true,
        error: ''
      }
    case UPDATED:
      return {
        ...state,
        updating: false,
        error: ''
        }
    case FAIL:
      return {
        ...state,
        fetching: false,
        adding: false,
        updating: false,
        deleting: false,
        error: action.payload
      }
    default:
      return state;
  }
}