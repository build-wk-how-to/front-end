import { combineReducers } from 'redux';
import { signupReducer } from './signupReducer';
import { loginReducer } from './loginReducer';
import { guideReducer } from './guideReducer';
import { catReducer } from './catReducer';

const rootReducer = combineReducers({
  signup: signupReducer,
  login: loginReducer,
  guides: guideReducer,
  categories: catReducer
});

export default rootReducer;