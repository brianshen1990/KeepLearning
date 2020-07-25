class Car {
  constructor(name, color) {
    this.color = color;
    this.name = name;
    this.drive = () => {
      console.log(this.name, 'is driving 1');
    }
  }
  drive() {
    console.log(this.name, 'is driving 2');
  }
}

let plane = {
  name: 'air jet',
  fly: () => {
    console.log(this.name, 'flying...');
  }
}

let car = new Car('sedan', 'red');
car.drive();
// sedan is driving 1


// sedan is driving 1
// empty {} -> protytype -> driver2 
// initialization 
// overwrite the driver ->  driver 1
// {} -> this
// return {}
plane.fly()
// global.name , windows.name
// undefined flying...

'sedan flying'
plane.fly.call(car);
// undefined flying...

// car.__proto__.drive();
// undefined is driving 2

Car.prototype.drive.call(car)
// sedan is driving 2