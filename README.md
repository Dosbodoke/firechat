# Firechat

*A chat app built with React 18 and Firebase*

This project was built with the objective of being documented and taught in a video on Youtube

[![FIRECHAT Tutorial](https://img.youtube.com/vi/ztIdPnCYmcI/0.jpg)](https://www.youtube.com/watch?v=ztIdPnCYmcI)

The idea came after watch and built the application on this video, from the youtube channel [**Fireship**](https://www.youtube.com/c/Fireship).

[![Fireship video](https://img.youtube.com/vi/zQyrwxMPm88/0.jpg)](https://www.youtube.com/watch?v=zQyrwxMPm88&t)

So I decided to make a version with multiple rooms.

## Setup

Follow the instruction to [setup firebase on a js project](https://firebase.google.com/docs/web/setup)

The config will live on an untracked file `src/firebase/firebaseConfig.js` with this code on it.

```JavaScript
const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: ''
};

const defaultRoomConfig = {
  key: '',
  photoURL: '' // Url pointing to the photo uploaded on firebase storage, it will be the default photo fow new chats
}

export { firebaseConfig, defaultRoomConfig };
```

For this projects, the following services will be used, so enable them on firebase console:

- Realtime Database: Choosed based on the [firebase recommendation](https://firebase.google.com/docs/database/rtdb-vs-firestore?#which_database_does_firebase_recommend) for the needs of this project.
  **Database schema example**

  ```json
  {
    "chats": {
      "${chatUid}": {
        "lastMessage": "string",
        "name": "string",
        "photoURL": "string"
      }
    },
    "members": {
      "${chatUid}": {
        "${userUid}": true
      }
    },
    "messages": {
      "${chatUid}": {
        "${messageUid}": {
          "createdAt": "int (timestamp)",
          "message": "string",
          "senderUid": "string"
        }
      }
    },
    "users": {
      "${userUid}": {
        "chats": {
          "${chatUid}": true
        },
        "name": "string",
        "photoURL": "string"
      }
    }
  }
  ```

- Authentication ( Google auth )
- Storage: To save user and groups profile images

## Deploy

Made with firebase hosting following the vite instruction.

[Tutorial](https://vitejs.dev/guide/static-deploy.html#google-firebase)

## RESOURCES

- [React Best Practices](https://www.freecodecamp.org/news/best-practices-for-react/)
- [Figma Project](https://www.figma.com/file/xWSEVZcheB2anMFPPOZ42B/Firechat?node-id=0%3A1)
- [Russo One Font](https://fonts.google.com/specimen/Russo+One#standard-styles)
  - The font link was added in `index.html`, in order to be used through multiples css files.
- [SVG icons](https://www.svgrepo.com/)
- [UI Style guide](https://material.io/design/color/dark-theme.html#properties)
- [Convert HEX color to CSS filter](https://codepen.io/sosuke/pen/Pjoqqp)
- [EsLint + Prettier setup](https://dev.to/knowankit/setup-eslint-and-prettier-in-react-app-357b)
