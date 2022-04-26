import { ChatLobby } from './pages'

function ChatApp () {
    const renderChat = {
        'lobby': <ChatLobby />,
    }
    return(
        renderChat['lobby']
    );
};

export { ChatApp };