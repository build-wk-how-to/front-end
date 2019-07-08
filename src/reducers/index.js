import { combineReducers } from 'redux';
import { signupReducer } from './signupReducer';
import { loginReducer } from './loginReducer';
import { guideReducer } from './guideReducer';

const rootReducer = combineReducers({
  signup: signupReducer,
  login: loginReducer,
  guides: guideReducer
});

export default rootReducer;