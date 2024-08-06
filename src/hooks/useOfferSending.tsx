
import { useCallback } from 'react';
import { socket } from '../socket';
// import { useParams } from 'react-router-dom';
 
export function useOfferSending(peerConnection: RTCPeerConnection) {
  // const { roomName } = useParams();
  const roomName = 'doctor_patient_call';
 
  const sendOffer = useCallback(async () => {
    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
 
    socket.emit('send_connection_offer', {
      roomName,
      offer,
    });
  }, [roomName]);
 
  return { sendOffer };
}