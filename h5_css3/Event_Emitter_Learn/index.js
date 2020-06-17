// EventEmitter

class MyEventEmitter {
  constructor() {

  }
  events = {};

  on(eventName, callback) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push( {
      type: "on", callback
    });
  }
  once(eventName, callback) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push( {
      type: "once", callback
    });
  }
  removeListener( eventName, callback ) {
    if ( this.events[eventName] && this.events[eventName].length > 0 ) {
      for ( let i = this.events[eventName].length-1 ; i >=0 ; i-- ) {
        if (  this.events[eventName][i].callback === callback ) {
          this.events[eventName].splice(i, 1);
          break;
        }
      }
    }
  }
  removeAllListener( eventName ) {
    if ( this.events[eventName] && this.events[eventName].length > 0 ) {
      this.events[eventName] = [];
    }
  }
  emit(eventName, ...args) {
    if ( this.events[eventName] && this.events[eventName].length > 0 ) {
      for ( let i = 0 ; i <  this.events[eventName].length ; i++ ) {
        this.events[eventName][i].callback(...args);
      }
      this.events[eventName] = this.events[eventName].filter( item => item.type === "on" );
    }
  }
}

const ee = new MyEventEmitter();
function pong(...args) {
  console.log('pong', ...args);
}
ee.on('ping', pong);
ee.once('ping', pong);
// ee.removeListener('ping', pong);

ee.emit('ping', 1, 2);
ee.emit('ping', 2, 3);