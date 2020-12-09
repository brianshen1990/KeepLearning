/**

530. Minimum Absolute Difference in BST

Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.

Example:

Input:

   1
    \
     3
    /
   2

Output:
1

Explanation:
The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).
 

Note:

There are at least two nodes in this BST.
This question is the same as 783: https://leetcode.com/problems/minimum-distance-between-bst-nodes/

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
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    
    let ret = Number.MAX_VALUE;
    
    let cur = -1; 
    const helper = (node) => {
        
        if ( !node ) return;
        
        helper(node.left);
        
        if ( cur === -1 ) {
            cur = node.val; 
        } else {
            ret = Math.min( ret, Math.abs(cur - node.val) );
            cur = node.val;
        }
        
        helper(node.right);
    }
    
    helper(root);
    return ret;
};



/**
[1,null,3,2]
[1,null,10,3]
[25,2,100,null, null,30]
[5,3,6,2,4,null,7]
[5,2,13]
[5,2]
 */