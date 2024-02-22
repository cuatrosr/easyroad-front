import axios from 'axios';

export const baseURL = `http://127.0.0.1:3500`;
export const axiosI = axios.create({
  baseURL: baseURL,
});
