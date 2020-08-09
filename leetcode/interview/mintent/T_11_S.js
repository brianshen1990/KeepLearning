/**
 * Question 11
 * What does the following code alert? 
 * 
 * √ 10
 */

var a = 10;
function Foo() {
  if ( true ) {
    let a = 4;
    a = a + 10;
  }
  console.log(a); // alert(a)
}
Foo();

