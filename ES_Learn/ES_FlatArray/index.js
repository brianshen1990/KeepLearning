

const arr = [ 1, 2, 3, [ 1, 2, [ 1, 2, 3, [ 4, 5, 6 ] ], 3]];
// console.log( arr.flat(1) );
// console.log( arr.flat(2) );
// console.log( arr.flat(3) );
// console.log(arr);


flatMy = ( arr, depth ) => {
  if ( typeof depth === "undefined" ) {
    depth = 1;
  }
  if ( depth <= 0 ) {
    return arr;
  }
  const ret = new Array();
  for ( let i = 0 ; i < arr.length ; i++) {
    if ( arr[i] instanceof Array ) {
      ret.push( ... flatMy(arr[i], depth-1) );
    } else {
      ret.push( arr[i] );
    }
  }
  return ret;
}

console.log( flatMy(arr, 1) );
console.log( flatMy(arr, 2) );
console.log( flatMy(arr, 3) );
