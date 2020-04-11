import React from 'react';
import JobShow from './JobShow'

const App = () => {
  return <React.Fragment>
      <div>Test React Redux with Hook</div>
      <div><hr></hr>01<JobShow name='01'/></div>
      <div><hr></hr>02<JobShow name='02'/></div>
    </React.Fragment>
};

export default App;
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
