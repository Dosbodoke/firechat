import { useDispatch } from 'react-redux';

import { changePage } from '../../store/slices/pageSlice';

import NavBar from '../../components/navbar/NavBar';

import './ChatNew.css';
import { backSvg } from '../../assets';

function ChatNew() {
  const dispatch = useDispatch();

  return (
    <>
      <NavBar>
        <div
          className="navbar-left navbar-button navbar-button--text"
          onClick={() => dispatch(changePage('lobby'))}
        >
          <img className="icon icon-blue" src={backSvg} alt="Back to lobby" />
          <span className="text-blue">back</span>
        </div>
        <div>
          <h1>New Chat</h1>
        </div>
        <div className="navbar-right "></div>
      </NavBar>
      <div id="chat-new-container">
        <form className="chat-new-form" action="">
          <h2>Create new chat</h2>
          <p>
            Enter the chat name and receive an ID that can be shared with others to join your chat
          </p>
          <div className="chat-new-form__input_container">
            <input type="text" name="" id="" />
            <input type="submit" value="create" />
          </div>
        </form>
        <form className="chat-new-form" action="">
          <h2>Join a chat</h2>
          <p>Enter a chat ID and start a conversation</p>
          <div className="chat-new-form__input_container">
            <input type="text" name="" id="" />
            <input type="submit" value="join" />
          </div>
        </form>
      </div>
    </>
  );
}

export default ChatNew;
