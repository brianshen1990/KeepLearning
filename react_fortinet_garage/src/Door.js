var Reflux = require('reflux');
import { DoorStore, DoorActions, MAX_DOOR_WINDOW, DOOR_STATUS } from './DoorStore';
import React from 'react';
import { Button } from 'reactstrap';
import { LightningFill, CircleFill } from 'react-bootstrap-icons';


class TopSensor extends Reflux.Component
{
  constructor(props)
  {
    super(props);
    this.state = {}; // our store will add its own state to the component's
    this.store = DoorStore; // <- just assign the store class itself
  }

  componentDidUpdate() {
    if ( this.state.doorWindow === MAX_DOOR_WINDOW ) {
      DoorActions.reachTop()
    }
  }

  render()
  {
    return <div>
      <LightningFill style={{color: `${this.state.doorWindow === MAX_DOOR_WINDOW ? "red" : "gray"}`}} />
      &nbsp;Top Sensor
    </div>
  }
}

class BottomSensor extends Reflux.Component
{
  constructor(props)
  {
    super(props);
    this.state = {}; // our store will add its own state to the component's
    this.store = DoorStore; // <- just assign the store class itself
  }
  componentDidUpdate() {
    if ( this.state.doorWindow === 0 ) {
      DoorActions.reachBottom()
    }
  }
  render()
  {
    return <div> 
      <LightningFill style={{color: `${this.state.doorWindow === 0 ? "red" : "gray"}`}} />
      &nbsp;Bottom Sensor
    </div>
  }
}

class PhotoSensor extends Reflux.Component
{
  constructor(props)
  {
    super(props);
    this.state = {}; // our store will add its own state to the component's
  }
  render()
  {
    return <Button color="danger" onClick={DoorActions.detect}>Photo Sensor</Button>
  }
}

class ControlButton extends Reflux.Component
{
  constructor(props)
  {
    super(props);
    this.state = {}; // our store will add its own state to the component's
  }
  
  render()
  {
    return <Button onClick={DoorActions.start}>Press</Button>
  }
}

class OperationLight extends Reflux.Component
{
  constructor(props)
  {
    super(props);
    this.state = {}; // our store will add its own state to the component's
    this.store = DoorStore; // <- just assign the store class itself
  }

  render()
  {
    return <div>
      <CircleFill style={{color: `${this.state.doorStatus === DOOR_STATUS.OPERATING ? "green" : "gray"}`}} />
      &nbsp;Operation Status
    </div>
  }
}

class DoorRender extends Reflux.Component
{
  constructor(props)
  {
    super(props);
    this.state = {}; // our store will add its own state to the component's
    this.store = DoorStore; // <- just assign the store class itself
    this.ConstArr = new Array(MAX_DOOR_WINDOW).fill(0);
  }

  render()
  {
    return <div className="forti-door">
      { this.ConstArr.map( (_, index) => {
          return <div key={`index_${index}`} className={`${index >= ( MAX_DOOR_WINDOW - this.state.doorWindow) ? 'forti-door-not-fill' : "forti-door-fill"}`}></div> }) 
      }
    </div>
  }
}

class GarageInfo extends Reflux.Component
{
  constructor(props)
  {
    super(props);
    this.state = {}; // our store will add its own state to the component's
    this.store = DoorStore; // <- just assign the store class itself
  }

  render()
  {
    return <div className="forti-garage-info">
      Door Total Window: { MAX_DOOR_WINDOW }
      <br />
      Current Open Window: {this.state.doorWindow}
      <br />
      Current Status: { this.state.doorStatus}
      <br />
    </div>
  }
}

class Door extends Reflux.Component
{
  constructor(props)
  {
    super(props);
    this.state = {}; // our store will add its own state to the component's
  }
  render()
  {
    return <div>
      <GarageInfo />
      <div className="forti-garage">
        <div>
          <OperationLight />
          <TopSensor />
          <DoorRender />
          <BottomSensor />
        </div>
        <div> 
          <ControlButton />
          <br /><br />
          <PhotoSensor />
        </div>
      </div>
    </div>
  }
}

export default Door;