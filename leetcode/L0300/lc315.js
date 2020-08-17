/**
315. Count of Smaller Numbers After Self

You are given an integer array nums and you have to return a new counts array. The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].

 

Example 1:

Input: nums = [5,2,6,1]
Output: [2,1,1,0]
Explanation:
To the right of 5 there are 2 smaller elements (2 and 1).
To the right of 2 there is only 1 smaller element (1).
To the right of 6 there is 1 smaller element (1).
To the right of 1 there is 0 smaller element.
 

Constraints:

0 <= nums.length <= 10^5
-10^4 <= nums[i] <= 10^4

 */


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    
    nums = nums.map( (value, index) => {
        return { value, 
                prevIndex: index, 
                count: 0,
                originalIndex: index };
    });
    
    // not include end
    const helperMergeSort = ( beg, end ) => {
        const middle = Math.floor( ( beg + end ) / 2 );
        if ( beg === middle ) {
            return;
        }
        helperMergeSort( beg, middle );
        helperMergeSort( middle, end );
        // merge sort, stable
        let index1 = beg, index2 = middle, temp = [];
        while ( index1 < middle && index2 < end ) {
            if (  nums[index1].value <= nums[index2].value  ) { // stable
                temp.push( nums[index1++] );
            } else {
                temp.push( nums[index2++] );
            }
        }
        while ( index1 < middle ) {
            temp.push( nums[index1++] );
        }
        while ( index2 < end ) {
            temp.push( nums[index2++] );
        }
        for ( let i = beg ; i < end ; i++ ) {
            nums[i] = temp[i-beg];
            if ( i > nums[i].prevIndex ) {
                // how many smaller items moved ahead
                nums[i].count += i - nums[i].prevIndex;
            }
            nums[i].prevIndex = i;
        }
    }
    
    helperMergeSort( 0, nums.length );
    const ret = new Array( nums.length ).fill(0);
    for ( let i = 0 ; i < nums.length ; i++ ) {
        ret[ nums[i].originalIndex ] = nums[i].count;
    }
    
    return ret;
};

/** 
[5,2,6,1]
[5,2,6]
[5,2,6,1,3,6,7]
[6]
[5,2]
[]
[5,2,6,1,3,6,7,23,234,43,456,4,7,323,12,56,56,8,8]
*/