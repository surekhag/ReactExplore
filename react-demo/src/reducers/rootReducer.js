import axios from 'axios';

const initState = {
  token: '',
  firstName: '',
  profileId: ''
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      axios({
        url:
          'https://dev-bepsy-api.objectedge.com/oe_commerce_api/occ/v1/oauth/login',
        headers: {
          authorization: 'Bearer YWRtaW46YWRtaW4=',
          'content-type': 'application/json'
        },
        data: {
          password: 'Objectedge$10',
          username: 'trupti.kashid@objectedge.com'
        },
        method: 'post'
      }).then(
        response => {
          console.log(response);
          // this.setState({
          //   username: '',
          //   password: '',
          //   show: 'flex',
          //   message: 'Login Successful!',
          //   token: response.data.access_token,
          //   userId: response.data.id
          // });
          // this.getUserProfile();
          return;
        },
        error => {
          console.log(error);
        }
      );

      return {
        ...state
      };

    default:
      return state;
  }
};

export default rootReducer;
