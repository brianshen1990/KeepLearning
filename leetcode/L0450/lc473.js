/**

473. Matchsticks to Square

Remember the story of Little Match Girl? By now, you know exactly what matchsticks the little match girl has, please find out a way you can make one square by using up all those matchsticks. You should not break any stick, but you can link them up, and each matchstick must be used exactly one time.

Your input will be several matchsticks the girl has, represented with their stick length. Your output will either be true or false, to represent whether you could make one square using all the matchsticks the little match girl has.

Example 1:
Input: [1,1,2,2,2]
Output: true

Explanation: You can form a square with length 2, one side of the square came two sticks with length 1.
Example 2:
Input: [3,3,3,3,4]
Output: false

Explanation: You cannot find a way to form a square with all the matchsticks.
Note:
The length sum of the given matchsticks is in the range of 0 to 10^9.
The length of the given matchstick array will not exceed 15.

 */


/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var makesquare = function(nums) {
    // permutation
    
    const SUM = nums.reduce( (acc, ele) => acc + ele, 0 );
    const EXPECTED = SUM / 4;
    if ( SUM % 4 !== 0 ) return false;
    if ( SUM === 0 ) return false;
    
    nums.sort( (a,b) => b-a );
    // console.log(nums, EXPECTED);
    let usedArr = new Array(nums.length).fill(false);
    
    const helper = ( expectedLeft, count) => {
        // console.log( expectedLeft, count );
        if ( expectedLeft === EXPECTED && count === 4 ) {
            return true;
        }
        if ( expectedLeft === EXPECTED ) {
            // accelrate
            let next = -1;
            for ( let i = 0 ; i < usedArr.length ; i++ ) {
                if ( usedArr[i] === false ) {
                    next = i;
                    break;
                }
            }
            if ( next === -1 ) {
                return false;
            } else if ( nums[next] > EXPECTED ) {
                return false;
            } else if ( nums[next] === EXPECTED) {
                // take the maximum value
                usedArr[next] = true;
                return helper( EXPECTED, count+1 );
            } else {
                // take the maximum value
                usedArr[next] = true;
                return helper( EXPECTED -  nums[next], count );
            }
            
        }
        
        for ( let i = 0 ; i < usedArr.length ; i++ ) {
            if ( usedArr[i] === false && nums[i] <= expectedLeft ) {
                usedArr[i] = true;
                let found = false;
                if ( nums[i] === expectedLeft ) {
                    found = helper( EXPECTED, count+1 );
                } else {
                    found = helper( expectedLeft - nums[i] , count );
                }
                if ( found ) {
                    return true;
                }
                usedArr[i] = false;
            }
        }
        return false;
    }
    
    return helper( EXPECTED, 0 );
    
};

/**
[1,1,2,2,2]
[3,3,3,3,4]
[1,1,2,2,2,3,3,3,3]
[1,1,2,2,2,3,3,3,4]
[1,1,2,2,2,3,3,3,5]
[1,1,2,2,2,3,3,3,3,1,1,1,1]
[0,0,0,0]
[5,5,5,5,16,4,4,4,4,4,3,3,3,3,4]
 */