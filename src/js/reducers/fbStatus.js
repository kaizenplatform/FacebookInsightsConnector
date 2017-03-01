import { SET_FB_STATUS } from '../actions';

const initialState = { status: null, email: null, name: null, token: null };

const fbStatus = (state = initialState, action) => {
  const { status, email, name, token } = action.payload || {};
  switch(action.type) {
    case SET_FB_STATUS:
      return { ...state, status, email, name, token }
    default:
      return state;
  }
};

export default fbStatus;

