/**

453. Minimum Moves to Equal Array Elements

Given a non-empty integer array of size n, find the minimum number of moves required to make all array elements equal, where a move is incrementing n - 1 elements by 1.

Example:

Input:
[1,2,3]

Output:
3

Explanation:
Only three moves are needed (remember each move increments two elements):

[1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
  // len , sum, 
  // sum + (len-1)*steps = sumNew
  // also   steps = (sumNew/len - min)  => sumNew = (steps+min) * len
  // => sum + (len-1)*steps = steps*len + min* len 
  // => steps = sum - (min*len)
  let sum = nums.reduce( (cur, prev) => cur+prev );
  let min = Math.min(...nums);
  return sum - min * nums.length;
};

var minMovesOverTime = function(nums) {
  let count = 0 ;
  const helper = ( nums ) => {
      let eq = nums[0];
      for ( let i = 1 ; i < nums.length ; i++ ) {
          if ( nums[i] !== eq ) {
              return false;
          }
      }
      return true;
  }
  
  while ( ! helper( nums ) ) {
      count++;
      const max = Math.max(...nums);
      let used = false;
      for ( let i = 0 ; i < nums.length ; i++ ) {
          if ( (!used) && nums[i] === max ) {
              used = true;
              continue;
          }
          nums[i] += 1;
      }
  }
  
  return count;
};

/**
[1,2,3]
[1,2,3,4]
[1]
[1,2147483647]
[1,2,3,4,5,634,231,234,35,23,1]
 */