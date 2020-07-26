/*
PT1. Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.

Example 1:

Input: [[0,30],[5,10],[15,20]]
Output: false
Example 2:

Input: [[7,10],[2,4]]
Output: true
*/

// Time -> NLogN
// space -> NLog(N)
const allMeetingsPossible = (timeArr) => {
  // O(nlog(n))
  timeArr = timeArr.sort( (a,b) => a[0] - b[0] );
  // console.log( timeArr );
  // O(N)
  for ( let i = 1 ; i < timeArr.length ; i++ ) {
    if ( timeArr[i][0] < timeArr[i-1][1] ) {
      return false;
    }
  }
  return true;
}

console.log( allMeetingsPossible([[0,30],[5,10],[15,20]]) );
console.log( allMeetingsPossible([[7,10],[2,4]]) );