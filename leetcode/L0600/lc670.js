/**
670. Maximum Swap

You are given an integer num. You can swap two digits at most once to get the maximum valued number.

Return the maximum valued number you can get.

 

Example 1:

Input: num = 2736
Output: 7236
Explanation: Swap the number 2 and the number 7.
Example 2:

Input: num = 9973
Output: 9973
Explanation: No swap.
 

Constraints:

0 <= num <= 108
 */


/**
 * @param {number} num
 * @return {number}
 */
 var maximumSwap = function(num) {
    const nums = num.toString().split("").map( item => parseInt(item) );
    
    let found = false;
    
    for ( let i = 0 ; i < nums.length - 1 ; i++ ) {
        let max = nums[i];
        let pos = i;
        for ( let j = i + 1 ; j < nums.length ; j++ ) {
            if ( nums[j] > nums[i] ) {
                found = true;
                if ( nums[j] >= max ) {
                    max = nums[j];
                    pos = j;
                }
            }
        }
        if ( found ) {
            // console.log('found', i, pos, nums[i], nums[pos]);
            let temp = nums[i];
            nums[i] = nums[pos];
            nums[pos] = temp;
            break;
        }
    }
    
    return parseInt(nums.join(""));
    
    
};

/**
2736
9973
2737
1234627
12312012
123012
0
123
321
13677677
*/