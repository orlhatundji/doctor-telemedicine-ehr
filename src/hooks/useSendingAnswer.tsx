import { useCallback } from 'react';
import { socket } from '../socket';
// import { useParams } from 'react-router-dom';
 
// export function useOffersListening(peerConnection: RTCPeerConnection) {
export function useSendingAnswer(peerConnection: RTCPeerConnection) {
  // const { roomName } = useParams();
  const roomName = 'doctor_patient_call';
 
  const handleConnectionOffer = useCallback(
    async ({ offer }: { offer: RTCSessionDescriptionInit }) => {
      await peerConnection.setRemoteDescription(new RTCSessionDescription(offer));
      const answer = await peerConnection.createAnswer();
      await peerConnection.setLocalDescription(new RTCSessionDescription(answer));
 
      socket.emit('answer', { answer, roomName });
    },
    [roomName],
  );
 
  return {
    handleConnectionOffer,
  };
}