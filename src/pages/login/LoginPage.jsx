import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { auth } from '../../firebase/firebase';

import './LoginPage.css';
import FlameSvg from '../../assets/flame.svg';
import GoogleSvg from '../../assets/google.svg';

function LoginPage() {
  const handleLogin = () => {
    signInWithPopup(auth, new GoogleAuthProvider()).catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className="login-page">
      <h1 className="login-header">FIRECHAT</h1>
      <div className="login-button" onClick={handleLogin}>
        <img className="icon" src={GoogleSvg} alt="" />
        <div>Login with Google</div>
      </div>
      <img className="background-logo" src={FlameSvg} alt="" />
    </div>
  );
}

export default LoginPage;
