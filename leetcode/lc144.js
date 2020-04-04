/**
144. Binary Tree Preorder Traversal
Given a binary tree, return the preorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,2,3]
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
var preorderTraversal = function(root) {
    if (! root ) {
        return [];
    }
    let ret = [];
    helper( root, ret );
    return ret;
};
var helper = function(root, ret) {
    ret.push( root.val );
    if ( root.left ) {
        helper(root.left, ret );
    }
    if ( root.right ) {
        helper( root.right, ret );
    }
}


/**
[1,null,2,3]
[1,2,3]
[1]
[]
[1,null,2,null,3]
 */