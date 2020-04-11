import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import JobTypeAppStore from './syncStore/store'
import App from './App'

// get store from the server
const state = window.__STATE__;
delete window.__STATE__;
const store = JobTypeAppStore(state);

hydrate(<React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('app')
);
