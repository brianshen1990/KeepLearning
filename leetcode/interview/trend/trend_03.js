// only <=1 swap, can be ascending ? 

function SolutionNLogN(A) {
  const diff = [...A].sort( (a,b)=>a-b ).filter( (item,index) => item !== A[index] ).length;
  return diff === 0 || diff === 2;
}

function Solution(A) {
  if ( A.length <= 1 ) {
    return true;
  }
  let firIndex = -1;
  for ( let i = 1 ; i < A.length ; i++ ) {
    if ( A[i] < A[i-1] ) {
      firIndex = i-1;
      break;
    }
  } 

  if ( firIndex < 0 ) {
    return true; // no decrement
  }
  if ( firIndex > 0 && A[firIndex+1] < A[firIndex-1] ) {
    return false; // should swap again, so just no possible
  }
  
  let secIndex = firIndex + 1;
  let samVal = A[secIndex];
  while ( secIndex < A.length && A[secIndex] === samVal ) {
    secIndex++;
  }
  if ( secIndex >= A.length ) {
    return true; // swap with the last one just
  }

  // !!!!!!!!!!!! Logic mistake !!!!!!!!!!!!!
  if ( A[secIndex] >= A[firIndex-1] && A[secIndex] <= A[firIndex+1] ) {
    A[secIndex] = A[firIndex]; // swap with the not same one, [1,5,3,3,2], swap 5 and 2
  } else {
    A[secIndex-1] = A[firIndex]; // only can swap with the previous 1, [1,5,3,3,3,6], only can swap 5 and last 3
  }
  for ( let i = secIndex-1 ; i < A.length ; i++ ) {
    if ( A[i] < A[i-1] ) {
      return false;
    }
  }
  return true;
}



console.log( Solution( [1,1,1,1,1,1,2] ) === true );
console.log( Solution( [1,1,1,1,1,2,1] ) === true );
console.log( Solution( [2,1,1,1,1,1,1] ) === true );
console.log( Solution( [2,1,2,1,1,1,1] ) === false );
console.log( Solution( [1,5,3,2,4] )  === false);
console.log( Solution( [1] ) === true);
console.log( Solution( [] ) === true);
console.log( Solution( [1,1] ) === true);
console.log( Solution( [1,5,3,3,3,3,3,3,5] ) === true);
// this case?
console.log( Solution( [1,5,3,3,3,3,3,3,4,5] ) === false);
console.log( Solution( [1,5,3,3,3,3,3,3,6,5] ) === false);
console.log( Solution( [1,5,3,3,3,3,3,3,2] ) === true);
console.log( SolutionNLogN( [1,5,3,3,3,3,3,3,2] ) === true);




