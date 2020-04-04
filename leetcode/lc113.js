/**
113. Path Sum II
Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \    / \
7    2  5   1
Return:

[
   [5,4,11,2],
   [5,8,4,5]
]

*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    if( !root ) {
        return [];
    }
    
    let ret = [];
    helper( root, 0, sum, [], ret );
    return ret;
    
};

var helper = function( root, top, sum, keep, retArr ) {
    let tempArr = keep.concat(root.val);
    if( !root.left && !root.right ) {
        if ( sum === top + root.val ) {
            retArr.push( tempArr )
            return true;
        } else {
            return;
        }
    }
    if (root.left ) {
        helper(root.left, top + root.val, sum, tempArr, retArr);
    }
    if( root.right ) {
        helper(root.right, top + root.val, sum, tempArr, retArr);
    }
    
}

/**
 * 
[5,4,8,11,null,13,4,7,2,null,null,5,1]
22
[5,4,8,11,null,13,4,7,2,null,null,null,1]
22
[5,4,8,11,null,13,4,7,2,null,null,null,1]
5
[5,4,8]
10
[5]
5
[5]
4
[]
5
[-2,null,-3]
-5
 */