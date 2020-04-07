/**
Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

The same repeated number may be chosen from candidates unlimited number of times.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]
Example 2:

Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]

 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function(candidates, target) {
  candidates = candidates.sort( (a,b) => a-b );
  // now go on
  const resSets = _combinationSumHelper( candidates, target );
  return resSets;
};

const _combinationSumHelper = function(candidates, target) {
  const resSets = [];
  if ( candidates.length === 0 ) {
    // No items available
    return [];
  }
  if (candidates[0] > target) {
    // every item is greater than target
    return [];
  }
  if ( candidates[0] === target ) {
    // same number
    resSets.push( [target] );
    return resSets;
  }
  // remove impossible numbers
  if( candidates.length > 0 ) { 
    // delete impossible numbers
    let index = candidates.length - 1;
    while ( index >= 0 && candidates[index] > target ) {
      index = index - 1;
    }
    candidates = candidates.slice(0, index+1);
  }

  const maxNum = Math.floor(target / candidates[0] );
  for ( let i = maxNum ; i >= 0 ; i-- ) {
    const left = target - candidates[0] * i;
    if (left !== 0) {
      const tempSet = _combinationSumHelper(candidates.slice(1), left);
      if ( tempSet.length > 0 ) {
        let base = new Array(i);
        base.fill(candidates[0]);
        for( let j = 0; j< tempSet.length ;j++ ) {
          resSets.push( base.concat(tempSet[j]) );
        }
      }
    } else {
      let baseFull = new Array(i);
      baseFull.fill(candidates[0]);
      resSets.push(baseFull);
    }
  }
  return resSets;
}


// console.log( combinationSum( [2,3,5], 8) );
/**
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
 */



// console.log( combinationSum( [2,3,6,7], 7) );
/**
[
  [7],
  [2,2,3]
]
 */

console.log( combinationSum( [3,12,9,11,6,7,8,5,4], 15) );
/*
[[3,3,3,3,3],[3,3,3,6],[3,3,4,5],[3,3,9],[3,4,4,4],[3,4,8],[3,5,7],[3,6,6],[3,12],
[4,4,7],[4,5,6],[4,11],[5,5,5],[6,9],[7,8]]
*/
// console.log( combinationSum( [2,3,4,5,6,7,8,9], 100) );