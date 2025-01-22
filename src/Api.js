import axios from 'axios';
import { retrieveLaunchParams } from '@telegram-apps/sdk';

const { REACT_APP_API_URL } = process.env;

const { initDataRaw, platform } = retrieveLaunchParams();

const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Authorization: `tma ${initDataRaw}`,
    'X-Platform': platform,
  },
  baseURL: REACT_APP_API_URL
});

class Api {

  static test(params) {
    return api.get('/');
  }

}

export default Api
