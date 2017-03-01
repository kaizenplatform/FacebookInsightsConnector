import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import adaccounts from './adaccounts';
import fbStatus from './fbStatus';

const rootReducer = combineReducers({
  adaccounts,
  fbStatus,
  form: formReducer,
});

export default rootReducer;
