/**
228. Summary Ranges

Given a sorted integer array without duplicates, return the summary of its ranges.

Example 1:

Input:  [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: 0,1,2 form a continuous range; 4,5 form a continuous range.
Example 2:

Input:  [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: 2,3,4 form a continuous range; 8,9 form a continuous range.

 */



/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const ret = [];
    
    while( nums.length > 0 ) {
        const start = nums[0];
        // only 1 left || try 1 to avoid binary search
        if ( nums.length === 1 || nums[1] !== start+1 ) {
            ret.push(`${start}`);
            nums.shift()
            continue;
        }
        
        // b search for position
        let beg = 0;
        let end = nums.length-1;
        while ( end > beg + 1 ) {
            if ( nums[end] === end + start ) {
                break;
            }
            let mid = Math.floor( (beg+end) / 2 );
            if ( nums[mid] === mid + start ) {
                beg = mid;
            } else {
                end = mid;
            }
            
        }
        
        let pos = -1;
        if ( nums[end] === end + start ) {
            pos = end;
        } else if ( nums[beg] === beg + start ) {
            pos = beg;
        }
        
        nums.splice(0, pos+1);
        
        ret.push(`${start}->${start+pos}`);
        
    }
    return ret;
    
    
};


/**
[0,1,2,4,5,7]
[0,2,3,4,6,8,9]
[0,2,3,4,6,8,9, 11,12,13,14, 16,17,18,19,20]
 */