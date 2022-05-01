# Firechat
A chat app built with React 18 and Firebase.

The idea came from an video from the youtube channel **Fireship**, after whatching, I decided to make a version with more features.

**This documentation is a guide of how this application was built.**

[![Fireship video](https://img.youtube.com/vi/zQyrwxMPm88/0.jpg)](https://www.youtube.com/watch?v=zQyrwxMPm88&t)

# Initial Setup
1. Init project: `npm init vite firechat`
    - Select React whitout TypeScript
2. Enter project folder: `cd firechat && npm install`
    - Make sure that React version in `package.json` is `^18.0.0`
3. Remove unnecessary files:
    - In `index.html`: Remove favicon import (line 5)
    - In `src/` run: `rm App.css favicon.svg logo.svg`
    - In `src/App.jsx`: Remove all imports and return content

# Building the UI
Firstly I build the [UI in Figma](https://www.figma.com/file/xWSEVZcheB2anMFPPOZ42B/Firechat?node-id=0%3A1) to don't worry about the creative process when coding the UI.

# Store
For the store will be used **Redux toolkit**, for that, run `npm install --save @reduxjs/toolkit react-redux`

**RESOURCES**
- [React Best Practices](https://www.freecodecamp.org/news/best-practices-for-react/)
- [Figma Project](https://www.figma.com/file/xWSEVZcheB2anMFPPOZ42B/Firechat?node-id=0%3A1)
- [Russo One Font](https://fonts.google.com/specimen/Russo+One#standard-styles)
    - The font link was added in `index.html`, in order to be used in multiples css files.
- [SVG icons](https://www.svgrepo.com/)
- [Convert HEX color to CSS filter](https://codepen.io/sosuke/pen/Pjoqqp)
- [Style guide](https://material.io/design/color/dark-theme.html#properties)
