import React, { useState } from 'react';
import { socket } from '../../socket';

const ChatFooter = () => {
  const [message, setMessage] = useState('');
  const handleTyping = () =>
    socket.emit('typing', `${localStorage.getItem('userName')} is typing`);


  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (message.trim() && localStorage.getItem('userName')) {
      socket.emit('message', {
        text: message,
        name: localStorage.getItem('email'),
        id: localStorage.getItem('id'),
        socketID: socket.id,
      });
    }
    setMessage('');
  };
  return (
    <div className="chat__footer">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleTyping}
        />
        <button className="sendBtn">SEND</button>
      </form>
    </div>
  );
};

export default ChatFooter;