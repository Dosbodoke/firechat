import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { auth } from '../../firebase/firebase';

import './LoginPage.css';
import { flameSvg, googleSvg } from '../../assets';

function LoginPage() {
  const handleLogin = () => {
    signInWithPopup(auth, new GoogleAuthProvider()).catch((error) => {
      console.log(error);
    });
  };

  return (
    <div id="login-page">
      <h1 className="login-header">FIRECHAT</h1>
      <div className="login-button" onClick={handleLogin}>
        <img className="icon" src={googleSvg} alt="Google icon" />
        <h2>Login with Google</h2>
      </div>
      <img id="background-logo" src={flameSvg} alt="" />
    </div>
  );
}

export default LoginPage;
