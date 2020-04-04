/*

Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note:

The solution set must not contain duplicate quadruplets.

Example:
Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.
A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
let fourSum = function(nums, target) {
    if(nums.length < 4){
        return [];
    }
    let ret = {};
    nums = nums.sort((a,b)=> { return a-b });
    for(let fir = 0 ; fir< nums.length - 3; fir++){
        if( fir+4 < nums.length && nums[fir] === nums[fir+4] ){
            continue;
        }
        for( let sec=fir+1; sec<nums.length-2 ; sec++){
            let temp = target - ( nums[fir] + nums[sec] );
            let tempFir = sec + 1;
            let tempSec = nums.length - 1;
            while(tempFir < tempSec){
                if( nums[tempFir] + nums[tempSec] < temp ){
                    tempFir++;
                }else if ( nums[tempFir] + nums[tempSec] > temp ){
                    tempSec--;
                }else{
                    ret[ [nums[fir], nums[sec], nums[tempFir], nums[tempSec]].join(",") ] = true;
                    tempFir++;
                }
            }
        }
    }
    let bck = [];
    Object.keys(ret).map(item=>{
        bck.push(item.split(",").map(iItem=>{ return parseInt(iItem) }) );
    })
    return bck;
};

let test = function(){
    console.log( fourSum([0, 0, 0, 0 ] , 0 ));
    console.log( fourSum([0, 0, 0, 0, 0] , 0 ));
    console.log( fourSum([1, 0, -1, 0, -2, 2] , 0 ));
    console.log( fourSum([1, 0, -1, 0, -2, 2] , 0 ).length === 3 );
    console.log( fourSum([-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9], 0 ).length === 150 );
    
}
test();