import { ref, get, set, update, child } from 'firebase/database';
import { db } from './firebase';

const dbRef = ref(db);

const updateData = (node, data) => {
  update(child(dbRef, node), data);
};

const setData = (node, data) => {
  set(child(dbRef, node), data);
};

const getData = async (node) => {
  const snapshot = await get(child(dbRef, node)).then((snapshot) => {
    return snapshot;
  });
  return snapshot.exists() ? snapshot.val() : undefined;
};

export { updateData, setData, getData };
