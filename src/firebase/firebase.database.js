import {
  ref,
  get,
  set,
  update,
  off,
  onChildAdded,
  onChildChanged,
  onChildRemoved,
  onValue,
  push
} from 'firebase/database';
import { db } from './firebase';

export const updateData = async (path, data) => {
  update(ref(db, path), data);
};

export const setData = async (path, data) => {
  set(ref(db, path), data);
};

export const pushData = async (path, data) => {
  push(ref(db, path), data);
};

export const getData = async (path) => {
  const snapshot = await get(ref(db, path)).then((snapshot) => {
    return snapshot;
  });
  return snapshot.exists() ? snapshot.val() : undefined;
};

export const listenChildrens = (path, callback) => {
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

export const listenValue = (path, callback) => {
  onValue(ref(db, path), (snapshot) => {
    callback(snapshot);
  });
};

export const removeReference = (path) => {
  off(ref(db, path));
};
