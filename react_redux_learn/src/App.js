import React from 'react';
import { Provider } from 'react-redux';
import JobTypeAppStore from './syncStore/store'
import JobShow from './JobShow'

function App() {
  return (
    <Provider store={JobTypeAppStore}>
      <div>Test React Redux with Hook</div>
      <div><hr></hr>01<JobShow name='01'/></div>
      <div><hr></hr>02<JobShow name='02'/></div>
    </Provider>
  );
}

export default App;
