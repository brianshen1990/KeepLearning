// A B and count 1

function Solution(A, B) {
  return (A*B).toString(2).split("").filter( item => item === '1' ).length;
}


console.log( Solution(0,1) )
console.log( Solution(1,0) );
console.log( Solution(1,1) );
console.log( Solution(1000000000, 1000000000) );


