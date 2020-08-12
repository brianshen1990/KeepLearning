/**

480. Sliding Window Median

Median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle value.

Examples:
[2,3,4] , the median is 3

[2,3], the median is (2 + 3) / 2 = 2.5

Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Your job is to output the median array for each window in the original array.

For example,
Given nums = [1,3,-1,-3,5,3,6,7], and k = 3.

Window position                Median
---------------               -----
[1  3  -1] -3  5  3  6  7       1
 1 [3  -1  -3] 5  3  6  7       -1
 1  3 [-1  -3  5] 3  6  7       -1
 1  3  -1 [-3  5  3] 6  7       3
 1  3  -1  -3 [5  3  6] 7       5
 1  3  -1  -3  5 [3  6  7]      6
Therefore, return the median sliding window as [1,-1,-1,3,5,6].

Note:
You may assume k is always valid, ie: k is always smaller than input array's size for non-empty array.
Answers within 10^-5 of the actual value will be accepted as correct.
 */


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function(nums, k) {
  if ( k === 1 ) {
      return nums;
  }
  
  const helper_bsearch = (window, val) => {
      let beg = 0, end = window.length;
      while ( beg + 1 < end ) {
          let middle = Math.floor( (beg + end)/2 );
          if ( window[middle] === val ) {
              return middle;
          } else if (  window[middle] > val  ) {
              end = middle;
          } else {
              beg = middle;
          }
      }
      return window[beg] === val ? beg : end;
  }
  
  const helper_bsearch_insert = (window, val) => {
      if ( window[0] >= val ) {
          return 0;
      }
      if ( val >= window[window.length-1]  ) {
          return window.length;
      }
      let beg = 0, end = window.length-1;
      while ( beg + 1 < end ) {
          let middle = Math.floor( (beg + end)/2 );
          if ( window[middle] === val ) {
              return middle;
          } else if (  window[middle] > val  ) {
              end = middle;
          } else {
              beg = middle;
          }
      }
      return end;
  }
  
  let window = []; 
  const ret = [];
  for ( let i = 0 ; i <= nums.length-k ; i++ ) {
      if ( i === 0 ) {
          window = nums.slice(0, k).sort( (a,b) => a-b );
          ret.push( k%2 === 0 ? 
                   ( (window[Math.floor(k/2)-1] + window[Math.floor(k/2)] ) / 2) : 
                   (window[Math.floor(k/2)]) );
      } else {
          const pos = helper_bsearch( window, nums[i-1] );
          // console.log( nums[i-1],  pos)
          window.splice( pos, 1 );
          const insertPos = helper_bsearch_insert( window, nums[i-1+k] );
          // console.log( insertPos , nums[i-1+k])
          window.splice( insertPos, 0, nums[i-1+k] );
          ret.push( k%2 === 0 ? 
                   ( (window[Math.floor(k/2)-1] + window[Math.floor(k/2)] ) / 2) : 
                   (window[Math.floor(k/2)]) );
      }
      // console.log( window )
  }
  return ret;
};


/**
[1,3,-1,-3,5,3,6,7]
3
[1,3,-1,-3,5,3,6,7]
4
[1,3,-1,-3,5,3,6,7]
1
[1,3,-1,-3,5,3,6,7]
2
[1,3,-1,-3,5,3,6,7]
5
[1,3,-1,-3,5,3,6,7,3,2,21,3,432,1,24,54,54,34,3,23,312]
5
[1,3,-1,-3,5,3,6,7,3,2,21,3,432,1,24,54,54,34,3,23,312]
4
 */