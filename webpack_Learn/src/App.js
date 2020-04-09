import React, { Suspense } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { HashRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";
const SCIndex = React.lazy( () => import('./SelfCheck/SCIndex') );

import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <Router>
      <div className="ais_main">
        <div className="ais_main_nav">
          <div className="_title">
            Test Webpack
          </div>
          <div className="_logo _logo_circle">
            <div className="_logo_inner _logo_circle">
              <div className="_logo_inner_img_div _logo_circle"> 
                <div className="_logo_inner_img"></div>
              </div>
            </div>
          </div>
          <Nav vertical>
            <NavItem>
              <NavLink to="/SelfCheck" strict>
                <div></div>
                <i className="fas fa-cloud-upload-alt"></i>&nbsp;上传文件
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <div className="ais_main_content">
          <Switch>
            <Route path="/SelfCheck">
              <Suspense fallback={<div>Loading...</div>}>
                <SCIndex />
              </Suspense>
            </Route>
            <Route path="/">
              <Redirect to="/SelfCheck" />
            </Route>
          </Switch>
        </div>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
