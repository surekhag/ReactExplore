import { SET_PRODUCTS_DATA } from '../constants';

const initState = {
  productsData: ''
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_PRODUCTS_DATA:
      // console.log('in reducer', action.data);
      return {
        ...state,
        productsData: action.data
      };

    default:
      return state;
  }
};

export default rootReducer;
