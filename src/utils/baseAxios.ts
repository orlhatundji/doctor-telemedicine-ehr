/* eslint-disable no-undef */
import axios from "axios";
// export const baseUrl = process.env.REACT_APP_BACKEND_API_URL
export const baseUrl = 'https://api.backend.com/api';

axios.defaults.withCredentials = true
export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: baseUrl,
});

