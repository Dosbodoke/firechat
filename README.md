# Firechat

A chat app built with React 18 and Firebase.

The idea came after watch and built the application from this video, from the youtube channel [**Fireship**](https://www.youtube.com/c/Fireship).

[![Fireship video](https://img.youtube.com/vi/zQyrwxMPm88/0.jpg)](https://www.youtube.com/watch?v=zQyrwxMPm88&t)

I decided to make a version with multiple rooms.

## Initial Setup

1. Init project: `npm init vite firechat`
   - Select React whitout TypeScript
2. On the project folder: `npm install`
   - Make sure that React version in `package.json` is `^18.0.0`
3. Clean boilerplate code:
4. Rearrange the folder structure to look like this.

```text
    src/
    ├─ app/
    │  ├─ App.jsx
    ├─ assets/       # Hold project images and svg
    ├─ components/   # JSX reusable componets
    ├─ firebase/     # Initialize firebase auth, db, storage
    ├─ pages/
    ├─ store/        # Hold redux store and slices
    ├─ index.css
    ├─ main.jsx
    .gitignore
    .prettierrc
    index.html
    package-lock.json
    package.json
    README.md
    vite.config.js
```

## Firebase

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

export { firebaseConfig };

```

For this projects, the following services will be used, so enable them on firebase console:

- Realtime Database: Choosed based on the [firebase recommendation](https://firebase.google.com/docs/database/rtdb-vs-firestore?#which_database_does_firebase_recommend) for the needs of this project.
  **Database schema example**

  ```json
  {
     "chats": {
       ${chatUid}: {
         "lastMessage": "string",
         "name": "string",
         "photoURL": "string"
       },
     },
     "members": {
       ${chatUid}: {
         ${userUid}: true,
       },
     },
     messages: {
       ${chatUid}: {
         ${messageUid}: {
           "createdAt": int (timestamp),
           "message": "string",
           "senderUid": "string"
         }
       }
     },
     users: {
       ${userUid}: {
         "chats": {
           ${chatUid}: true,
         },
         "name": "string",
         "photoURL": "string"
       }
     }
  }
  ```

- Authentication ( Google auth )
- Storage: To save user and groups profile images

## Building the UI

Firstly I build the [UI in Figma](https://www.figma.com/file/xWSEVZcheB2anMFPPOZ42B/Firechat?node-id=0%3A1) to don't worry about the creative process when coding the UI.

Then create the following folders inside src

- assets: Will hold the images and svg's
- components: Reusable components
- pages: Components that represent an different page

## Store

For the store will be used **Redux toolkit**, for that, run `npm install --save @reduxjs/toolkit react-redux`

Then create an `store.js` inside src folder with te following code

The **slices** will live along the correspondent component.

## RESOURCES

- [React Best Practices](https://www.freecodecamp.org/news/best-practices-for-react/)
- [Figma Project](https://www.figma.com/file/xWSEVZcheB2anMFPPOZ42B/Firechat?node-id=0%3A1)
- [Russo One Font](https://fonts.google.com/specimen/Russo+One#standard-styles)
  - The font link was added in `index.html`, in order to be used through multiples css files.
- [SVG icons](https://www.svgrepo.com/)
- [UI Style guide](https://material.io/design/color/dark-theme.html#properties)
- [Convert HEX color to CSS filter](https://codepen.io/sosuke/pen/Pjoqqp)
