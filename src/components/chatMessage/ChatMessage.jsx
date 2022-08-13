import PropTypes from 'prop-types';

import './ChatMessage.css';

const ChatMessage = (props) => {
  return (
    <div className={`message-container ${props.senderClass}`}>
      <img src={props.photoURL} referrerpolicy="no-referrer" />
      <div className="message">
        <h2>{props.senderName}</h2>
        <p>{props.children}</p>
      </div>
    </div>
  );
};

ChatMessage.propTypes = {
  senderClass: PropTypes.oneOf(['sent', 'received']),
  photoURL: PropTypes.string,
  senderName: PropTypes.string,
  children: PropTypes.string
};

export default ChatMessage;
