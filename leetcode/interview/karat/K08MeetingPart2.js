/*

Pt.2 Similar to Merge Intervals(LeetCode 56), but the output is different, now you are required to output idle time after time intervals merged, notice also output 0 - first start time.

Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

*/

const mergeSpan = (timeArr) => {
  if ( timeArr.length <= 0 ) {
    return [];
  }
  // sort based startTime
  timeArr = timeArr.sort( (a,b) => a[0] - b[0] );
  
  const span = [ timeArr[0] ];
  for ( let i = 1 ; i < timeArr.length ; i++ ) {
    if ( timeArr[i][0] <= span[span.length-1][1] ) {
      span[ span.length-1 ][1] = Math.max( span[span.length-1][1], timeArr[i][1] ); 
    } else {
      span.push( timeArr[i]);   
    }
  }
  return span;
}

console.log( mergeSpan([[1,3],[2,6],[8,10],[15,18]]) );
console.log( mergeSpan([[1,4],[4,5]]) );