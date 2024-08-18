import { useEffect, useRef, useState } from 'react';
import ChatBody from './components/ChatBody';
import ChatFooter from './components/ChatFooter';
import { socket } from '../socket';
import './chat.css';

const ChatPage = () => {
  const [messages, setMessages] = useState<any[]>([]);
  // const [userName, setUserName] = useState<string | null>(localStorage.getItem('doctor'));
  const [typingStatus, setTypingStatus] = useState('');
  const lastMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //sends the username and socket ID to the Node.js server
    const myId = localStorage.getItem('id');
    socket.emit('newUser',  { userName: myId, roomName: 'jsnow', socketID: socket.id });

  } , []);
  useEffect(() => {
    socket.on('message', (data: any) => setMessages([...messages, data]));
  }, [messages]);

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  useEffect(() => {
    socket.on('typingResponse', (data) => setTypingStatus(data));
  }, []);
  
  return (
    <div className="chat max-h-full bg-purple-500 flex flex-col overflow-hidden">
      {/* <ChatBar /> */}
      {/* <div></div> */}
      <div className="chat__main flex-1 flex flex-col w-full overflow-hidden">
        <ChatBody {...{messages, lastMessageRef, typingStatus}} />
        <ChatFooter />
      </div>
    </div>
  );
};

export default ChatPage;