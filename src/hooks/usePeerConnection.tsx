
import { useMemo, useState } from 'react';
import { socket } from '../socket';
 
export function usePeerConnection(localStream: MediaStream | null) {
  // const { roomName } = useParams();
  const roomName = 'doctor_patient_call';
  const [guestStream, setGuestStream] = useState<MediaStream | null>(null);
 
  const peerConnection = useMemo(() => {
    const connection = new RTCPeerConnection({
      iceServers: [
        { urls: 'stun:stun.l.google.com:19302' },
        { urls: 'stun:stun2.1.google.com:19302' },
      ]
    });
 
    connection.addEventListener('icecandidate', ({ candidate }) => {
      socket.emit('ice_candidate', { candidate, roomName });
    });
    
    connection.addEventListener('track', ({ streams }) => {
      setGuestStream(streams[0]);
    });

    connection.addEventListener('close', () => {
      console.log('Connection closed');
    } );

    localStream?.getTracks().forEach((track) => {
      connection.addTrack(track, localStream);
    });
 
    return connection;
  }, [localStream]);
 
  return {
    peerConnection,
    guestStream,
  };
}