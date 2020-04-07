/**
56. Merge Intervals

Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.

 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if( intervals.length <= 1 ) {
        return intervals;
    }
    intervals = intervals.sort( (a,b) => a[0] - b[0] );
    let ret = [intervals[0]];
    for ( let i = 1; i< intervals.length ; i++ ) {
        if ( intervals[i][0] > ret[ret.length-1][1] ) {
            // no overlap, just jump
            ret.push(intervals[i]);
        } else {
            // overlap, deal with it
            ret[ ret.length - 1 ][1] = Math.max(intervals[i][1], ret[ ret.length - 1 ][1]);
        }
    }
    return ret;
};

console.log(  merge([[1,3],[2,6],[15,18],[8,10]] ) );
// [[1,6],[8,10],[15,18]]
console.log(  merge([[1,4],[4,5]]) );
// [1,5]
console.log(  merge([[1,1],[1,1]]) );
// [1,1]
console.log(  merge([[1,1]]) );
// [1,1]
console.log(  merge([[]]) );
// []

console.log(  merge([[1,3],[2,6],[8,10],[15,18],[1000,22222],[45,67],[34,8900]]) );
// [[1,6],[8,10],[15,18],[34,22222]]



