/*
/*
Given an array of integers, return indices of the two numbers 
such that they add up to a specific target.
You may assume that each input would have exactly one solution, 
and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
    // sort
    let numsNew = nums.slice();
    numsNew = numsNew.sort((a, b) => a - b);

    // find the maxPosition
    let maxPosition = numsNew.length - 1;

    // match
    let begin = 0;
    let end = maxPosition;
    let found = false;
    while(begin != end && ! found){
        if( numsNew[begin] + numsNew[end] > target){
            end = end - 1;
        }else if( numsNew[begin] + numsNew[end] < target ){
            begin = begin + 1;
        }else{
            // = 
            found = true;
        }
    }
    
    // find in ori array
    let begPos = nums.indexOf(numsNew[begin]);

    let endPos = nums.indexOf(numsNew[end]);
    if(endPos === begPos){
        endPos = nums.indexOf(numsNew[end], begPos + 1);
    }
    if(endPos < begPos){
        let temp = begPos;
        begPos = endPos;
        endPos = temp;
    }
    return [  begPos, endPos] ;
};

let test = function(){
    let nums = [2, 7, 15, 11];
    let target = 18;
    console.log(twoSum(nums, target));

    nums = [-3,4,3,90];
    target = 0;
    console.log(twoSum(nums, target));
}
test();