import {
  ref,
  get,
  set,
  update,
  off,
  onChildAdded,
  onChildChanged,
  onChildRemoved,
  onValue
} from 'firebase/database';
import { db } from './firebase';

const updateData = async (path, data) => {
  update(ref(db, path), data);
};

const setData = async (path, data) => {
  set(ref(db, path), data);
};

const getData = async (path) => {
  const snapshot = await get(ref(db, path)).then((snapshot) => {
    return snapshot;
  });
  return snapshot.exists() ? snapshot.val() : undefined;
};

const listenChildrens = (path, callback) => {
  onChildAdded(ref(db, path), (data) => {
    callback('added', data);
  });

  onChildChanged(ref(db, path), (data) => {
    callback('changed', data);
  });

  onChildRemoved(ref(db, path), (data) => {
    callback('removed', data);
  });
};

const listenValue = (path, callback) => {
  onValue(ref(db, path), (snapshot) => {
    callback(snapshot);
  });
};

const removeReference = (path) => {
  off(ref(db, path));
};

export { updateData, setData, getData, listenChildrens, listenValue, removeReference };
