import { io } from 'socket.io-client';
// https://telemedicine-ehr.adaptable.app
export const socket = io(process.env.REACT_APP_BACKEND_API_URL as string, {
  autoConnect: false,
});