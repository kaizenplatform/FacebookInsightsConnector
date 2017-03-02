import { REQUEST_FETCH_ADACCOUNTS, COMPLETE_FETCH_ADACCOUNTS, FETCH_ADACCOUNTS, SELECT_ADACCOUNT } from '../actions';

const initialState = { all: [], isFetching: false };

const adaccounts = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_FETCH_ADACCOUNTS:
      return { ...state, all: [], isFetching: true }
    case COMPLETE_FETCH_ADACCOUNTS:
      return { ...state, isFetching: false }
    case FETCH_ADACCOUNTS:
      return { ...state, all: action.payload.data }
    default:
      return state;
  }
};

export default adaccounts;
