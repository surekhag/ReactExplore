import { SET_LOG_IN_TOKEN, SET_USERNAME, CLEAR_USER_DATA } from '../constants';

export const setLogInTokenAction = (token, profileId) => {
  return {
    type: SET_LOG_IN_TOKEN,
    payload: { token: token, profileId: profileId }
  };
};

export const setUserName = data => {
  return {
    type: SET_USERNAME,
    data
  };
};

export const clearUserData = () => {
  return {
    type: CLEAR_USER_DATA
  };
};
