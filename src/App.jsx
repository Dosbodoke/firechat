import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { ref, onChildAdded, onChildRemoved, onValue, off } from 'firebase/database';

import { auth, db } from './firebase';
import { saveUser } from './store/slices/authSlice';
import { storeChat, removeChat } from './store/slices/chatSlice';
import userData from './utils/userData';

import { LoginPage, ChatLobby, ChatNew, ChatRoom } from './pages';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const pageName = useSelector((state) => state.page.name);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const data = await userData(user.uid, user.displayName, user.photoURL);
        dispatch(saveUser(data));
      } else {
        dispatch(saveUser(undefined));
      }
    });
    return unsub;
  }, []);

  if (!user.isLoggedIn) return <LoginPage />;

  const userChatsRef = ref(db, `users/${user.uid}/chats`);

  // trigger once for all existing records then for each new record
  onChildAdded(userChatsRef, (chat) => {
    const chatRef = ref(db, `chats/${chat.key}`);
    onValue(chatRef, (snapshot) => {
      dispatch(storeChat({ key: snapshot.key, data: snapshot.val() }));
    });
  });

  onChildRemoved(userChatsRef, (chat) => {
    off(`chats/${chat.key}`); // Turn off firebase reference
    dispatch(removeChat(chat.key));
  });

  const chatPages = {
    lobby: <ChatLobby />,
    new: <ChatNew />,
    room: <ChatRoom />
  };

  return chatPages[pageName];
}

export default App;
