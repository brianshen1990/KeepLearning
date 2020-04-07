/**
145. Binary Tree Postorder Traversal

Given a binary tree, return the postorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [3,2,1]
Follow up: Recursive solution is trivial, could you do it iteratively?

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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if (! root ) {
        return [];
    }
    let ret = [];
    helper( root, ret );
    return ret;
};
var helper = function(root, ret) {
    if ( root.left ) {
        helper(root.left, ret );
    }
    if ( root.right ) {
        helper( root.right, ret );
    }
    ret.push( root.val );
}


/**
[1,null,2,3]
[1,2,3]
[1]
[]
[1,null,2,null,3]
 */