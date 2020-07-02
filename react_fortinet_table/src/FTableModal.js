import React , { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input} from 'reactstrap';

function FTableModal (props) {  

  const defaultItem = props.modalAction === "create" ? { 
    name: "", 
    type: "", 
    profile : "", 
    api_access: "", 
    admons : "", 
    trusted_ipv4: ""
  } : props.initItem ;
  const [name, setName] = useState( defaultItem.name );
  const [type, setType] = useState( defaultItem.type );
  const [profile, setProfile] = useState( defaultItem.profile );
  const [api_access, setApi_access] = useState( defaultItem.api_access );
  const [admons, setAdmons] = useState( defaultItem.admons );
  const [trusted_ipv4, setTrusted_ipv4] = useState( defaultItem.trusted_ipv4 );

  const submitItem = () => {
    props.submitModalItem(props.modalAction, { name, type, profile, admons,  
      api_access: api_access.split(",").map(item => item.trim()) ,
      trusted_ipv4: trusted_ipv4.split(",").map(item => item.trim()) } );
  }
    
  return <Modal isOpen={props.open} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle}>{`${props.modalAction === "create" ? "Create" : "Edit"} Item`}</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input disabled={props.modalAction === "edit"} type="text" 
              onChange={ (e) => setName(e.target.value) }
              value={name}  placeholder="name"/>
          </FormGroup>
          <FormGroup>
            <Label for="type">Type</Label>
            <Input type="text" onChange={ (e) => setType(e.target.value) }
              value={type} placeholder="Type" />
          </FormGroup>
          <FormGroup>
            <Label for="profile">Profile</Label>
            <Input type="text" onChange={ (e) => setProfile(e.target.value) }
              value={profile} placeholder="Profile" />
          </FormGroup>
          <FormGroup>
            <Label for="api_access">JSON API Access ( split with , )</Label>
            <Input type="text" onChange={ (e) => setApi_access(e.target.value) }
              value={api_access} placeholder="JSON API Access" />
          </FormGroup>
          <FormGroup>
            <Label for="admons">ADOMS</Label>
            <Input type="text" onChange={ (e) => setAdmons(e.target.value) }
              value={admons} placeholder="ADOMS" />
          </FormGroup>
          <FormGroup>
            <Label for="trusted">Trusted IPv4 Hosts ( split with , )</Label>
            <Input type="text" onChange={ (e) => setTrusted_ipv4(e.target.value) } 
              value={trusted_ipv4} placeholder="Trusted IPv4 Hosts" />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={submitItem}>Submit</Button>{' '}
      </ModalFooter>
    </Modal>
  
}


export default FTableModal;
