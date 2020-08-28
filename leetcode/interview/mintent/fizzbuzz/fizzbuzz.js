/*
Requirements 
Desc:

Write a program that prints the numbers from 1 to 100. For multiples of three, print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

Code will be evaluated on functional, standards, style, and design principals.
Eg. Write the program as if you were a developer on a team of 15 people.

*/



/**
 * Fizz buzz program
 *   For numbers which are multiples of both 3 and 5 print "FizzBuzz"
 *   For multiples of 3, print "Fizz"
 *   For multiples of 5, print "Buzz"
 *   Others, print numbers
 * Only print them , no return
 * parameter validation
 *   if range not valid, log to error console
 *   no exception will be threw
 * @param { begin num, inclusive, default 1} beg 
 * @param { end num, inclusive, default 100 } end 
 */
const fizzbuzz = (beg = 1, end = 100, 
    extensions = [ { num: 3, word: "Fizz" }, { num: 5, word: "Buzz" } ]) => {
  if ( end < beg ) {
    console.error("parameter error"); // TODO better use log module instead of console
    return;
  } 

  for ( let i = beg ; i <= end ; i++) {
    str = ""; 
    extensions.map( item => {
      const { num, word } = item;
      str += ( i % num === 0 ? word : '' );
    })
    str = str || `${i}`;
    console.log(str);

 
    
    let str = "";
    if ( i % 3 === 0 ) {
      str += "Fizz";
    }
    if ( i % 5 === 0 ) {
      str += 'Buzz';
    }
    str = str || `{i}`; 
    console.log(str);


    if ( i % 3 === 0 && i % 5 === 0 ) {
      console.log( "FizzBuzz" ); 
    } else if ( i % 3 === 0 ) {
      console.log("Fizz");
    } else if ( i % 5 === 0 ) {
      console.log( "Buzz" );
    } else {
      console.log( i );
    }
  }
}


// tests
/* 
fizzbuzz() 
fizzbuzz(1, 100)
fizzbuzz(1,1)
fizzbuzz(3,3)
fizzbuzz(15,15)
fizzbuzz(1,5)
fizzbuzz(100, 1)
*/

export default fizzbuzz;