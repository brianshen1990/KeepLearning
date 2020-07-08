import React, { useState } from 'react';
import { Provider } from 'react-redux';

import JobTypeAppStore from './syncStore/store'
import JobShow from './JobShow'

function reduxDemo() {

  return <React.Fragment>
      <Provider store={JobTypeAppStore}>
        <br />
        <div>Test React Redux with Hook</div>
        <div><hr></hr>01<JobShow name='01'/></div>
        <div><hr></hr>02<JobShow name='02'/></div>
      </Provider>
    </React.Fragment>;
}

export default reduxDemo;
