import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './store';

import App from './app/App';
import { LayoutContainer } from './components';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <LayoutContainer>
        <App />
      </LayoutContainer>
    </Provider>
  </React.StrictMode>
);
