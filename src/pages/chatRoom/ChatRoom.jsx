import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ref, get, onChildAdded, push, update } from 'firebase/database';

import { db } from '../../firebase/index';
import { changePage } from '../../store/slices/pageSlice';

import { NavBar, ChatMessage } from '../../components';

import './ChatRoom.css';
import { backSvg, sendSvg } from '../../assets';

const ChatRoom = () => {
  const dispatch = useDispatch();
  const room = useSelector((state) => state.page.room);
  const userUid = useSelector((state) => state.auth.uid);

  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [members, setMembers] = useState([]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!messageInput) return;

    const data = {
      senderUid: userUid,
      message: messageInput,
      createdAt: new Date().getTime()
    };
    push(ref(db, `messages/${room.key}`), data);
    update(ref(db, `chats/${room.key}`), { lastMessage: messageInput });

    setMessageInput('');
  };

  useEffect(() => {
    if (!room.key) return;

    return onChildAdded(ref(db, `messages/${room.key}`), async (snapshot) => {
      const senderUid = snapshot.val().senderUid;
      if (!members[senderUid]) {
        const senderData = await get(ref(db, `users/${senderUid}`)).then((snapshot) =>
          snapshot.val()
        );

        setMembers((prevState) => ({
          ...prevState,
          [senderUid]: senderData
        }));
      }
      setMessages((arr) => [...arr, { key: snapshot.key, data: snapshot.val() }]);
    });
  }, [room.key]);

  return (
    <>
      <NavBar>
        <div
          className="left button button--text"
          onClick={() => dispatch(changePage({ name: 'lobby' }))}>
          <img className="icon icon-blue" src={backSvg} alt="Back to lobby" />
          <span className="text-blue">back</span>
        </div>
        <div className="middle">
          <h1>{room.name}</h1>
          {room.key}
        </div>
        <div className="right" />
      </NavBar>
      <main className="scroll-element">
        {messages &&
          messages.map((m) => {
            return (
              <ChatMessage
                key={m.key}
                senderClass={m.data.senderUid === userUid ? 'sent' : 'received'}
                senderName={members[m.data.senderUid].name}
                photoURL={members[m.data.senderUid].photoURL}>
                {m.data.message}
              </ChatMessage>
            );
          })}
      </main>
      <form id="chat-sender">
        <textarea
          placeholder="Remember, be nice!"
          value={messageInput}
          onInput={(e) => setMessageInput(e.target.value)}></textarea>
        <button onClick={handleSendMessage}>
          <img className="icon" src={sendSvg} alt="send" />
        </button>
      </form>
    </>
  );
};

export default ChatRoom;
