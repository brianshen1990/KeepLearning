import React, { useState } from 'react';
import { Provider } from 'react-redux';
import counterStore from './countStore/store'
import Display from './display'

function reduxSimpleDemo() {
  return <React.Fragment>
      <Provider store={counterStore}>
        <br />
        <div>Test React Redux with Hook</div>
        <Display /><br />
        <Display /><br />
        <Display /><br />
      </Provider>
    </React.Fragment>;
}

export default reduxSimpleDemo;
