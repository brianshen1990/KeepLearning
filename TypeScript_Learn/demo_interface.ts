///////// Class and interface

// interface
// optional properties
// readonly properties
interface LabeledValue {
  label: string;
  color?: string;
  readonly name: string;
}
function printLabel(labeledObj: LabeledValue) {
  console.log(`${labeledObj.label} ${labeledObj.color || ''}`);
}
let myObj = { size: 10, label: "Size 10 Object", name: "Label" };
printLabel(myObj);

// function types
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};
// indexable types
interface StringArray {
  [index: number]: string;
}
let myArray: StringArray;
myArray = ["Bob", "Fred"];
let myStr: string = myArray[0];
// read only
interface ReadonlyStringArray {
  readonly [index: number]: string;
}


class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

class StudentN {
  fullName: string;
  firstName: string;
  middleInitial: string;
  lastName: string;
  constructor(firstName: string, middleInitial: string, lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
    this.firstName = firstName;
    this.middleInitial = middleInitial;
    this.lastName = lastName;
  }
}
interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user1 = new Student("Jane", "M.", "User");
console.log(greeter( user1 ) );
let user2 = new StudentN("Jane", "M.", "User");
console.log(greeter( user2 ) );
let user3 = { firstName: "Jane", lastName: "User" }
console.log(greeter( user3 ) );
// class implement
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}
class Clock implements ClockInterface {
  currentTime: Date = new Date();
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {}
}

//  interface extending
interface Shape {
  color: string;
}
interface Square extends Shape {
  sideLength: number;
}
let square = {} as Square;
square.color = "blue";
square.sideLength = 10;

// Hybrid Types 
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}
function getCounter(): Counter {
  let counter = function (start: number) {} as Counter;
  counter.interval = 123;
  counter.reset = function () {};
  return counter;
}
let ccl = getCounter();
ccl(10);
ccl.reset();
ccl.interval = 5.0;
