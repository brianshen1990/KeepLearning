////////  Primitive Type
function greeter_pure(person: string) {
  return "Hello, " + person;
}
let user_pure: string = "Jane User";
console.log(greeter_pure( user_pure ));
// array
let list: number[] = [1, 2, 3];
// tuple
let x: [string, number];
x = ["hello", 10]; // OK
// enum
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
// any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
// void
function warnUser(): void {
  console.log("This is my warning message");
}
// never 
function error(message: string): never {
  throw new Error(message);
}
// type assertion
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

