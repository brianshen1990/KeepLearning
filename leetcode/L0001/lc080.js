/**
80. Remove Duplicates from Sorted Array II

Given a sorted array nums, remove the duplicates in-place such that duplicates appeared at most twice and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Given nums = [1,1,1,2,2,3],

Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.

It doesn't matter what you leave beyond the returned length.
Example 2:

Given nums = [0,0,1,1,1,1,2,3,3],

Your function should return length = 7, with the first seven elements of nums being modified to 0, 0, 1, 1, 2, 3 and 3 respectively.

It doesn't matter what values are set beyond the returned length.
Clarification:

Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.

Internally you can think of this:

// nums is passed in by reference. (i.e., without making a copy)
int len = removeDuplicates(nums);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if( nums.length === 0 ) {
        return 0;
    }
    let bPointer = 0;
    let bNum = nums[0];
    let dupCount = 1;
    const len = nums.length;
    let temp = null;
    
    for( let i = 1; i< len ; i++ ) {
        temp = nums[i];
        if( temp === bNum) {
            // found duplicate
            if( dupCount === 2 ) {
                // ignore, no more than 2
            } else {
                // OK, only once, let move ahead
                dupCount++;
                bPointer++;
                nums[bPointer] = temp;
                //bNum no need to change
            }
        } else {
            // first occur
            dupCount = 1;
            bPointer++;
            nums[bPointer] = temp;
            bNum = temp;
        }
    }
    console.log( nums.slice(0, bPointer+1) );
    return bPointer+1;
};

console.log( removeDuplicates( [1,1,1,2,2,3] ) === 5 );
console.log( removeDuplicates(  [0,0,1,1,1,1,2,3,3] ) === 7 );
console.log( removeDuplicates(  [0,0,0,0,0,0] ) === 2 );
