/**
57. Insert Interval

Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

 */

 /**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insertSlow = function(intervals, newInterval) {
    if( intervals.length === 0 ) {
        return [newInterval];
    }
    intervals.push(newInterval);
    // log(N) + N
    intervals = intervals.sort( (a,b) => a[0] - b[0] );
    let ret = [ intervals[0] ];
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

 /**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if( intervals.length === 0 ) {
        return [newInterval];
    }
    // complicated one
    // because it is a sorted one
    // intervals = intervals.sort( (a,b) => a[0] - b[0] );
    let begin = 0;
    let end = intervals.length;
    let finalInsert = -1;
    let middle = -1;
    while( begin < end  ) {
        middle = Math.floor( ( begin + end ) / 2 );
        if ( intervals[middle][0] === newInterval[0] ) {
            // find the final position
            finalInsert = middle;
            break;    
        } else if( intervals[middle][0] > newInterval[0] ) {
            // should insert left
            end = Math.max(middle - 1, begin);
        } else {
            // should insert right
            begin = Math.min(middle + 1);
        }
    }
    if( finalInsert  < 0){
        if( begin < intervals.length) { 
            if(intervals[begin][0] > newInterval[0] ) {
                finalInsert = begin ;
            } else {
                finalInsert = begin + 1;
            }
        } else {
            finalInsert = begin
        }
    }
    console.log( finalInsert );

    intervals.splice(finalInsert, 0, newInterval);
    let ret = intervals.slice(0, (finalInsert-1) > 0 ? (finalInsert-1) : 0 );
    if ( ret.length === 0 ) {
        ret.push( intervals[0] );
        finalInsert = 2;
    }
    for( let i = finalInsert - 1  ; i< intervals.length ; i++  ) {
        if ( intervals[i][0] > ret[ret.length-1][1] ) {
            // no overlap, just jump, and terminate
            if( i !== (finalInsert-1) && ( i+1 < intervals.length  &&  intervals[i][1] <  intervals[i+1][0]  ) ) {
                ret = ret.concat(intervals.slice(i));
                break;
            } else {
                ret.push( intervals[i] );
            }
        } else {
            // overlap, deal with it
            ret[ ret.length - 1 ][1] = Math.max(intervals[i][1], ret[ ret.length - 1 ][1]);
        }
    }
    return ret;
};


console.log( insert([[1,3],[6,9]], [2,5]) );
// [[1,5],[6,9]] 
console.log( insert([], [2,5]) );
// [2,5]
console.log( insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]) );
// [[1,2],[3,10],[12,16]]
console.log( insert([], [2,5]) );
// [2,5]
console.log( insert([[1,2],[3,5],[6,7],[12,16]], [8,9]) );
// [[1,2],[3,5],[6,7],[8,9],[12,16]]

console.log( insert([[1,5]], [2,3]) );
// [[1,5]]

console.log( insert([[0,5],[9,12]], [7,16]) )
// [ [ 0, 5 ], [ 7, 16 ] ]

console.log( insert([[0,3],[5,8],[9,11]], [9,18]) )
