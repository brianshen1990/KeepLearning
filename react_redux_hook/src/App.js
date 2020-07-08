import React, { useState } from 'react';
import classnames from 'classnames';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

import ContextApp from "./contextDemo/contextDemo";
import ReactSimpleDemo from "./reduxSimpleDemo/reactSimpleDemo";

function App() {
  const [activeTab, setActiveTab] = useState('1');
  const toggle = tab => { if(activeTab !== tab) setActiveTab(tab); }

  return (
    <div className="root">
      <Nav tabs>
        <NavItem>
          <NavLink className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }} >Redux</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}>Context</NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <ReactSimpleDemo />
        </TabPane>
        <TabPane tabId="2">
          <ContextApp />
        </TabPane>
      </TabContent>
    </div>
  );


}

export default App;
