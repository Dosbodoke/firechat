import {
  ref,
  get,
  set,
  update,
  off,
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

export const removeReference = (path) => {
  off(ref(db, path));
};
