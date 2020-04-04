/**
112. Path Sum

Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

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
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if (!root) {
        return false;
    }
    return helper( root, 0, sum );
};

var helper = function( root, top, sum ) {
    if( !root.left && !root.right ) {
        if ( sum === top + root.val ) {
            return true;
        } else {
            return false;
        }
    }
    let ret = false;
    if (root.left ) {
        ret = helper(root.left, top + root.val, sum);
        if( ret ) {
            return true;
        }
    }
    if( root.right ) {
        ret = helper(root.right, top + root.val, sum);
        if( ret ) {
            return true;
        }
    }
    return false;

}

/**
 * 
[5,4,8,11,null,13,4,7,2,null,null,null,1]
22
[5,4,8,11,null,13,4,7,2,null,null,null,1]
23
[5,4,8]
9
[5,4,8]
10
 */