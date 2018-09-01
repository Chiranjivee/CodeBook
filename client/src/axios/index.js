import axios from 'axios';
import { baseURL } from '../config/settings';

const instance = axios.create({
  baseURL,
});

export const { CancelToken } = axios;
export default instance;
