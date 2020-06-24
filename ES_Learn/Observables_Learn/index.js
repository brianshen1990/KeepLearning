/**
 * 
func.call() means "give me one value synchronously"
observable.subscribe() means "give me any amount of values, either synchronously or asynchronously"

pull: 
  A Function is a lazily evaluated computation that synchronously returns a single value on invocation.
  A generator is a lazily evaluated computation that synchronously returns zero to (potentially) infinite values on iteration.
Push: 
  A Promise is a computation that may (or may not) eventually return a single value.
  An Observable is a lazily evaluated computation that can synchronously or asynchronously return zero to (potentially) infinite values from the time it's invoked onwards.
 */


class ObservableMy {

  constructor( callback ) {
    this._callback = callback;
  }
  _callback = null;

  subscribe(functions) {
    // should be local, instead of class level
    let next = null;
    let complete = null;
    let error = null;

    if ( functions instanceof Function ) {
      next = functions;
    } else {
      next = functions.next || null;
      complete = functions.complete || null;
      error = functions.error || null;
    }
    // lazy load
    const _subscriber = {
      next: (data) => {
        next && next(data);
      },
      complete:  (data) => {
        complete && complete(data);
      },
      error: (data) => {
        error && error(data);
      }
    };

    try {
      return this._callback && this._callback(_subscriber);
    } catch ( err ) {
      return error && error(err);
    }
  }
  
}

 
const observable = new ObservableMy(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});
 
console.log('just before subscribe');
observable.subscribe({
  next(x) { console.log('got value ' + x); },
  error(err) { console.error('something wrong occurred: ' + err); },
  complete() { console.log('done'); }
});
console.log('just after subscribe');

observable.subscribe(y => {
  console.log(y);
});