import axios from 'axios';

export const baseURL = 'http://localhost:3500';
export const axiosI = axios.create({ baseURL: baseURL });
