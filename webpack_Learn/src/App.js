import React, { Suspense } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { HashRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";
const SCIndex = React.lazy( () => import('./SelfCheck/SCIndex') );
const Dashboard = React.lazy( () => import('./Dashboard/Dashboard') );

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
              <NavLink to="/Dashboard" strict>
                <div></div>
                <i className="fas fa-sort"></i>&nbsp;Dashboard
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/SelfCheck" strict>
                <div></div>
                <i className="fas fa-cloud-upload-alt"></i>&nbsp;Upload File
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <div className="ais_main_content">
          <Switch>
            <Route path="/Dashboard">
              <Suspense fallback={<div>Loading...</div>}>
                <Dashboard />
              </Suspense>
            </Route>
            <Route path="/SelfCheck">
              <Suspense fallback={<div>Loading...</div>}>
                <SCIndex />
              </Suspense>
            </Route>
            <Route path="/">
              <Redirect to="/Dashboard" />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
