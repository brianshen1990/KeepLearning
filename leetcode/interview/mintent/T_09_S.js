/**
 * Question 09
 * Function/class PositivesNumbers generates a sequence of positive integers: 1,2,3...
 * 
 * Which forms ensure that the variable current cannot be modified outside the function/class? 
 */

// 01 √
function PositiveNumbers_01() {
  var current = 1;
  this.next = function () {
    return ++current;
  }
}
const iter1 = new PositiveNumbers_01();
// X no iter1.current = 0;

// 02 X
function PositiveNumbers_02() {
  this.current = 0;
}
PositiveNumbers_02.prototype.next = function () {
  return ++this.current;
}
const iter2 = new PositiveNumbers_02();
iter2.current = 0;


// 03 X
function PositiveNumbers_03() {
  current = 0;
}
PositiveNumbers_03.prototype.next = function () {
  return ++current;
}
// global current


// 04 X
function PositiveNumbers_04() {
  this.current = 0;
  this.next = function () {
    return ++this.current;
  }
}
const iter4 = new PositiveNumbers_04();
iter4.current = 0;


// 05 √
var PositiveNumbers_05 = function() {
  var current = 0;
  this.next = function() {
    return ++current;
  }
}
const iter5 = new PositiveNumbers_05();
// X no iter5.current = 0;
