import stream from 'stream';
import util from 'util';

/**
 * Returns a new subscription event event.
 * Real APIs would care about the `event`.
 */


const subscribe = function(event, options) {
  return Subscription(options);
};

/**
 * Subscription stream. Just increments the result.
 * Never ends!
 */

util.inherits(Subscription, stream.Readable);

function Subscription(options) {
  if (!(this instanceof Subscription)) return new Subscription(options);

  options = options || {};
  stream.Readable.call(this, options);

  this.value = 0;
  this.interval = null;
}
Subscription.prototype._read = function() {
  // every  five seconds, push an event
  if ( this.interval ) {
    // pass
  } else {
    this.interval = setInterval( ()=> {
      this.push(String(this.value++))
    }, 1000 );
  }
};

export default subscribe;