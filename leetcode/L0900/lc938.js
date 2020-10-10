/**
938. Range Sum of BST

Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

The binary search tree is guaranteed to have unique values.

 

Example 1:

Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
Output: 32
Example 2:

Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
Output: 23
 

Note:

The number of nodes in the tree is at most 10000.
The final answer is guaranteed to be less than 2^31.
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
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    
    const helper = (node) => {
        let sum = 0 ;
        if (!node) return 0;
        if ( node.val >= L && node.val <= R ) {
            sum += node.val;
            sum += helper( node.left );
            sum += helper( node.right );
        } else if ( node.val < L ) {
            sum += helper( node.right );
        } else if ( node.val > R ) {
            sum += helper( node.left );
        }
        return sum;
    }
    
    return helper( root );
    
};


/*
[10,5,15,3,7,null,18]
7
15
[10,5,15,3,7,13,18,1,null,6]
6
10
*/