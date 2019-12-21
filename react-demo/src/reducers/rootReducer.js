import { SET_LOG_IN_TOKEN, SET_USERNAME, CLEAR_USER_DATA } from '../constants';

const initState = {
  token: '',
  profile_user_name: '',
  profileId: ''
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_LOG_IN_TOKEN:
      return {
        ...state,
        token: action.payload.token,
        profileId: action.payload.profileId
      };

    case SET_USERNAME:
      return {
        ...state,
        profile_user_name: action.data
      };

    case CLEAR_USER_DATA:
      return {
        ...state,
        token: '',
        profile_user_name: '',
        profileId: ''
      };

    default:
      return state;
  }
};

export default rootReducer;
