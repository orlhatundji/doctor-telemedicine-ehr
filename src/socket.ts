import { io } from 'socket.io-client';
// https://telemedicine-ehr.adaptable.app
export const socket = io("https://telemedicine-ehr.adaptable.app", {
  autoConnect: true,
});