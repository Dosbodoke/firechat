import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ref, push, update, onChildAdded, get } from 'firebase/database';

import { db } from '../../firebase/firebase';
import { changePage } from '../../store/slices/pageSlice';

import { ChatMessage, NavBar } from '../../components';

import './ChatRoom.css';
import { backSvg, sendSvg } from '../../assets';

function ChatRoom() {
  const dispatch = useDispatch();

  const userUid = useSelector((state) => state.auth.uid);
  const room = useSelector((state) => state.page.room);
  const [textValue, setTextValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [members, setMembers] = useState({});

  const sendMessage = (e) => {
    e.preventDefault();
    if (!textValue) return;

    const data = {
      senderUid: userUid,
      message: textValue,
      createdAt: new Date().getTime()
    };
    push(ref(db, `messages/${room.key}`), data);
    update(ref(db, `chats/${room.key}`), { lastMessage: textValue });

    setTextValue('');
  };

  useEffect(() => {
    if (!room.key) {
      return;
    }

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
          className="navbar-left navbar-button navbar-button--text"
          onClick={() => dispatch(changePage({ name: 'lobby' }))}
        >
          <img className="icon icon-blue" src={backSvg} alt="Back to lobby" />
          <span className="text-blue">back</span>
        </div>
        <div>
          <h1>{room.name}</h1>
        </div>
        <div className="navbar-right "></div>
      </NavBar>
      <div id="chat-messager" className="scroll-element">
        {messages &&
          messages.map((m) => {
            return (
              <ChatMessage
                key={m.key}
                senderClass={m.data.senderUid === userUid ? 'sent' : 'received'}
                senderName={members[m.data.senderUid].name}
                photoURL={members[m.data.senderUid].photoURL}
              >
                {m.data.message}
              </ChatMessage>
            );
          })}
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
