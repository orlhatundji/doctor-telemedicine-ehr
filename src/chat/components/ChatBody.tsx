import React from 'react';
import { socket } from '../../socket';

const ChatBody = ({messages, lastMessageRef, typingStatus}: 
  { messages: any[], lastMessageRef: React.RefObject<HTMLDivElement>, typingStatus: string}) => {

  return (
    <>
      {/* <header className="chat__mainHeader">
        <p>Hangout with Colleagues</p>
        <button className="leaveChat__btn" onClick={handleLeaveChat}>
          LEAVE CHAT
        </button>
      </header> */}

      <div className="message__container overflow-scroll flex-1">
        {messages?.map((message: any) =>
          message.id !== socket.id ? (
            <div className="message__chats" key={message.id}>
              <p className="sender__name">You</p>
              <div className="message__sender">
                <p>{message.text}</p>
              </div>
            </div>
          ) : (
            <div className="message__chats" key={message.id}>
              <p>{message.name}</p>
              <div className="message__recipient">
                <p>{message.text}</p>
              </div>
            </div>
          )
        )}
        <div ref={lastMessageRef} />

        <div className="message__status">
          <p>{typingStatus}</p>
        </div>
      </div>
    </>
  );
};

export default ChatBody;