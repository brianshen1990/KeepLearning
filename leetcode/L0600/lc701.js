/**
701. Insert into a Binary Search Tree

Given the root node of a binary search tree (BST) and a value to be inserted into the tree, insert the value into the BST. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

Note that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.

For example, 

Given the tree:
        4
       / \
      2   7
     / \
    1   3
And the value to insert: 5
You can return this binary search tree:

         4
       /   \
      2     7
     / \   /
    1   3 5
This tree is also valid:

         5
       /   \
      2     7
     / \   
    1   3
         \
          4
 

Constraints:

The number of nodes in the given tree will be between 0 and 10^4.
Each node will have a unique integer value from 0 to -10^8, inclusive.
-10^8 <= val <= 10^8
It's guaranteed that val does not exist in the original BST.
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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    
  const iNode = new TreeNode(val);
  if (!root) {
      root = iNode;
      return root;
  }
  
  let iter = root;
  while( iter ) {
      if ( iter.val > val ) {
          if ( !iter.left ) {
              iter.left = iNode;
              break;
          } else {
              iter = iter.left;
          }
      } else {
          if ( !iter.right ) {
              iter.right = iNode;
              break;
          } else {
              iter = iter.right;
          }
      }
  }
  return root;
};

/**
[4,2,7,1,3]
5
[]
5
[10,2,12,1,3]
5
*/