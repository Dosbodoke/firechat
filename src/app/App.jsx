import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import {
  onChildAdded,
  onChildRemoved,
  onValue,
  ref,
  off,
  get,
  set,
  update
} from 'firebase/database';

import { defaultRoomConfig } from '../firebase/firebaseConfig';
import { auth, db } from '../firebase/firebase';
import { saveUser } from '../store/slices/authSlice';
import { storeChat, removeChat } from '../store/slices/chatSlice';
import { getShortName } from '../utils';

import { LoginPage } from '../pages';
import { ChatApp } from './ChatApp';

async function updatePhotoIfUrlIsDifferent(url1, url2, userRef) {
  if (url1 != url2) await update(userRef, { photoURL: url1 });
}

async function storeUser(uid, name, photoURL, userRef) {
  const shortName = getShortName(name);
  await set(userRef, { name: shortName, photoURL });

  if (defaultRoomConfig.key) {
    const updates = {};
    updates[`/users/${uid}/chats/${defaultRoomConfig.key}`] = true;
    updates[`/members/${defaultRoomConfig.key}`] = { [uid]: true };
    await update(ref(db), updates);
  }

  return { shortName: shortName };
}

async function checkUserData(uid, name, photoURL) {
  const userData = {
    uid: uid,
    photoURL: photoURL
  };

  try {
    const userRef = ref(db, `users/${uid}`);
    const storedUser = await get(userRef).then((snapshot) =>
      snapshot.exists ? snapshot.val() : undefined
    );

    if (storedUser) {
      await updatePhotoIfUrlIsDifferent(photoURL, storedUser.photoURL, userRef);
      userData.name = storedUser.name;
      return userData;
    }

    const { shortName } = await storeUser(uid, name, photoURL, userRef);
    userData.name = shortName;
    return userData;
  } catch (error) {
    console.log(error);
  }
}

export default function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

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

  return <ChatApp />;
}
