/**
94. Binary Tree Inorder Traversal

Given a binary tree, return the inorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
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
var inorderTraversal = function(root) {
  if(!root) {
      return [];
  }
  if(root.length === 0 ) {
      return 0;
  }
  const ret = [];
  appendTree( root, ret );
  return ret;
};

var appendTree = function( root, ret) {
  if( !root ) {
      return;
  }
  if( root.left ) {
      appendTree(root.left, ret);
  }
  ret.push( root.val );
  if( root.right ) {
      appendTree(root.right, ret);
  };
}



