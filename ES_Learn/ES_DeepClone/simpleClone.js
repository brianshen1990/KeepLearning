
const sSet = new Set();
sSet.add(1);sSet.add(2);sSet.add(3);
console.log(sSet);

const org = {
  primitive: 1,
  arr: [1,2,3],
  obj: {
    primitive: 2
  },
  s: sSet,
  func: () => {
    console.log("func");
  }
}

const _deepClone = (obj) => {
  const _helper = (_obj) => {
    if ( typeof _obj !== 'object' ) {
      return _obj;
    } else {
      if ( _obj instanceof Array ) {
        // array 
        const _ret = [];
        for ( let i = 0; i< _obj.length; i++ ) {
          _ret.push(_helper(_obj[i]));
        }
        return _ret;
      } else  if ( _obj instanceof Set ) {
        // array 
        const _ret = new Set( _obj );
        return _ret;
      }  else  if ( _obj instanceof Map ) {
        // array 
        const _ret = new Map( _obj );
        return _ret;
      } else {
        // object 
        const _ret = {};
        Object.keys( _obj ).map( _key => {
          _ret[_key] = _helper( _obj[_key] );
        })
        return _ret;
      }
    }
  }
  return _helper(obj);
}

const _simpleClone = (obj) => {
  return JSON.parse ( JSON.stringify(obj) );
}

console.log( `Initial One: \n  ${JSON.stringify(org)}`);

let dup = _deepClone(org);
dup.arr = [3, 2];
console.log( `Recursive Duplicate One: \n  ${JSON.stringify(dup)}` );
console.log( `Recursive Initial One after dup modified: \n  ${JSON.stringify(org)}`);


let dupSimple = _simpleClone(org);
dupSimple.arr = [3];
console.log( `Simple JSON Duplicate One: \n  ${JSON.stringify(dupSimple)}` );
console.log( `Simple JSON Initial One after dup modified: \n  ${JSON.stringify(org)}`);