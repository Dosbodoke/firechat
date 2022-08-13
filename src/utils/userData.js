import { get, ref, update, set } from 'firebase/database';
import { db } from '../firebase';

const updatePhotoUrl = async (currentURL, storedURL, userRef) => {
  if (currentURL != storedURL) await update(userRef, { photoURL: currentURL });
};

const getShortName = (name) => {
  if (!name) {
    throw Error(`name can't be empty string.`);
  }

  const nameArr = name.split(' ');
  return nameArr.length === 1 ? nameArr[0] : `${nameArr[0]} ${nameArr[nameArr.length - 1]}`;
};

const saveUser = async (name, photoURL, userRef) => {
  await set(userRef, { name, photoURL });
};

const userData = async (uid, name, photoURL) => {
  const data = {
    uid,
    photoURL
  };

  try {
    const userRef = ref(db, `users/${uid}`);
    const dbUser = await get(userRef).then((snapshot) =>
      snapshot.exists ? snapshot.val() : undefined
    );

    if (dbUser) {
      await updatePhotoUrl(photoURL, dbUser.photoURL, userRef);
      data.name = dbUser.name;
    } else {
      const shortName = getShortName(name);
      await saveUser(shortName, photoURL, userRef);
      data.name = shortName;
    }

    return data;
  } catch (err) {
    console.log(err);
  }
};

export default userData;
