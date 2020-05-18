import React, { Suspense } from 'react';
import { Nav, NavItem, Row, Col } from 'reactstrap';
import { HashRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";
const SCIndex = React.lazy( () => import('./SelfCheck/SCIndex') );
const Dashboard = React.lazy( () => import('./Dashboard/Dashboard') );
import CommonCatch from './Common/CommonFallBack';
import DemoResource from './DemoResource/DemoResource';
import DemoResourceAnother from './DemoResource/DemoResourceAnother';

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
            <NavItem>
              <NavLink to="/DemoResource" strict>
                <div></div>
                <i className="fas fa-sort"></i>&nbsp;ResourceCache
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
            <Route path="/DemoResource">
              <Suspense fallback={<div>Loading...</div>}>
                <Row>
                  <Col md={6}><DemoResource /></Col>
                  <Col md={6}><DemoResourceAnother /></Col>
                </Row>
              </Suspense>
            </Route>
            <Route path="/SelfCheck">
              {/* <Suspense fallback={<div>Loading...</div>}> */}
              <CommonCatch >
                <SCIndex />
              </CommonCatch>
              {/* </Suspense> */}
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
