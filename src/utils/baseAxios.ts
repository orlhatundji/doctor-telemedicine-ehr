/* eslint-disable no-undef */
import axios from "axios";
// export const baseUrl = process.env.REACT_APP_API_URL
export const baseUrl = 'http://localhost:3001';

axios.defaults.withCredentials = true
export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: baseUrl,
});

