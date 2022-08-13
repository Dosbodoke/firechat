import { useSelector, useDispatch } from 'react-redux';
import { signOut } from 'firebase/auth';

import { auth } from '../../firebase/index';
import { changePage } from '../../store/slices/pageSlice';

import { NavBar } from '../../components';

import './ChatLobby.css';
import { logoutSvg, plusSvg } from '../../assets';

const ChatLobby = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.auth.name);
  const chats = useSelector((state) => state.chat);

  return (
    <>
      <NavBar>
        <div className="left button" onClick={() => signOut(auth)}>
          <img id="back-svg" className="icon icon-blue" src={logoutSvg} alt="log-out" />
        </div>
        <div className="middle">
          <h1>{userName}</h1>
        </div>
        <div className="right button" onClick={() => dispatch(changePage({ name: 'new' }))}>
          <img className="icon icon-blue" src={plusSvg} alt="New chat" />
        </div>
      </NavBar>
      <main className="scroll-element">
        {Object.entries(chats).map(([key, value]) => {
          return (
            <div
              className="contact"
              key={key}
              onClick={() =>
                dispatch(changePage({ name: 'room', room: { key: key, name: value.name } }))
              }>
              <img src={value.photoURL} />
              <div className="contact-info">
                <h2 className="contact-name">{value.name}</h2>
                <div className="contact-message">{value.lastMessage}</div>
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
};

export default ChatLobby;
