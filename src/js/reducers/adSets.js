import { REQUEST_FETCH_ADSETS, COMPLETE_FETCH_ADSETS, FETCH_ADSETS, SELECT_ADSET } from '../actions';

const initialState = { all: {}, current: null, isFetching: false };

const adSets = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_FETCH_ADSETS:
      return { ...state, all: {}, current: null, isFetching: true };
    case COMPLETE_FETCH_ADSETS:
      return { ...state, isFetching: false };
    case FETCH_ADSETS:
      return { ...state, all: action.payload.data.reduce((h, x) => Object.assign(h, { [x.id]: x }), {}) };
    case SELECT_ADSET:
      return { ...state, current: action.payload.id };
    default:
      return state;
  }
};

export default adSets;
