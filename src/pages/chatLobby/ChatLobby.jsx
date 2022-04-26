import { useState } from 'react';

import froidJpg from '../../assets/froid.jpg'

import './ChatLobby.css'
import NavBar from '../../components/navbar/NavBar';
import EyeClosed from '../../assets/eye-closed.svg'
import EyeOpen from '../../assets/eye-open.svg'
import LogoutSvg from '../../assets/logout.svg'
import PlusSvg from '../../assets/plus.svg'

import { ChatContact } from '../../components';

function ChatLobby () {
    const [idVisible, setIdVisible] = useState(true)
    return (
        <>
        <NavBar>
            <div className="navbar-left navbar-button">
                <img className="icon icon-blue" src={LogoutSvg} alt="log-out" />
            </div>
            <div>
                <h1>Juan Andrade</h1>
                <div className={idVisible ? '' : 'hide-id'} id='id-display'>
                    <small className='navbar-button'>Your ID: k12n39ianwa4na</small>
                    <img 
                      className='icon navbar-button'
                      src={idVisible ? EyeOpen : EyeClosed} 
                      onClick={() => setIdVisible(!idVisible)} 
                      alt="Toggle view"
                    />
                </div>
            </div>
            <div className="navbar-right navbar-button">
                <img className="icon icon-blue" src={PlusSvg} alt="new chat" />
            </div>
        </NavBar>
        <div className='scroll-element'>
            <ChatContact
                image={froidJpg}
                name='Froid'
                message='Fechou então, da um salve ai pra galera do firechat. Fechou então, da um salve ai pra galera do firechat. Fechou então, da um salve ai pra galera do firechat. Fechou então, da um salve ai pra galera do firechat. '
                />
            <ChatContact
                image={froidJpg}
                name='Froid'
                message='Fechou então, da um salve ai pra galera do firechat.'
                />
            <ChatContact
                image={froidJpg}
                name='Froid'
                message='Fechou então, da um salve ai pra galera do firechat.'
                />
            <ChatContact
                image={froidJpg}
                name='Froid'
                message='Fechou então, da um salve ai pra galera do firechat.'
                />
            <ChatContact
                image={froidJpg}
                name='Froid'
                message='Fechou então, da um salve ai pra galera do firechat.'
                />
            <ChatContact
                image={froidJpg}
                name='Froid'
                message='Fechou então, da um salve ai pra galera do firechat.'
                />
            <ChatContact
                image={froidJpg}
                name='Froid'
                message='Fechou então, da um salve ai pra galera do firechat.'
                />
            <ChatContact
                image={froidJpg}
                name='Froid'
                message='Fechou então, da um salve ai pra galera do firechat.'
                />
            <ChatContact
                image={froidJpg}
                name='Froid'
                message='Fechou então, da um salve ai pra galera do firechat.'
                />
            <ChatContact
                image={froidJpg}
                name='Froid'
                message='Fechou então, da um salve ai pra galera do firechat.'
                />
            <ChatContact
                image={froidJpg}
                name='Froid'
                message='Fechou então, da um salve ai pra galera do firechat.'
                />
            <ChatContact
                image={froidJpg}
                name='Froid'
                message='Fechou então, da um salve ai pra galera do firechat.'
                />
            <ChatContact
                image={froidJpg}
                name='Froid'
                message='Fechou então, da um salve ai pra galera do firechat.'
                />
            <ChatContact
                image={froidJpg}
                name='Froid'
                message='Fechou então, da um salve ai pra galera do firechat.'
                />
            <ChatContact
                image={froidJpg}
                name='Froid'
                message='Fechou então, da um salve ai pra galera do firechat.'
                />
            <ChatContact
                image={froidJpg}
                name='Froid'
                message='Fechou então, da um salve ai pra galera do firechat.'
                />

        </div>
        </>
    );
}

export default ChatLobby