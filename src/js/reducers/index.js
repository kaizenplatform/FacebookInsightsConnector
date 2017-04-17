import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import adaccounts from './adaccounts';
import adSets from './adSets';
import fbStatus from './fbStatus';

const rootReducer = combineReducers({
  adaccounts,
  adSets,
  fbStatus,
  form: formReducer,
});

export default rootReducer;
