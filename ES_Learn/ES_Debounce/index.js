

// var debounce = require('debounce');
// debounce(fn, wait, [ immediate || false ])


function debounce(fn, wait) {
  let timer = null;
  const ret = () => {
    if ( !timer ) {
      console.log( new Date().toISOString(), "set new timer", wait );
      timer = setTimeout( () => {
        timer = null;
        fn();
      }, wait);
    } else {
      console.log( new Date().toISOString(), "cancel old and set new timer", wait );
      clearTimeout(timer);
      timer = setTimeout( () => {
        timer = null;
        fn();
      }, wait);
    }
  }
  ret.flush = () => {
    if ( timer ) {
      console.log( new Date().toISOString(), "flush" );
      clearTimeout(timer);
      timer = null;
      fn();
    } 
  }
  ret.clear = () => {
    if ( timer ) {
      console.log( new Date().toISOString(), "clear" );
      clearTimeout(timer);
      timer = null;
    } 
  }
  return ret;
}

let setting = 0;
const changeSettings = () => {
  console.log( new Date().toISOString(), ++setting );
}

console.log( new Date().toISOString()  );
const debounceChangeSettings = debounce(changeSettings, 5000);

debounceChangeSettings();
setTimeout( () => {
  debounceChangeSettings();
  setTimeout( debounceChangeSettings, 2000 );
}, 2000)

setTimeout( debounceChangeSettings, 10000 );

// debounceChangeSettings.clear();
// debounceChangeSettings.flush();




