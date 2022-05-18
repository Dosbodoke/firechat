import { useSelector, useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '../firebase/firebase';
import { getData, updateData } from '../firebase/firebase.database';
import { ChatApp } from './ChatApp';
import { LayoutContainer } from '../components';
import { LoginPage } from '../pages';
import { useEffect } from 'react';
import { saveUser } from './authSlice';

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  async function checkUserData(uid, name, photoURL) {
    try {
      const ref = `users/${uid}`;
      const dbUser = await getData(ref);
      const userData = {
        name: dbUser.name,
        uid: uid,
        photoURL: photoURL
      };
      if (dbUser && photoURL != dbUser.photoURL) {
        updateData(ref, { photoURL });
      } else if (!dbUser) {
        setUser(uid, name, photoURL);
      }
      return userData;
    } catch (error) {
      console.log(error);
    }
  };

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

  return <LayoutContainer>{isLoggedIn ? <ChatApp /> : <LoginPage />}</LayoutContainer>;
}

export default App;
