import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import JobTypeAppStore from './syncStore/store';
import App from './App';

const store = JobTypeAppStore();
render(
  <Provider store={store} > <App /> </Provider>,
  document.querySelector('#app')
);