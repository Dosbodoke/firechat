import { ChatLobby, ChatRoom, ChatNew } from './pages'

function ChatApp () {
    const renderChat = {
        'lobby': <ChatLobby />,
        'room': <ChatRoom />,
        'new': <ChatNew />,
    }
    return(
        renderChat['room']
    );
};

export { ChatApp };