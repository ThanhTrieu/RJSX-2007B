import axios from 'axios';
import * as api from './constant';

export const getDataProducts = async () => {
  const url = `${api.configApi.PROXY_API}${api.configApi.BASE_URL}${api.configApi.PRODUCT_URL}`;
  const response = await axios.get(url);
  const result = await response.status === 200 ? response.data : [];
  return result;
}