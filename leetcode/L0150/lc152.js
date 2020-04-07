/**
152. Maximum Product Subarray


Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

Example 1:

Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  if ( nums && nums.length > 0 ) {
  } else {
      return 0;
  }
  let ret = nums[0];
  let pSum = 1;
  let nSum = 1;
  let tilFirstNegative = 1;
  let numNegative = 0;
  for ( let i = 0 ; i< nums.length ; ) {
      if ( nums[i] === 0 ) {
          // skip all 0
          if ( ret < 0 ) {
              ret = 0;
          }
          while( i< nums.length && nums[i] === 0 ) {
              i++;
          }
          if ( i === nums.length ) {
              // just break
          } else {
              // IF odd negative, reverse the first negative,
              // if don't , we n=only ignore the last negative
              if ( nSum < 0 && numNegative > 1 ) {
                  let temp = nSum / tilFirstNegative;
                  if (temp > ret) {
                      console.log('hit');
                      ret = temp;
                  }
              }
              nSum = 1;
              tilFirstNegative = 1;
              numNegative = 0;
          }
          pSum = 1;
      } else {
          if ( nums[i] > 0 ) {
              pSum = pSum * nums[i];
              if (pSum > ret) {
                  ret = pSum;
              }
              nSum = nSum * nums[i];
              if (nSum > ret) {
                  ret = nSum;
              }
              if ( tilFirstNegative > 0 ) {
                  tilFirstNegative = tilFirstNegative * nums[i];
              }
          } else {
              if ( tilFirstNegative > 0 ) {
                  tilFirstNegative = tilFirstNegative * nums[i];
              }
              numNegative++;
              pSum = 1;
              nSum = nSum * nums[i];
              if (nSum > ret) {
                  ret = nSum;
              }
          }
          i++;
      }   
      // console.log( pSum, nSum, tilFirstNegative, ret);
  }
  
  // IF odd negative, reverse the first negative,
  // if don't , we n=only ignore the last negative
  if ( nSum < 0 && numNegative > 1 ) {
      let temp = nSum / tilFirstNegative;
      if (temp > ret) {
          console.log('hit');
          ret = temp;
      }
  }
  return ret;
  
};

/**
[0]
[5]
[-4]
[-4, 5]
[-4,0]
[]
[0,0,0,0,0]
[1,1,1,1]
[1,0,1,0,1,0,1,0]
[-2,0,-1]
[2,3,-2,4]
[1,-2,4,-2,9,-10]
[1,-2,4,-2,9,-10,0,1,-2,4,-2,9,-11,0,1,-2,4,-2,9,-9]
[1,-2,4,-2,9,-10,0,1,2,1,3,5,6,7,-2,4,-2,9,-11,0,0,0,9,1,-2,4,-2,9,-9,34,32]
 */