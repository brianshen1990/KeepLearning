
/*
Jump Game II

Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

Example:

Input: [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2.
    Jump 1 step from index 0 to 1, then 3 steps to the last index.
Note:

You can assume that you can always reach the last index.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var jumpOld = function(nums) {

  let bestSteps = new Array(nums.length).fill( nums.length-1 );

  let globalBest = bestSteps[bestSteps.length - 1]; 
  
  // console.log( bestSteps );

  for( let i = 0 ; i < nums.length - 1 ; i ++ ) {
    // !!!! break if current position's best step will not be better
    let tempBest = bestSteps[i];
    globalBest = bestSteps[bestSteps.length - 1]; 
    if ( globalBest < tempBest ) {
      break;
    }
    if ( nums[i] > 1 ) {
      // recursive, from max step to 1, and break when needed
      for ( let j = nums[i] ; j >= 1 ; j-- ) {
        tempBest = Math.min(i, bestSteps[i]); // always from the best steps
        let index = i;

        while ( index < nums.length - 1 ) {
          tempBest++;
          /// Break!!!!!!!!
          if ( globalBest <= tempBest ) {
            break;
          }
          if ( index === i ) {
            // means we are trying on the index from amx to 1 
            index = index + j;
          } else {
            index = index + nums[index];
          }
          if( index >= nums.length ) {
            // handle overflow
            index = nums.length - 1 ;
          }
          if ( bestSteps[index] <= tempBest ) {
            break;
          } else {
            bestSteps[index] =  tempBest;
          }
        }
        // console.log( bestSteps );
      }
    } 
  }
  
  return bestSteps[ bestSteps.length - 1 ];
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {   
  let begin = 0;
  let end = 0; 
  let mostFar = end;
  let greed = 0;
  while ( end < nums.length - 1 ) {
    // search for the range
    greed++;
    for( let i = begin; i <= end ; i++ ) {
      if ( i + nums[i] > mostFar   ) {
        mostFar = i + nums[i];
      }
    }
    end = mostFar;
    begin = begin + 1;
  }
  return greed;

};

console.log( jump( [2, 3, 1, 1, 4] ) === 2 );

console.log( jump( [2,3,1,1,4,5,6,7,8,9] ) === 4 );
console.log( jump( [9,8,7,6,5,4,3,2,1] ) === 1 );
console.log( jump( [1,4,2,1,2,6,4,3,6,2,1,3,2,2,1,1,1,2,3] ) === 8 );

console.log( jump( [7,4,1,1,4,1,7,9] ) === 1 );


const limitData1 = new Array(25000);
limitData1.fill(1)
console.log( jump( limitData1  ) === (25000-1) );


const limitData2 = new Array(25000);
limitData2.fill(2)
console.log( jump( limitData2  ) === 12500 );

const limitData5 = new Array(25000);
limitData5.fill(5)
console.log( jump( limitData5  ) === 5000 );
