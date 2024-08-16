import axios from "axios";
// export const baseUrl = process.env.REACT_APP_BACKEND_API_URL
export const baseUrl = 'http://localhost:3003';
export const baseFEUrl = 'https://orlhatundji.github.io/doctor-telemedicine-ehr';
// export const baseUrl = 'https://telemedicine-ehr.adaptable.app';

export const axiosInstance = axios.create({
  baseURL: baseUrl
});

axiosInstance.interceptors.request.use( 
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);  

