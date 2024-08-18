import { useState, useEffect } from 'react';
import { socket } from '../../socket';

const ChatBar = () => {
  const [users, setUsers] = useState<{socketID: string, userName: string}[]>([]);

  useEffect(() => {
    socket.on('newUserResponse', (data) => setUsers(data));
  }, [users]);

  return (
    <div className="chat__sidebar">
      <h2>Open Chat</h2>
      <div>
        <h4 className="chat__header">ACTIVE USERS</h4>
        <div className="chat__users">
          {users.map((user, i) => (
            <p key={i}>{user.userName}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
