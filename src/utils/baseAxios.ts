import axios from "axios";
// export const baseUrl = process.env.REACT_APP_BACKEND_API_URL
// export const baseUrl = 'http://localhost:3003';
export const baseUrl = 'https://telemedicine-ehr.adaptable.app';

export const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});



