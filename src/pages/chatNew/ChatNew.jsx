import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ref as sRef, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { ref, push, update, get } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';

import { changePage } from '../../store/slices/pageSlice';
import { defaultConfig } from '../../firebase/firebaseConfig';
import { storage, db } from '../../firebase/index';

import { NavBar } from '../../components';

import './ChatNew.css';
import { backSvg } from '../../assets';

const ChatNew = () => {
  const dispatch = useDispatch();
  const userUid = useSelector((state) => state.auth.uid);
  const [imgUrl, setImgUrl] = useState(defaultConfig.photoURL);
  const [newChatName, setNewChatName] = useState('');
  const [joinKey, setJoinKey] = useState('');

  const handleImgChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    if (!file) return;

    const storageRef = sRef(storage, `photos/${uuidv4()}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        console.log(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL);
        });
      }
    );
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!newChatName) return;
    const chatName = newChatName;

    const data = { name: newChatName, photoURL: imgUrl, lastMessage: '' };
    const chatKey = push(ref(db, 'chats'), data).key;

    const updates = {};
    updates[`/users/${userUid}/chats/${chatKey}`] = true;
    updates[`/members/${chatKey}`] = { [userUid]: true };
    update(ref(db), updates);
    setNewChatName('');
    dispatch(changePage({ name: 'room', room: { key: chatKey, name: chatName } }));
  };

  const handleJoin = (e) => {
    e.preventDefault();
    if (!joinKey) return;

    get(ref(db, `chats/${joinKey}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const chatName = snapshot.val().name;
          const updates = {};
          updates[`members/${joinKey}/${userUid}`] = true;
          updates[`users/${userUid}/chats/${joinKey}`] = true;
          update(ref(db), updates);
          setJoinKey('');
          dispatch(changePage({ name: 'room', room: { key: joinKey, name: chatName } }));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <NavBar>
        <div
          className="left button button--text"
          onClick={() => dispatch(changePage({ name: 'lobby' }))}>
          <img className="icon icon-blue" src={backSvg} alt="Back to lobby" />
          <span className="text-blue">back</span>
        </div>
        <div className="middle">
          <h1>New Chat</h1>
        </div>
        <div className="right" />
      </NavBar>
      <main id="chat-new">
        <form className="chat-form">
          <h2>Create new chat</h2>
          <p>
            Enter the chat name and receive an ID that can be shared with others to join your chat
          </p>
          <div className="chat-form__container">
            <div className="chat-form__input">
              <input
                type="text"
                placeholder="Chat name"
                value={newChatName}
                onInput={(e) => setNewChatName(e.target.value)}
              />
              <div className="image-upload">
                <label htmlFor="file-input">
                  <img src={imgUrl} />
                </label>
                <input id="file-input" type="file" accept="image/*" onChange={handleImgChange} />
              </div>
            </div>
            <button onClick={handleCreate}>create</button>
          </div>
        </form>
        <form className="chat-form">
          <h2>Join a chat</h2>
          <p>Enter a chat ID and start a conversation</p>
          <div className="chat-form__container">
            <div className="chat-form__input">
              <input
                type="text"
                placeholder="Chat ID"
                value={joinKey}
                onInput={(e) => setJoinKey(e.target.value)}
              />
            </div>
            <button onClick={handleJoin}>join</button>
          </div>
        </form>
      </main>
    </>
  );
};

export default ChatNew;
