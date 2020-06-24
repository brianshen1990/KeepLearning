// var memoize = require("memoizee");

const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    let key = args.toString();
    if ( key in cache ) {
      console.log( "cache" );
      return cache[key];
    } else {
      console.log( "called" );
      const res = fn(...args);
      cache[key] = res;
      return res;
    }
  }
}

var fn = (...args) => {
  return args.toString();
};
memoized = memoize(fn);
// use LRU
// memoized = memoize(fn, { max: 2 });
 
console.log( memoized("foo", 3, "bar") );
console.log( memoized("foo", 3, "bar") );
console.log( memoized("foo", "3", "bar") );
console.log( memoized("foo", "3") );