import { io } from 'socket.io-client';
 
export const socket = io("https://telemedicine-ehr.adaptable.app", {
  autoConnect: false,
});