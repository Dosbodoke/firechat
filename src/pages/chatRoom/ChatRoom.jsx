import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ref, push, update } from 'firebase/database';

import { db } from '../../firebase/firebase';
import { changePage } from '../../store/slices/pageSlice';

import { ChatMessage, NavBar } from '../../components';

import './ChatRoom.css';
import { backSvg, sendSvg, froidJpg } from '../../assets';

function ChatRoom() {
  const dispatch = useDispatch();

  const userUid = useSelector((state) => state.auth.uid);
  const roomId = useSelector((state) => state.page.roomId);
  const [textValue, setTextValue] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    if (!textValue) return;

    const data = {
      senderUid: userUid,
      message: textValue,
      createdAt: new Date().getTime()
    };
    push(ref(db, `messages/${roomId}`), data);
    update(ref(db, `chats/${roomId}`), { lastMessage: textValue });

    setTextValue('');
  };

  return (
    <>
      <NavBar>
        <div
          className="navbar-left navbar-button navbar-button--text"
          onClick={() => dispatch(changePage({ name: 'lobby' }))}
        >
          <img className="icon icon-blue" src={backSvg} alt="Back to lobby" />
          <span className="text-blue">back</span>
        </div>
        <div>
          <h1>Froid</h1>
        </div>
        <div className="navbar-right "></div>
      </NavBar>
      <div id="chat-messager" className="scroll-element">
        <ChatMessage senderClass="sent" senderName="Juan" photoURL={froidJpg}>
          {' '}
          TESTE{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat est provident maiores! Ad
          provident iste aspernatur? Earum quisquam id incidunt tempora ratione nisi, deleniti iure,
          deserunt temporibus quidem alias fugiat!{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
      </div>
      <form id="chat-sender">
        <textarea
          placeholder="Remember, be nice!"
          value={textValue}
          onInput={(e) => setTextValue(e.target.value)}
        ></textarea>
        <button onClick={sendMessage}>
          <img className="icon" src={sendSvg} alt="send" />
        </button>
      </form>
    </>
  );
}

export default ChatRoom;
