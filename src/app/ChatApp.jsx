import { useSelector } from 'react-redux';

import { ChatLobby, ChatRoom, ChatNew } from '../pages';

function ChatApp() {
  const page = useSelector((state) => state.page.page);
  const renderPage = {
    lobby: <ChatLobby />,
    room: <ChatRoom />,
    new: <ChatNew />
  };

  return renderPage[page];
}

export { ChatApp };
