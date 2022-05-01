import { ChatLobby, ChatRoom} from './pages'

function ChatApp () {
    const renderChat = {
        'lobby': <ChatLobby />,
        'room': <ChatRoom />
    }
    return(
        renderChat['room']
    );
};

export { ChatApp };