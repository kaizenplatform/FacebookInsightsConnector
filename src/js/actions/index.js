import fb from '../utils/fb';

export const REQUEST_FETCH_ADACCOUNTS = 'REQUEST_FETCH_ADACCOUNTS';
export const COMPLETE_FETCH_ADACCOUNTS = 'COMPLETE_FETCH_ADACCOUNTS';
export const FETCH_ADACCOUNTS = 'FETCH_ADACCOUNTS';
export const SELECT_ADACCOUNT = 'SELECT_ADACCOUNT';
export const SET_FB_STATUS = 'SET_FB_STATUS';

export const requestFetchAdaccounts = () => ({ type: REQUEST_FETCH_ADACCOUNTS });
export const completeFetchAdaccounts = () => ({ type: COMPLETE_FETCH_ADACCOUNTS });
export const fetchAdaccounts = () => (dispatch) => {
  dispatch(requestFetchAdaccounts());
  FB.api('v2.8/me/adaccounts', { fields: 'id,name' }, (response) => {
    if (!response) {
      throw new Error('FB API: Unknown error');
    } else if (response.error) {
      throw new Error(`FB API: ${response.error.message}`);
    }
    dispatch({
      type: FETCH_ADACCOUNTS,
      payload: response,
    });
    dispatch(completeFetchAdaccounts());
  });
};

export const selectAdaccount = id => ({
  type: SELECT_ADACCOUNT,
  payload: { id },
});

export const setFbStatus = (status) => {
  let request = { status };
  if (status === 'connected') {
    request = (dispatch) => {
      FB.api('v2.8/me', { fields: 'id,email,name' }, (response) => {
        const { id, email, name } = response;
        const token = fb.getAccessToken();
        dispatch({
          type: SET_FB_STATUS,
          payload: { status, id, email, name, token },
        });
      });
    };
  }
  return request;
};
