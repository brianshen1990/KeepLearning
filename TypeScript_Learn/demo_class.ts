//// Inheritance

class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();


/// private 
class Animal2 {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}
class Rhino extends Animal2 {
  constructor() {
    super("Rhino");
  }
}
class Employee {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}
class Animal3 {
  name: String;
  constructor() {
  }
}
class Employee3 {
  name: String;
  constructor() {
  }
}

let animal = new Animal2("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;

let animal3 = new Animal3();
let employee3 = new Employee3();
animal3 = employee3;


// read only 

class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor(theName: string) {
    this.name = theName;
  }
}
let dad = new Octopus("Man with the 8 strong legs");

// parameter

class Octopus2 {
  readonly numberOfLegs: number = 8;
  constructor(readonly name: string) {}
}

// Accessors
const fullNameMaxLength = 10;

class Employee4 {
  private _fullName: string;

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (newName && newName.length > fullNameMaxLength) {
      throw new Error("fullName has a max length of " + fullNameMaxLength);
    }

    this._fullName = newName;
  }
}

let employee4 = new Employee4();
employee4.fullName = "Bob Smith";
if (employee4.fullName) {
  console.log(employee4.fullName);
}

// static 
class Grid {
  static origin = { x: 0, y: 0 };
  calculateDistanceFromOrigin(point: { x: number; y: number }) {
    let xDist = point.x - Grid.origin.x;
    let yDist = point.y - Grid.origin.y;
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
  constructor(public scale: number) {}
}

// abstract
abstract class Animal5 {
  abstract makeSound(): void;
  move(): void {
    console.log("roaming the earth...");
  }
}



