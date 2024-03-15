import axios from 'axios';

export const baseURL = import.meta.env.VITE_URL_BACK_HTTP;
export const axiosI = axios.create({
  baseURL: baseURL,
});
