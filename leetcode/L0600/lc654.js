/**
654. Maximum Binary Tree

Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:

The root is the maximum number in the array.
The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.
Construct the maximum tree by the given array and output the root node of this tree.

Example 1:
Input: [3,2,1,6,0,5]
Output: return the tree root node representing the following tree:

      6
    /   \
   3     5
    \    / 
     2  0   
       \
        1
Note:
The size of the given array will be in the range [1,1000].
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    
    const helper = ( beg, end ) => {
        // console.log(beg, end);
        if ( beg > end ) return null;
        if ( beg === end ) return new TreeNode(nums[beg]);
        
        const sub = nums.slice(beg, end+1);
        const index = sub.indexOf( Math.max(...sub) );
        // console.log(beg, end, index+beg);
        const ret = new TreeNode(sub[index]);
        ret.left = helper( beg, beg+index-1 );
        ret.right = helper(beg+index+1, end);
        return ret;
    }
    
    return helper(0, nums.length-1);
    
    
};
/**
[3,2,1,6,0,5]
[3]
[3,2,1,6,0,5,7,8,9,10]
*/