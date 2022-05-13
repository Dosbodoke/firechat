# Firechat

A chat app built with React 18 and Firebase.

The idea came from an video from the youtube channel **Fireship**, after whatching, I decided to make a version with more features.

**This documentation is a guide of how this application was built.**

[![Fireship video](https://img.youtube.com/vi/zQyrwxMPm88/0.jpg)](https://www.youtube.com/watch?v=zQyrwxMPm88&t)

# Initial Setup

1. Init project: `npm init vite firechat`
   - Select React whitout TypeScript
2. On the project folder: `npm install`
   - Make sure that React version in `package.json` is `^18.0.0`
3. Remove unnecessary files/imports:
   - On `index.html`: Remove favicon import (line 5)
   - On `src/` remove: `App.css favicon.svg logo.svg`
   - In `src/App.jsx`: Remove all imports and return content
4. Rearrange the folder structure to look like this.

```
    src/
    ├─ app/
    │  ├─ App.jsx
    ├─ index.css
    ├─ main.jsx
    .gitignore
    index.html
    package-lock.json
    package.json
    README.md
    vite.config.js
```

# Building the UI

Firstly I build the [UI in Figma](https://www.figma.com/file/xWSEVZcheB2anMFPPOZ42B/Firechat?node-id=0%3A1) to don't worry about the creative process when coding the UI.

Then create the following folders inside src

- assets: Will hold the images and svg's
- components: Reusable components
- pages: Components that represent an different page

# Store

For the store will be used **Redux toolkit**, for that, run `npm install --save @reduxjs/toolkit react-redux`

Then create an `store.js` inside src folder with te following code

```
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {},
})
```

The **slices** will live along the correspondent component.

# Firebase

Follow the instruction to [setup firebase on a js project](https://firebase.google.com/docs/web/setup)

The config will live on an untracked file `config.js`

For this projects, the following services will be used:

- Realtime Database: Choosed based on the [firebase recommendation](https://firebase.google.com/docs/database/rtdb-vs-firestore?#which_database_does_firebase_recommend) for the needs of this project.
- Authentication

**RESOURCES**

- [React Best Practices](https://www.freecodecamp.org/news/best-practices-for-react/)
- [Figma Project](https://www.figma.com/file/xWSEVZcheB2anMFPPOZ42B/Firechat?node-id=0%3A1)
- [Russo One Font](https://fonts.google.com/specimen/Russo+One#standard-styles)
  - The font link was added in `index.html`, in order to be used in multiples css files.
- [SVG icons](https://www.svgrepo.com/)
- [Convert HEX color to CSS filter](https://codepen.io/sosuke/pen/Pjoqqp)
- [Style guide](https://material.io/design/color/dark-theme.html#properties)
