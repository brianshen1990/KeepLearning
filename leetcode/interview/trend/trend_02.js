// arr and K, must only contains and include all of [1...K], no decrement
// [1,2,3,4], 3 false
// [1,3,4], false
// [1,1,2,3,4], 4 false

function SolutionSubmit(A, K) {
  const len = A.length;

  for ( let i = 1 ; i < len ; i++ ) {
    if ( A[i] > A[i-1] + 1 ) {
      return false;
    }
  }

  if ( A[0] === 1 && A[len-1] === K ) {
    return true;
  } else {
    return false;
  }
}

function Solution(A, K) {
  const len = A.length;
  for ( let i = 1 ; i < len ; i++ ) {
    // optimization, this place
    if ( A[i] < 1 || A[i] > K  || A[i] > A[i-1] + 1 ) {
      return false;
    }
  }
  if ( A[0] === 1 && A[len-1] === K ) {
    return true;
  } else {
    return false;
  }
}

console.log( Solution( [-1,1,2,3,4], 3 )  === false);
console.log( Solution( [1,2,3,4], 3 ) === false );
console.log( Solution( [1,2,3,5], 5 ) === false );
console.log( Solution( [1,2,3,4], 4 ) === true );
console.log( Solution( [4,3,2,1], 4 ) === false );