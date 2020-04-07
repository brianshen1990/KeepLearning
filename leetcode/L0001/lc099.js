/**
99. Recover Binary Search Tree

Two elements of a binary search tree (BST) are swapped by mistake.

Recover the tree without changing its structure.

Example 1:

Input: [1,3,null,null,2]

   1
  /
 3
  \
   2

Output: [3,1,null,null,2]

   3
  /
 1
  \
   2
Example 2:

Input: [3,1,4,null,null,2]

  3
 / \
1   4
   /
  2

Output: [2,1,4,null,null,3]

  2
 / \
1   4
   /
  3
Follow up:

A solution using O(n) space is pretty straight forward.
Could you devise a constant space solution?

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let nodes = [];
    recordPre(root, nodes);
    nodes = nodes.sort( (a,b) => b-a );
    recoveryPre(root, nodes )
};

var recordPre = function(root, nodes) {
    if( !root.left && !root.right ) {
        nodes.push( root.val );
        return;
    }
    
    if( root.left ) {
        recordPre( root.left, nodes );
    }
    nodes.push( root.val );
    if( root.right ) {
        recordPre( root.right, nodes );
    }
};
var recoveryPre =  function(root, nodes) {
    if( !root.left && !root.right ) {
        root.val = nodes.pop();
        return;
    }
    
    if( root.left ) {
        recoveryPre( root.left, nodes );
    }
    
    root.val = nodes.pop();
    
    if( root.right ) {
        recoveryPre( root.right, nodes );
    } 
}

/**
[1,3,null,null,2]
[3,1,4,null,null,2]
 */