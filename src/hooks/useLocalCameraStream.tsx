import { useEffect, useState } from 'react';
 
export function useLocalCameraStream() {
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const endLocalStream = () => {
    if (localStream) {
      localStream.getTracks().forEach((track) => {
        track.stop();
        track.enabled = false;
      });
      const tracks = localStream.getTracks();
      tracks.forEach((track) => {
        track.stop();
        track.enabled = false;
      } 
      );
      
      setLocalStream(null);
    }
  }
 
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setLocalStream(stream);
        
      });

  }, []);
 
  return {
    localStream,
    setLocalStream,
    endLocalStream
  };
}