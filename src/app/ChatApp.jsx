import { useSelector } from 'react-redux';

import { ChatLobby, ChatRoom, ChatNew } from '../pages';

function ChatApp() {
  const pageName = useSelector((state) => state.page.name);
  const renderPage = {
    lobby: <ChatLobby />,
    room: <ChatRoom />,
    new: <ChatNew />
  };

  return renderPage[pageName];
}

export { ChatApp };
