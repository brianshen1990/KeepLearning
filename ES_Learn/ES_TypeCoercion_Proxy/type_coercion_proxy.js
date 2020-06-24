
const SPLIT = '==========' ;
console.log(SPLIT, 'RawObject');
class RawObject {
}
const rawObject = new RawObject();
console.log(rawObject);

console.log(SPLIT, 'ClassA');
// use class to override 
class ClassA {
  toString() {
    return "1";
  }
}
const classA = new ClassA();
console.log(classA)
console.log(classA == 1)

console.log(SPLIT, 'ClassB');
// use class to override 
class ClassB {
  _ret = 0;
  toString() {
    return `${++this._ret}`;
  }
}
const classB = new ClassB();
console.log(classB == 1 && classB == 2 && classB == 3);



console.log(SPLIT, "FunctionA");
// use function to override 
function FunctionA() {
  this._ret = 0;
}
FunctionA.prototype.toString =  function(){
  return `${++this._ret}`;
}

const functionA = new FunctionA();
console.log( functionA == 1 && functionA == 2 && functionA == 3 );



console.log(SPLIT, "toString return a number");
// use class to override
class ClassC {
  _ret = 0;
  toString() {
    this._ret++ ;
    return this._ret
  }
}

const classC = new ClassC();
console.log(classC == 1 && classC == 2 && classC == 3)


console.log(SPLIT, "proxy");
// use proxy to override 
const p = new Proxy({}, {
  get: (obj, prop) => {
    obj._get_hidden = obj._get_hidden || 0;
    return ++obj._get_hidden;
  }
});
// console.log( Reflect.get(p, "a") );
// console.log( Reflect.get(p, "a") );
console.log( p.a === 1 && p.a === 2 && p.a === 3);


console.log(SPLIT, "type coercion");
console.log( "--Equal between falsy value-- ");
console.log( false == 0 ? "true" : "false" );
console.log( false == "" ? "true" : "false" );
console.log( null == undefined ? "true" : "false");
console.log( "--Falsy value--" );
console.log( 0 ? "true" : "false" );
console.log( "" ? "true" : "false" );
console.log( null ? "true" : "false");
console.log( undefined ? "true" : "false");
console.log( NaN ? "true" : "false");

