import { SET_PRODUCTS_DATA } from '../constants';

export const setProductsData = data => {
  // console.log('in action', data);
  return { type: SET_PRODUCTS_DATA, data };
};

// export const getProductsData = () => {
//   return {
//     type: GET_PRODUCTS_DATA
//   };
// };
