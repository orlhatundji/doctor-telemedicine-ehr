import { io } from 'socket.io-client';
// https://telemedicine-ehr.adaptable.app
export const socket = io("http://localhost:3003", {
  autoConnect: true,
});