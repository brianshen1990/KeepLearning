import React , { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
function CommonTab(props) {
  // props : Sample " {tabs: [ {name: xxx, Render : xxxx} ]}
  const { tabs } = props;
  const [activeTab, setActiveTab] = useState('1');

  const toggle = ( tab ) => {
    setActiveTab(tab);
  };
  return <React.Fragment>
    <Nav tabs className="ais_tab">
        { tabs && tabs.map( ( item, index) => {
          return <NavItem key={item.name}>
            <NavLink href="#"
              className={ activeTab === `${index+1}` ?  'active' : null }
              onClick={() => { toggle(`${index+1}`); }}>
              &nbsp;&nbsp;{item.name}&nbsp;&nbsp;
              <div></div>
            </NavLink>
          </NavItem>
        }) }
    </Nav>
    <TabContent activeTab={activeTab}>
      { tabs && tabs.map( (item, index) => {
        const Render = item.Render;
        return <TabPane tabId={`${index+1}`} key={item.name}>
          <Render />
        </TabPane>
      }) }
    </TabContent>
  </React.Fragment>
}

export default CommonTab;