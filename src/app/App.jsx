import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { onChildAdded, onChildRemoved, onValue, ref, off } from 'firebase/database';

import { auth, db } from '../firebase/firebase';
import { saveUser } from '../store/slices/authSlice';
import { storeChat, removeChat } from '../store/slices/chatSlice';
import checkUserData from './App.util';

import { LoginPage, ChatLobby, ChatRoom, ChatNew } from '../pages';

export default function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const pageName = useSelector((state) => state.page.name);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userData = await checkUserData(user.uid, user.displayName, user.photoURL);
        dispatch(saveUser(userData));
      } else {
        dispatch(saveUser(undefined));
      }
    });
    return unsub;
  }, []); // Empty array makes the useEffect runs just once onComponentMount

  if (!user.isLoggedIn) {
    return <LoginPage />;
  }

  const userChatsRef = ref(db, `users/${user.uid}/chats`);

  // trigger once for all existing record then for each new record
  onChildAdded(userChatsRef, (data) => {
    const chatRef = ref(db, `chats/${data.key}`);
    onValue(chatRef, (snapshot) => {
      dispatch(storeChat({ key: snapshot.key, data: snapshot.val() }));
    });
  });

  onChildRemoved(userChatsRef, (data) => {
    off(`chats/${data.key}`); // Turn off firebase reference
    dispatch(removeChat(data.key));
  });

  const pages = {
    lobby: <ChatLobby />,
    room: <ChatRoom />,
    new: <ChatNew />
  };

  return pages[pageName];
}
