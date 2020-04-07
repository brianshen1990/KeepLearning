/*
31. Next Permutation
Medium
1214
344


Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place and use only constant extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

1,4,2,4,4,3
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1

Accepted
191,145
Submissions
648,569

*/

const ListNode = require('./helper/ListNode.js').ListNode;
const ListNodeGenerateFromArray = require('./helper/ListNode.js').ListNodeGenerateFromArray;
const ListNodePrint = require('./helper/ListNode.js').ListNodePrint;

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  
    let iter = 0;
    let select = null;
    let replace = null;
    while(iter < nums.length){
        let _iIter = iter + 1;
        let repPos = null;
        while(_iIter < nums.length){
            if(nums[_iIter] > nums[iter]){
                let load = false;
                if( !repPos ){
                    load = true;
                }else{
                    if( nums[_iIter] < nums[repPos] ){
                        load = true;
                    }
                }
                if(load){
                    repPos = _iIter;
                    select = iter;
                    replace = repPos;
                }
            }
            _iIter++;
        }
        iter++;
    }
    if(replace){
        let _in = nums[replace] ;
        nums.splice(select,0,_in);
        nums.splice(replace+1, 1);
        let tempNums = nums.splice(select+1);
        tempNums = tempNums.sort((a,b)=>{ return (a-b)});
        nums.splice(select+1, 0, ...tempNums);
    }else{
        nums = nums.sort((a,b)=>{ return (a-b)});
    }
};

/*
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1
*/
let test = function () {
  
        
        let l1 = [100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1];
    nextPermutation(l1);
    console.log(l1)

    let l4 = [1,2,4,3,5,5,1];
    nextPermutation(l4);
    console.log(l4); 

    let l5 = [2,3,4,5,1,56,34,232,3];
    nextPermutation(l5);
    console.log(l5); 
    
    

    let l2 = [3,2,1];
    nextPermutation(l2);
    console.log(l2);

    let l3 = [1,1,5];
    nextPermutation(l3);
    console.log(l3);
}
test();