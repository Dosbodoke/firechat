import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';

import { auth } from '../../firebase/firebase';
import { changePage } from '../../store/slices/pageSlice';

import { ChatContact, NavBar } from '../../components';

import './ChatLobby.css';
import { eyeClosedSvg, eyeOpenSvg, logoutSvg, plusSvg } from '../../assets';

function ChatLobby() {
  const dispatch = useDispatch();
  const chats = useSelector((state) => state.chat);
  const userUid = useSelector((state) => state.auth.uid);
  const userName = useSelector((state) => state.auth.name);
  const [idVisible, setIdVisible] = useState(true);

  return (
    <>
      <NavBar>
        <div className="navbar-left navbar-button" onClick={() => signOut(auth)}>
          <img className="icon icon-blue" src={logoutSvg} alt="log-out" />
        </div>
        <div>
          <h1>{userName}</h1>
          <div
            id="id-display"
            className={['navbar-button', 'navbar-button--text', idVisible ? '' : 'hide-id'].join(
              ' '
            )}
          >
            Your ID:
            <small>{userUid}</small>
            <img
              className="icon icon-blue"
              src={idVisible ? eyeOpenSvg : eyeClosedSvg}
              onClick={() => setIdVisible(!idVisible)}
              alt="Toggle view"
            />
          </div>
        </div>
        <div
          className="navbar-right navbar-button"
          onClick={() => dispatch(changePage({ name: 'new' }))}
        >
          <img className="icon icon-blue" src={plusSvg} alt="new chat" />
        </div>
      </NavBar>
      <main id="chat-lobby" className="scroll-element">
        {Object.entries(chats).map(([key, value]) => {
          return (
            <ChatContact
              key={key}
              image={value.photoURL}
              name={value.name}
              message={value.lastMessage}
              onClick={() =>
                dispatch(changePage({ name: 'room', room: { key, name: value.name } }))
              }
            />
          );
        })}
      </main>
    </>
  );
}

export default ChatLobby;
