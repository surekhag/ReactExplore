import { SET_PRODUCTS_DATA } from '../constants';

export const setProductsData = data => {
  return { type: SET_PRODUCTS_DATA, data };
};
