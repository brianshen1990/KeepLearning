/**
 * Question 10
 * What is the output of the following?
 * 
 * var arr = { id: 1, name: 'Tom', age: 20 }
 * arr.map( (ibj) => {
 *   obj['nickname'] = name + age;
 * }) 
 * 
 * 1 {id : 1, name: 'Tom', age: 20, nickname: 'Tom20'}
 * 2 {nickname: 'Tom20'}
 * √ 3 TypeError
 * 4 Undefined
 */

var arr = { id: 1, name: 'Tom', age: 20 }
arr.map( (obj) => {
  obj['nickname'] = name + age;
});

// TypeError: arr.map is not a function


