import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import adAccounts from './adAccounts';
import adSets from './adSets';
import fbStatus from './fbStatus';

const rootReducer = combineReducers({
  adAccounts,
  adSets,
  fbStatus,
  form: formReducer,
});

export default rootReducer;
