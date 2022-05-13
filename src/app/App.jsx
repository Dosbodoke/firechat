import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';

import { auth } from '../firebase';
import { ChatApp } from './ChatApp';
import { LayoutContainer } from '../components';
import { LoginPage } from '../pages';
import { useEffect } from 'react';
import { setLoggedIn } from './authSlice';

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(setLoggedIn(user ? true : false));
    });
  });

  return <LayoutContainer>{isLoggedIn ? <ChatApp /> : <LoginPage />}</LayoutContainer>;
}

export default App;
