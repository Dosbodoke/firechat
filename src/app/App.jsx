import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '../firebase/firebase';
import {
  getData,
  setData,
  updateData,
  listenChildrens,
  listenValue,
  removeReference
} from '../firebase/firebase.database';
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
      const path = `users/${uid}`;
      const dbUser = await getData(path);
      const userData = {
        uid: uid,
        photoURL: photoURL
      };

      if (dbUser) {
        if (photoIsOutdated(photoURL, dbUser.photoURL)) await updateData(path, { photoURL });
        userData.name = dbUser.name;
      } else {
        const shortName = getShortName(name);
        await setData(path, { name: shortName, photoURL, chats: { JiGh_31GA20JabpZBfa: true } });
        userData.name = shortName;
      }
      return userData;
    } catch (error) {
      console.log(error);
    }
  }

  function storeValue(snapshot) {
    dispatch(saveChat({ key: snapshot.key, data: snapshot.val() }));
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
    listenChildrens(`users/${user.uid}/chats`, (event, data) => {
      if (event === 'added') {
        listenValue(`chats/${data.key}`, storeValue);
      } else if (event === 'removed') {
        removeReference(`chats/${data.key}`);
        dispatch(removeChat(data.key));
      }
    });
  }

  return user.isLoggedIn ? <ChatApp /> : <LoginPage />;
}
