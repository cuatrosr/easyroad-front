import axios from 'axios';

export const baseURL = 'http://fts.homelinux.com:3500';
export const axiosI = axios.create({
  baseURL: baseURL,
  proxy: { host: 'nestjs', port: 3500 },
});
