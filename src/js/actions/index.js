import fb from '../utils/fb';

export const REQUEST_FETCH_ADACCOUNTS = 'REQUEST_FETCH_ADACCOUNTS';
export const COMPLETE_FETCH_ADACCOUNTS = 'COMPLETE_FETCH_ADACCOUNTS';
export const FETCH_ADACCOUNTS = 'FETCH_ADACCOUNTS';
export const SELECT_ADACCOUNT = 'SELECT_ADACCOUNT';
export const SET_FB_STATUS = 'SET_FB_STATUS';

export const requestFetchAdaccounts = () => { return { type: REQUEST_FETCH_ADACCOUNTS } };
export const completeFetchAdaccounts = () => { return { type: COMPLETE_FETCH_ADACCOUNTS } };
export const fetchAdaccounts = () => {
  return dispatch => {
    dispatch(requestFetchAdaccounts());
    FB.api('v2.8/me/adaccounts', { 'fields': 'id,name' }, function(response) {
      dispatch({
        type: FETCH_ADACCOUNTS,
        payload: response,
      });
      dispatch(completeFetchAdaccounts());
    });
  };
};

export const selectAdaccount = (id) => {
  return {
    type: SELECT_ADACCOUNT,
    payload: { id },
  };
};

export const setFbStatus = (status) => {
  let request = { status };
  if (status === 'connected') {
    request = (dispatch) => {
      FB.api('v2.8/me', { 'fields': 'id,email,name' }, function(response) {
        const { id, email, name } = response;
        const token = fb.getAccessToken();
        dispatch({
          type: SET_FB_STATUS,
          payload: { status, id, email, name, token }
        });
      });
    };
  }
  return request;
};

