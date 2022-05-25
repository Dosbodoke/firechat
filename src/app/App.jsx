import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { onChildAdded, onChildRemoved, onValue, ref, off, get, set } from 'firebase/database';

import { auth, db } from '../firebase/firebase';
import { saveUser } from '../store/slices/authSlice';
import { saveChat, removeChat } from '../store/slices/chatSlice';
import { getShortName, photoIsOutdated } from '../utils';

import { LoginPage } from '../pages';
import { ChatApp } from './ChatApp';

export default function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  async function checkUserData(uid, name, photoURL) {
    try {
      const refUser = ref(db, `users/${uid}`);
      const dbUser = await get(refUser).then((snapshot) =>
        snapshot.exists ? snapshot.val() : undefined
      );
      const userData = {
        uid: uid,
        photoURL: photoURL
      };

      if (dbUser) {
        if (photoIsOutdated(photoURL, dbUser.photoURL)) await update(refUser, { photoURL });
        userData.name = dbUser.name;
      } else {
        const shortName = getShortName(name);
        await set(refUser, { name: shortName, photoURL });
        userData.name = shortName;
      }
      return userData;
    } catch (error) {
      console.log(error);
    }
  }

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
  }, []);

  if (user.isLoggedIn) {
    const userChatsRef = ref(db, `users/${user.uid}/chats`);

    onChildAdded(userChatsRef, (data) => {
      onValue(ref(db, `chats/${data.key}`), (snapshot) => {
        dispatch(saveChat({ key: snapshot.key, data: snapshot.val() }));
      });
    });

    onChildRemoved(userChatsRef, (data) => {
      off(`chats/${data.key}`);
      dispatch(removeChat(data.key));
    });
  }

  return user.isLoggedIn ? <ChatApp /> : <LoginPage />;
}
