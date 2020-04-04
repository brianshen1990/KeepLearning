/**
77. Combinations

Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

Example:

Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
*/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    if(n === 0 || k === 0) {
        return [];
    }

    let ret = [];
    let allNum = [];
    for ( let i = 1; i<= n; i++ ) {
        allNum.push(i); 
    }
    combineHelper( allNum ,k , [], ret);
    return ret;
};

/**
 * @param {number[]} allNum
 * @param {number} k
 * @param {number[]} base
 * @param {number[][]} ret
 * @return {void}
 */
var combineHelper = function( allNum ,k , base, ret ) {
    // console.log(allNum ,k , base, ret );
    // console has an effect
    if ( k < 1 ) {
        return;
    }
    if ( k === 1 ) {
        for( let i = 0; i< allNum.length ; i++ ) {
            ret.push( base.concat([allNum[i]]) );
        }
        return;
    }
    let len = allNum.length ;
    for ( let i = 0; i < len + 1 - k ; i++ ){
        let value = allNum[i];
        combineHelper(allNum.slice(i+1), k-1, base.concat([value]), ret);
    }
}

console.log( combine(4,2).length === 6 )
console.log( combine(6,4).length === 
[[1,2,3,4],[1,2,3,5],[1,2,3,6],[1,2,4,5],[1,2,4,6],[1,2,5,6],[1,3,4,5],[1,3,4,6],[1,3,5,6],[1,4,5,6],[2,3,4,5],[2,3,4,6],[2,3,5,6],[2,4,5,6],[3,4,5,6]].length )
combine(20,16)