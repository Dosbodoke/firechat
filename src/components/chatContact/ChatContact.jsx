import './ChatContact.css';
import { ImageComponent } from '../index';

function ChatContact(props) {
  return (
    <div className="contact" onClick={props.onClick}>
      <ImageComponent src={props.image} />
      <div className="contact-text">
        <h2 className="contact-name">{props.name}</h2>
        <div className="contact-message">{props.message}</div>
      </div>
    </div>
  );
}

export default ChatContact;
