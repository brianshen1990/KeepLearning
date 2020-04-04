/*
Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

Example:

Given array nums = [-1, 2, 1, -4], and target = 1.
 [-4, -1, 1, 2]
The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums = nums.sort((a,b)=>{return a-b});
    let retSum = nums[0] + nums[1] + nums[2];

    for(let fir = 0; fir < nums.length-2 ; fir++){
        let sec = fir+1;
        let thi = nums.length-1;
        while(sec<thi){
            let sumTemp = nums[fir] + nums[sec] + nums[thi];
            if(Math.abs(sumTemp-target ) < Math.abs(retSum -target)){
                retSum = sumTemp;
            }
            if(sumTemp > target){
                thi--;
            }else{
                sec++;
            }
        }
    }
    return retSum;
};

let test = function(){
    console.log( threeSumClosest([-1, 2, 1, -4], 1) === 2 );
    console.log( threeSumClosest([-1, 2, 1, -4], -5) === -4 );
}
test();