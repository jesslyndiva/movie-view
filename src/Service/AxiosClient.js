import axios from 'axios';

import config from '../Config';

const createAxiosInstance = () => axios.create({
  baseURL: config.baseURL,
  headers: {
    accept: 'application/json',
    Authorization: config.apiKey
  }
});

export default createAxiosInstance;
