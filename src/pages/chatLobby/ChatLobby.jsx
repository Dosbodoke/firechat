import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';

import { auth } from '../../firebase/firebase';
import { changePage } from '../../store/slices/pageSlice';

import { ChatContact, NavBar, UidViewer } from '../../components';

import './ChatLobby.css';
import { logoutSvg, plusSvg } from '../../assets';

function ChatLobby() {
  const dispatch = useDispatch();
  const chats = useSelector((state) => state.chat);
  const userUid = useSelector((state) => state.auth.uid);
  const userName = useSelector((state) => state.auth.name);

  return (
    <>
      <NavBar>
        <div className="navbar-left navbar-button" onClick={() => signOut(auth)}>
          <img id="back-svg" className="icon icon-blue" src={logoutSvg} alt="log-out" />
        </div>
        <div className="navbar-middle">
          <h1>{userName}</h1>
          <UidViewer uid={userUid} />
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
