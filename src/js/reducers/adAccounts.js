import { REQUEST_FETCH_ADACCOUNTS, COMPLETE_FETCH_ADACCOUNTS, FETCH_ADACCOUNTS, SELECT_ADACCOUNT } from '../actions';

const initialState = { all: {}, current: null, isFetching: false };

const adAccounts = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_FETCH_ADACCOUNTS:
      return { ...state, all: {}, current: null, isFetching: true };
    case COMPLETE_FETCH_ADACCOUNTS:
      return { ...state, isFetching: false };
    case FETCH_ADACCOUNTS:
      return { ...state, all: action.payload.data.reduce((h, x) => Object.assign(h, { [x.id]: x }), {}) };
    case SELECT_ADACCOUNT:
      return { ...state, current: action.payload.id };
    default:
      return state;
  }
};

export default adAccounts;
