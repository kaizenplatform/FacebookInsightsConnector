import fb from '../utils/fb';

export const REQUEST_FETCH_ADSETS = 'REQUEST_FETCH_ADSETS';
export const COMPLETE_FETCH_ADSETS = 'COMPLETE_FETCH_ADSETS';
export const FETCH_ADSETS = 'FETCH_ADSETS';
export const SELECT_ADSET = 'SELECT_ADSET';
export const REQUEST_FETCH_ADACCOUNTS = 'REQUEST_FETCH_ADACCOUNTS';
export const COMPLETE_FETCH_ADACCOUNTS = 'COMPLETE_FETCH_ADACCOUNTS';
export const FETCH_ADACCOUNTS = 'FETCH_ADACCOUNTS';
export const SELECT_ADACCOUNT = 'SELECT_ADACCOUNT';
export const SET_FB_STATUS = 'SET_FB_STATUS';

export const requestFetchAdSets = () => ({ type: REQUEST_FETCH_ADSETS });
export const completeFetchAdSets = () => ({ type: COMPLETE_FETCH_ADSETS });
export const fetchAdSets = (accountId) => {
  return (dispatch) => {
    dispatch(requestFetchAdSets());
    fb.api(`v2.8/${accountId}/adsets`, { fields: 'id,name', limit: 100 }, (response) => {
      dispatch({
        type: FETCH_ADSETS,
        payload: response,
      });
      dispatch(completeFetchAdSets());
    });
  };
};

export const selectAdSet = id => ({
  type: SELECT_ADSET,
  payload: { id },
});

export const requestFetchAdaccounts = () => ({ type: REQUEST_FETCH_ADACCOUNTS });
export const completeFetchAdaccounts = () => ({ type: COMPLETE_FETCH_ADACCOUNTS });
export const fetchAdaccounts = () => (dispatch) => {
  dispatch(requestFetchAdaccounts());
  fb.api('v2.8/me/adaccounts', { fields: 'id,name', limit: 100 }, (response) => {
    dispatch({
      type: FETCH_ADACCOUNTS,
      payload: response,
    });
    dispatch(completeFetchAdaccounts());
  });
};

export const selectAdaccount = (id) => {
  return (dispatch) => {
    dispatch(fetchAdSets(id));
    dispatch({
      type: SELECT_ADACCOUNT,
      payload: { id },
    });
  };
};

export const setFbStatus = (status) => {
  let request = { status };
  if (status === 'connected') {
    request = (dispatch) => {
      fb.api('v2.8/me', { fields: 'id,email,name' }, (response) => {
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
