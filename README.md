# Firechat
A chat app built with React 18 and Firebase.

# Initial Setup
1. Init project: `npm init vite firechat`
    - Select React whitout TypeScript
2. Enter project folder: `cd firechat && npm install`
    - Make sure that React version in `package.json` is `^18.0.0`
3. Install React router and redux: `npm install --save react-router-dom redux react-redux`
4. Remove unnecessary files:
    - On `index.html`: Remove favicon import (line 5)
    - On `src/` run: `rm App.css favicon.svg logo.svg`
    - On `src/App.jsx`: Remove all imports and `div` content
