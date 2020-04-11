
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import JobTypeAppStore from './syncStore/store'
import App from './App'

module.exports = function render(initialState) {
  // Model the initial state  
  const store = JobTypeAppStore(initialState);
  let content = renderToString(<Provider store={store} ><App /></Provider>);
  const preloadedState = store.getState();
  return {
    content,
    preloadedState
  };
};

