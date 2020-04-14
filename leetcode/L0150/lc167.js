/**
167. Two Sum II - Input array is sorted

Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

Note:

Your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution and you may not use the same element twice.
Example:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.

 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let ret = [-1, -1]
    
    for ( let i = 0; i < numbers.length-1; i++ ) {
        let searchFor = target - numbers[i];
        let found = -1;
        let beg = i+1;
        let end = numbers.length;
        let mid = Math.floor((beg+end)/2);
        while ( beg + 1 < end ) {
            if ( numbers[mid] === searchFor) {
                found = mid;
                break;
            } 
            if ( numbers[mid] > searchFor ) {
                end = mid;
            } else {
                beg = mid;
            }
            mid = Math.floor((beg+end)/2);
        }
        if ( numbers[mid] === searchFor ){
            found = mid;
        }
        if ( numbers[beg] === searchFor ){
            found = beg;
        }
        if ( numbers[end] === searchFor ){
            found = end;
        }
        if ( found > 0) {
            ret =  [i+1, found+1]; 
            break;
        }
    }
    return ret;
};


/**
[2,7,11,15]
9
[2,7]
9
[2,7,11,15]
18
[2,7,11,15]
26
[2,7,11]
18
[2,7,11,12,13,14,15,17,18,19]
18
[2,3,4]
6
[12,13,23,28,43,44,59,60,61,68,70,86,88,92,124,125,136,168,173,173,180,199,212,221,227,230,277,282,306,314,316,321,325,328,336,337,363,365,368,370,370,371,375,384,387,394,400,404,414,422,422,427,430,435,457,493,506,527,531,538,541,546,568,583,585,587,650,652,677,691,730,737,740,751,755,764,778,783,785,789,794,803,809,815,847,858,863,863,874,887,896,916,920,926,927,930,933,957,981,997]
542

 */