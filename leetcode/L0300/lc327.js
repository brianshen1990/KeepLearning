/**
327. Count of Range Sum


Given an integer array nums, return the number of range sums that lie in [lower, upper] inclusive.
Range sum S(i, j) is defined as the sum of the elements in nums between indices i and j (i ≤ j), inclusive.

Note:
A naive algorithm of O(n2) is trivial. You MUST do better than that.

Example:

Input: nums = [-2,5,-1], lower = -2, upper = 2,
Output: 3 
Explanation: The three ranges are : [0,0], [2,2], [0,2] and their respective sums are: -2, -1, 2.
 */


/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function(nums, lower, upper) {
    
    let cnt = 0;
    let sumArr = [0];
    nums.map( item => { sumArr.push( sumArr[sumArr.length-1] + item ); });
    // console.log( sumArr );
    // [0, -2, 3, 2] 
    
    const mergeSort = (beg, middle, end) => {
        let index1 = beg, index2 = middle;
        let arr = [];
        while ( index1 < middle && index2 < end ) {
            if ( sumArr[index1] > sumArr[index2] ) {
                arr.push( sumArr[index2++] );
            } else {
                arr.push( sumArr[index1++] );
            }
        }
        while ( index1 < middle ) {
            arr.push( sumArr[index1++] );
        }
        while ( index2 < end ) {
            arr.push( sumArr[index2++] );
        }
        for ( let i = beg ; i < end ; i++ ) {
            sumArr[i] = arr[i-beg];
        }
        // console.log( sumArr, beg, end );
    }
    
    const helper = ( beg, end ) => { // beg include, end not included
        
        const middle = Math.floor( (beg+end)/2 );
        let ret = 0;
        if ( beg === middle ) {
            return ret; // should contain at least 2
        }
        
        ret = helper(beg, middle) + helper( middle, end);
        let smaller = middle;
        let bigger = middle;
        
        for ( let i = beg ; i < middle ; i++ ) { // must include a left to span left and right
            while ( smaller < end && sumArr[smaller] - sumArr[i] < lower ) { smaller++; }
            while ( bigger < end && sumArr[bigger] - sumArr[i] <= upper ) { bigger++; }
            ret += bigger - smaller;
        } 
        mergeSort( beg, middle, end );
        return ret;
    } 
    
    return helper( 0, sumArr.length); 
};

/** 
[-2,5,-1]
-2
2
[-2,5,-1,2,3,4,5,3,2,1,12,23,1,1,1,2,3,2,2]
-2
2
*/