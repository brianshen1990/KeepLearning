import React from 'react';
import { Button } from 'reactstrap';

function FTableRow (props) {
  const ColorList = [
    "#AA0DFE", "#3283FE", "#85660D", "#782AB6", "#565656", "#1C8356",  
    "#16FF32", "#F7E1A0", "#E2E2E2", "#1CBE4F", "#C4451C", "#DEA0FD",  
    "#FE00FA", "#325A9B", "#FEAF16", "#F8A19F", "#90AD1C", "#F6222E",  
    "#1CFFCE", "#2ED9FF", "#B10DA1", "#C075A6", "#FC1CBF", "#B00068",  
    "#FBE426", "#FA0087"];

  const _columnMapping = (name, item) => {
    const Cache =   {
      name: (item) => { 
        let color = ColorList[0];
        if (item.name) {
          color = ColorList[item.name[0].charCodeAt(0) % 26];
        }
        return <td>
          <div className="forti-avatar" style={{backgroundColor: color}}>
            <strong>{item.name && item.name[0]}</strong>
          </div>
          &nbsp;&nbsp;<a href="#" 
            onClick= {(e) => { e.preventDefault(), props.openCreateEditModal("edit", item.name)}  }>
              {item.name}
            </a>
        </td>
      },
      type: (item) => <td>{item.type}</td>,
      profile: (item) => <td>{item.profile}</td>,
      api_access: (item) => <td>{item.api_access && item.api_access.join(" & ")}</td>,
      admons: (item) => <td>{item.admons}</td>,
      trusted_ipv4: (item) => <td>{item.trusted_ipv4 && item.trusted_ipv4.join(", ")}</td>,
    }
    return Cache[name] && Cache[name](item);
  }

  const renderRow = (item) => {
    return <tr key={item.name}>
      <td className="forti-table-first-col"> 
        <input type="checkbox" 
          checked={props.selected.indexOf(item.name) >= 0} 
          onChange={ () => props.selectChange(item.name)}>
        </input> 
      </td>
      { props.columns.map( key => _columnMapping(key, item) ) }      
    </tr>
  }
  return renderRow(props.item);
}


export default FTableRow;