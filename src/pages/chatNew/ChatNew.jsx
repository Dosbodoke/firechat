import { useDispatch } from 'react-redux';
import { ref, push, update } from 'firebase/database';
import { ref as sRef, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';

import { db, storage } from '../../firebase/firebase';
import { changePage } from '../../store/slices/pageSlice';

import NavBar from '../../components/navbar/NavBar';

import './ChatNew.css';
import { backSvg, } from '../../assets';
import { useState } from 'react';

function ChatNew() {
  const dispatch = useDispatch();

  const userUid = useSelector((state) => state.auth.uid);
  const [ newChatName, setNewChatName ] = useState('')
  const [ joinId, setJoinId ] = useState('')
  const [ imgUrl, setImgUrl ] = useState('https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/128/Downloads-icon.png')
  const [ progresspercent, setProgresspercent ] = useState(0);

  const createNewChat = async (e) => {
    e.preventDefault()
    if (!newChatName || newChatName.length < 5) {
      return
    }
    
    const data = {name: newChatName, photoURL: imgUrl, lastMessage: ''}
    const newChatKey = push(ref(db, 'chats'), data).key;
    
    const updates = {}
    updates[`/users/${userUid}/chats/${newChatKey}`] = true
    updates[`/members/${newChatKey}`] = {[userUid]: true}
    update(ref(db), updates)
    
    setNewChatName('')
  }

  const joinChatSubmit = (e) => {
    e.preventDefault()
  }
  
  const handleImgChange = (e) => {
    e.preventDefault()
    const file = e.target.files[0]

    if (!file) return;

    const storageRef = sRef(storage, `photos/${uuidv4()}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed",
      (snapshot) => {
        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgresspercent(progress);
      },
      (error) => {
        console.log(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL)
        });
      }
    );
  }

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
          <h1>New Chat</h1>
        </div>
        <div className="navbar-right "></div>
      </NavBar>
      <div id="chat-new-container">

        <form className="chat-form">
          <h2>Create new chat</h2>
          <p>
            Enter the chat name and receive an ID that can be shared with others to join your chat
          </p>
          <div className="chat-form__container">
            <div className="chat-form__input">
              <input type="text" placeholder='Chat name' value={newChatName} onInput={e => setNewChatName(e.target.value)}/>
              <div className="image-upload">
                <label htmlFor="file-input">
                  <img src={imgUrl}/>
                </label>
                <input id="file-input" type="file" accept="image/*" onChange={handleImgChange}/>
              </div>
            </div>
            <button onClick={createNewChat}>create</button>
          </div>
        </form>

        <form className="chat-form">
          <h2>Join a chat</h2>
          <p>Enter a chat ID and start a conversation</p>
          <div className="chat-form__container">
            <div className="chat-form__input">
              <input type="text" placeholder='Chat ID' value={joinId} onInput={e => setJoinId(e.target.value)}/>
            </div>
            <button onClick={joinChatSubmit}>join</button>
          </div>
        </form>

      </div>
    </>
  );
}

export default ChatNew;
