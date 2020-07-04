import React , { useState, useEffect } from 'react';
import { Button, Table, Input, InputGroup, InputGroupAddon, InputGroupText,
  UncontrolledButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { CaretUpFill, CaretDownFill, TrashFill, Plus, 
      Table as TableIcon, GearFill, PencilSquare, Search as SearchIcon, Front
       } from 'react-bootstrap-icons';

import FTableRow from "./FTableRow";
import FTableModal from "./FTableModal";

const ColumnMapping = {
  name: "Name",
  type: "Type",
  profile: "Profile",
  api_access: "JSON API Access",
  admons: "ADOMS",
  trusted_ipv4: "Trusted IPv4 Hosts",
}

const InitColumns = [ "name", "type", "profile", "api_access", "admons", "trusted_ipv4" ];

function FTable () {  

  const [dataset, setDataset] = useState([]);
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [columns, setColumns] = useState([...InitColumns]);
  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  const [open, setOpen] = useState(false);
  const [modalAction, setModalAction] = useState("create");
  const [initItem, setInitItem] = useState(null);

  useEffect( ()=> {
    setDataset(Dataset);
  }, [] )

  const selectChange = (name) => {
    if ( selected.indexOf(name) >= 0 ) {
      setSelected( selected.filter(item => item!== name) );
    } else {
      setSelected( [...selected, name] );
    }
  }
  const cloneItem = () => {
    const datasetClone = [...dataset];
    datasetClone.filter( item => selected.indexOf(item.name) >= 0 )
      .map( item => {
        const ret = Object.assign({}, item);
        ret.name += "_copy";
        while ( true ) { 
          let duplicated = datasetClone.filter( item => item.name === ret.name );
          if ( duplicated.length === 0 ) {
            break;
          } else {
            ret.name += "_copy";
          }
        }
        datasetClone.push(ret);
      });
    setDataset( [...datasetClone] );
    setSelected([]);
  }
  const deleteItem = () => {
    const cloneItems = dataset.filter( item => selected.indexOf(item.name) < 0 );
    setDataset(cloneItems);
    setSelected([]);
  }

  const toggleColumn = (col) => {
    const index = columns.indexOf(col);
    // make sure the order
    const _Compare =  (a,b) => InitColumns.indexOf(a) - InitColumns.indexOf(b) ;
    if ( index >= 0 ) {
      const cloneColumns = columns.filter( item => item.indexOf(col) < 0 );
      setColumns( cloneColumns.sort( _Compare ) );
    } else {
      setColumns([...columns, col].sort( _Compare ) );
    }
  }

  const changeSort = (col) => {
    if ( sortField === col ) {
      setSortOrder( sortOrder === "asc" ? "desc" : "asc" );
    } else {
      setSortOrder("asc");
      setSortField(col);
    }
  }

  const openCreateEditModal = (action, name) => {
    let initData = null;
    if ( action === "create" ) {
      setInitItem(null);
      setModalAction("create");
      setOpen(true);
    } else{
      if ( name ) {
        initData = dataset.filter( item => item.name===name ); // click the name link 
      } else {
        initData = dataset.filter( item => item.name===selected[0] );
      }
      if ( initData && initData.length > 0 ) {
        initData = initData[0];
        setModalAction("edit");
        setInitItem({
          ...initData, 
          api_access: initData.api_access.join(","),
          trusted_ipv4: initData.trusted_ipv4.join(",")});
        setOpen(true);
      }
    }
  }

  const toggleModal = () => {
    setOpen(!open);
  }

  const submitModalItem = (action, newItem) => {
    if ( action === "create" ) {
      if ( ( !newItem.name ) || newItem.name === "" ) {
        alert("name required!")
      } else if ( dataset.filter( item => item.name === newItem.name ).length > 0 ) {
        alert("name duplicated");
      } else {
        setDataset([...dataset, newItem]);
        toggleModal();
      }
    } else {
      const newDataset = dataset.map( (item) => {
        if ( item.name !== newItem.name ) {
          return item;
        } else {
          return newItem;
        }
      });
      setDataset(newDataset);
      toggleModal();
    }
  }

  const renderOp = () => {
    return <div className="forti-table-op">
      <div>
        <Button size="sm" onClick={() => openCreateEditModal("create")}>
          <strong><Plus /></strong>&nbsp;Create New
        </Button>
        { open && <FTableModal initItem={initItem} modalAction={modalAction}
            open={open} toggle={toggleModal} submitModalItem={submitModalItem} /> }
        <Button size="sm" onClick={ () => openCreateEditModal("edit")}  disabled={! (selected.length === 1 )}>
          <strong><PencilSquare /></strong>&nbsp;Edit
        </Button>
        <Button size="sm" onClick={cloneItem} disabled={!selected.length > 0}>
          <strong><Front /></strong>&nbsp;Clone
        </Button>
        <Button size="sm" onClick={deleteItem} disabled={!selected.length > 0} >
          <strong><TrashFill /></strong>&nbsp;Delete
        </Button>
        <Button size="sm">
          <strong><TableIcon /></strong>&nbsp;Table View
        </Button>
  
        <UncontrolledButtonDropdown size="sm" >
          <DropdownToggle caret>
            <strong><GearFill /></strong>&nbsp;Column Settings
          </DropdownToggle>
          <DropdownMenu size="sm">
            { InitColumns.map( item => 
              item === "name" ? null : 
              <DropdownItem size="sm" 
                onClick={ () => toggleColumn(item) } >
                { `${ columns.indexOf(item) >= 0 ? "Hide": "Show" } ${ColumnMapping[item]}` }
              </DropdownItem>) }
          </DropdownMenu>
        </UncontrolledButtonDropdown>

      </div>
      <div className="forti-table-op-search">
        <InputGroup size="sm">
          <Input value={search} onChange={ e => setSearch(e.target.value)}  />
          <InputGroupAddon addonType="append">
            <InputGroupText><strong><SearchIcon /></strong></InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  }

  const renderTable = () => {
    return <Table responsive striped className="forti-table">
      <thead> 
        <tr>
          <td className="forti-table-first-col"></td>
            { columns.map( item => <td key={item} onClick={ () => changeSort(item)}>
                { sortField === item && ( sortOrder === "asc" ? <CaretUpFill /> : <CaretDownFill /> )} 
                { ColumnMapping[item] || item }
              </td> ) }
        </tr>
      </thead>
      <tbody>
        { dataset.filter( item => search ? ( item.name.indexOf(search) >= 0 ) : true )
            .sort( (a, b) => { 
              // return 1;
              let ret = a[sortField] > b[sortField] ? 1 : -1;
              if ( sortOrder === "desc" ) {
                ret = -ret;
              }
              return ret;
            })
            .map( item => FTableRow({item, selected, selectChange, columns, openCreateEditModal}) ) }
      </tbody>
    </Table>
  }

  return <React.Fragment>
    { renderOp() }
    { renderTable() }
  </React.Fragment>
}


export default FTable;

const Dataset = [
  { 
    name: "admin", type: "LOCAL", profile : "Super User", api_access: ["None"], admons : "All ADOMS", trusted_ipv4: ["0.0.0.0/0.0.0.0"] 
  },
  { 
    name: "cxu", type: "LDAP", profile : "Super User", api_access: ["Read", "Write"], admons : "All ADOMS", trusted_ipv4: ["0.0.0.0/0.0.0.0"]
  },
  { 
    name: "cxu1", type: "LDAP", profile : "Super User", api_access: ["Read", "Write"], admons : "All ADOMS", trusted_ipv4: ["0.0.0.0/0.0.0.0"]
  },
  { 
    name: "wliu", type: "LDAP", profile : "Super User", api_access: ["None"], admons : "All ADOMS", trusted_ipv4: ["0.0.0.0/0.0.0.0"]
  },
  { 
    name: "wliu1", type: "LDAP", profile : "Super User", api_access: ["None"], admons : "All ADOMS", trusted_ipv4: ["0.0.0.0/0.0.0.0"]
  },
  { 
    name: "thuang", type: "LDAP", profile : "Super User", api_access: ["None"], admons : "All ADOMS", trusted_ipv4: ["0.0.0.0/0.0.0.0"]
  },
  { 
    name: "thuang1", type: "LDAP", profile : "Super User", api_access: ["None"], admons : "All ADOMS", trusted_ipv4: ["0.0.0.0/0.0.0.0"]
  },
  { 
    name: "jerryzhang", type: "LDAP", profile : "Super User", api_access: ["Read"], admons : "All ADOMS", trusted_ipv4: ["0.0.0.0/0.0.0.0"]
  },
  { 
    name: "jerryzhang1", type: "LDAP", profile : "Super User", api_access: ["Read"], admons : "All ADOMS", trusted_ipv4: ["0.0.0.0/0.0.0.0"]
  },
  { 
    name: "agong", type: "LDAP", profile : "Super User", api_access: ["None"], admons : "All ADOMS", trusted_ipv4: ["0.0.0.0/0.0.0.0"]
  },
  { 
    name: "agong1", type: "LDAP", profile : "Super User", api_access: ["None"], admons : "All ADOMS", trusted_ipv4: ["0.0.0.0/0.0.0.0"]
  },
  { 
    name: "alankang", type: "LDAP", profile : "Super User", api_access: ["None"], admons : "All ADOMS", trusted_ipv4: ["0.0.0.0/0.0.0.0"]
  },
  { 
    name: "alankang1", type: "LDAP", profile : "Super User", api_access: ["None"], admons : "All ADOMS", trusted_ipv4: ["0.0.0.0/0.0.0.0"]
  },
  { 
    name: "dewenli", type: "LDAP", profile : "Super User", api_access: ["None"], admons : "All ADOMS", trusted_ipv4: ["0.0.0.0/0.0.0.0"]
  },
  { 
    name: "dewenli1", type: "LDAP", profile : "Super User", api_access: ["None"], admons : "All ADOMS", trusted_ipv4: ["0.0.0.0/0.0.0.0"]
  },
  { 
    name: "bcui1", type: "LDAP", profile : "Super User", api_access: ["None"], admons : "All ADOMS", trusted_ipv4: ["0.0.0.0/0.0.0.0"]
  }
];