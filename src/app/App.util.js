import { ref, get, set, update } from 'firebase/database';

import { defaultRoomConfig } from '../firebase/firebaseConfig';
import { db } from '../firebase/firebase';

function getShortName(name) {
  if (!name) {
    throw Error(`name can't be empty string.`);
  }

  const nameArr = name.split(' ');
  return nameArr.length === 1 ? nameArr[0] : `${nameArr[0]} ${nameArr[nameArr.length - 1]}`;
}

async function updatePhotoIfUrlIsDifferent(url1, url2, userRef) {
  if (url1 != url2) await update(userRef, { photoURL: url1 });
}

async function storeUser(uid, name, photoURL, userRef) {
  const shortName = getShortName(name);
  await set(userRef, { name: shortName, photoURL });

  if (defaultRoomConfig.key) {
    const updates = {};
    updates[`/users/${uid}/chats/${defaultRoomConfig.key}`] = true;
    updates[`/members/${defaultRoomConfig.key}`] = { [uid]: true };
    await update(ref(db), updates);
  }

  return { shortName: shortName };
}

const checkUserData = async (uid, name, photoURL) => {
  const userData = {
    uid: uid,
    photoURL: photoURL
  };

  try {
    const userRef = ref(db, `users/${uid}`);
    const storedUser = await get(userRef).then((snapshot) =>
      snapshot.exists ? snapshot.val() : undefined
    );

    if (storedUser) {
      await updatePhotoIfUrlIsDifferent(photoURL, storedUser.photoURL, userRef);
      userData.name = storedUser.name;
      return userData;
    }

    const { shortName } = await storeUser(uid, name, photoURL, userRef);
    userData.name = shortName;
    return userData;
  } catch (error) {
    console.log(error);
  }
};

export default checkUserData;
