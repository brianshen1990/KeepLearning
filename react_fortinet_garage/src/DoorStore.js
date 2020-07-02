var Reflux = require('reflux');
import React from 'react';

export const DoorActions = Reflux.createActions([
  "start",
  "detect",
  "reachTop",
  "reachBottom"
]);

export const DOOR_STATUS = {
  STOPPED_AT_TOP: "STOPPED_AT_TOP",
  STOPPED_AT_BOTTOM: "STOPPED_AT_BOTTOM",
  STOPPED_DURING_UP: "STOPPED_DURING_UP",
  STOPPED_DURING_DOWN: "STOPPED_DURING_DOWN",
  OPERATING: "OPERATING",
}
export const DOOR_DIRECTION = {
  UP: "UP",
  DOWN: "DOWN"
}

export const MAX_DOOR_WINDOW = 10;

export class DoorStore extends Reflux.Store
{
    
    constructor()
    {
        super();
        this.state = {
          doorWindow: 0,
          doorStatus: DOOR_STATUS.STOPPED_AT_BOTTOM,
          doorDirection: DOOR_DIRECTION.UP
        }; 
        this.interval = null;
        this.opTime = 1000;
        this.listenables = DoorActions;
    }
    onStart() {
      const state = this.state;
      if ( state.doorStatus !== DOOR_STATUS.OPERATING ) {
        // start operating
        this._start();
      } else {
        // stop operating
        this._stop( state.doorDirection === DOOR_DIRECTION.UP ? 
          DOOR_STATUS.STOPPED_DURING_UP : DOOR_STATUS.STOPPED_DURING_DOWN );
      }
    }

    onDetect() {
      if ( this.state.doorDirection === DOOR_DIRECTION.DOWN ) {
        this._stop(DOOR_STATUS.STOPPED_DURING_DOWN);
      }
    }

    onReachTop() {
      if ( this.state.doorStatus === DOOR_STATUS.OPERATING ) {
        this._stop(DOOR_STATUS.STOPPED_AT_TOP);
      }
    }

    onReachBottom() {
      if ( this.state.doorStatus === DOOR_STATUS.OPERATING ) {
        this._stop(DOOR_STATUS.STOPPED_AT_BOTTOM);
      }
    }


    _start() {
      const state = this.state;
      if ( state.doorStatus === DOOR_STATUS.STOPPED_AT_BOTTOM ) {
        // up 
        if ( this.interval ) { clearInterval( this.interval );}
        this.interval = setInterval( () => this._up(), this.opTime);
      } else if ( state.doorStatus === DOOR_STATUS.STOPPED_AT_TOP ) {
        // down
        if ( this.interval ) { clearInterval( this.interval );}
        this.interval = setInterval( () => this._down(), this.opTime);
      } else if ( state.doorStatus === DOOR_STATUS.STOPPED_DURING_UP ) {
        // continue up
        if ( this.interval ) { clearInterval( this.interval );}
        this.interval = setInterval( () => this._up(), this.opTime);
      } else if ( state.doorStatus === DOOR_STATUS.STOPPED_DURING_DOWN ){
        // continue down
        if ( this.interval ) { clearInterval( this.interval );}
        this.interval = setInterval( () => this._down(), this.opTime);
      }
    }

    _up()
    {
      const state = this.state;
      let doorWindow = state.doorWindow;
      doorWindow++;
      this.setState({ doorWindow, 
        doorStatus: DOOR_STATUS.OPERATING,
        doorDirection: DOOR_DIRECTION.UP });
    }

    _down()
    {
      const state = this.state;
      let doorWindow = state.doorWindow;
      doorWindow--;
      this.setState({ doorWindow, 
        doorStatus: DOOR_STATUS.OPERATING,
        doorDirection: DOOR_DIRECTION.DOWN });
    }

    _stop(status) {
      if ( this.interval ) {
        clearInterval( this.interval );
      }
      this.setState( { doorStatus: status } );
    }



}
