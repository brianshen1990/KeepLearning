/**

539. Minimum Time Difference

Given a list of 24-hour clock time points in "Hour:Minutes" format, find the minimum minutes difference between any two time points in the list.
Example 1:
Input: ["23:59","00:00"]
Output: 1
Note:
The number of time points in the given list is at least 2 and won't exceed 20000.
The input time is legal and ranges from 00:00 to 23:59.

*/

/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    
    // pre handle
    const timelist = new Array(24*60).fill(0);
    let smallest = 24*60;
    let existSame = false;
    timePoints.forEach( item => {
        const num = parseInt(item.substr(0,2)) * 60 + parseInt(item.substr(3)); 
        timelist[num] = timelist[num] || 0;
        timelist[num] += 1;
        if ( timelist[num] > 1 ) {
            existSame = true;
            return true;
        }
        if ( num < smallest ) {
            smallest = num;
        }
    });
    if ( existSame ) {
        return 0;
    }
    
    // calc
    let index = smallest;
    let gap = 24*60;
    
    // console.log( timelist[0], timelist[23*60+59], index )
    while ( true ) {
        if ( timelist[index] === 1 ) {
            let nextIndex = index+1; // look for next 1
            if ( nextIndex === timelist.length ) {
                // console.log("hit outside", nextIndex, timelist.length )
                nextIndex = 0;
            }
            while ( timelist[nextIndex] === 0 ) {
                nextIndex++;
                if ( nextIndex === timelist.length ) {
                    // console.log("hit inside", nextIndex, timelist.length )
                    nextIndex = 0;
                }
            }
            
            gap = Math.min( gap, 
                          nextIndex > index ? ( nextIndex - index ) : ( nextIndex + 24*60 - index ),
                          index > nextIndex ? ( index - nextIndex ) : ( index + 24*60 - nextIndex ));     
            // console.log( index, nextIndex, gap );
            index = nextIndex;
            if ( index === smallest ) {
                break;
            }
        }
    }
    
    return gap;
    
    
    
};

/**
["23:59","00:00"]
["23:59","00:00", "00:00"]
["23:59","12:00", "13:45"]
["23:59","12:00", "13:45", "05:40"]
["23:59","12:00", "13:45", "05:40", "23:23"]
 */