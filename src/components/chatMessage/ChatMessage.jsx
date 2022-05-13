import './ChatMessage.css';
import ImageComponent from '../imageComponent/ImageComponent';

function ChatMessage(props) {
  return (
    <div className={`message-container ${props.senderClass}`}>
      <ImageComponent src={props.photoURL} />
      <div className="message">
        <h2>{props.senderName}</h2>
        <p>{props.children}</p>
      </div>
    </div>
  );
}

export default ChatMessage;
