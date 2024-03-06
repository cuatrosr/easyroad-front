import axios from 'axios';

export const baseURL = `http://57.151.39.186:3500`;
export const axiosI = axios.create({
  baseURL: baseURL,
});
