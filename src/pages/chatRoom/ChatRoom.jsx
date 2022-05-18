import { useDispatch } from 'react-redux';

import { changePage } from '../../app/pageSlice';

import NavBar from '../../components/navbar/NavBar';
import { ChatMessage } from '../../components';

import './ChatRoom.css';
import { backSvg, sendSvg, froidJpg} from '../../assets';

function ChatRoom() {
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
          <h1>Froid</h1>
        </div>
        <div className="navbar-right "></div>
      </NavBar>
      <div id="chat-messager" className="scroll-element">
        <ChatMessage senderClass="sent" senderName="Juan" photoURL={froidJpg}>
          {' '}
          TESTE{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat est provident maiores! Ad
          provident iste aspernatur? Earum quisquam id incidunt tempora ratione nisi, deleniti iure,
          deserunt temporibus quidem alias fugiat!{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
        <ChatMessage senderClass="received" senderName="Froid" photoURL={froidJpg}>
          {' '}
          Teste 2{' '}
        </ChatMessage>
      </div>
      <form id="chat-sender">
        <textarea placeholder="Remember, be nice!" name="" id="" cols="30" rows="10"></textarea>
        <button>
          <img className="icon" src={sendSvg} alt="send" />
        </button>
      </form>
    </>
  );
}

export default ChatRoom;
