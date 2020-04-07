/**
110. Balanced Binary Tree

Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

 

Example 1:

Given the following tree [3,9,20,null,null,15,7]:

    3
   / \
  9  20
    /  \
   15   7
Return true.

Example 2:

Given the following tree [1,2,2,3,3,null,null,4,4]:

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
Return false.


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
 * @return {boolean}
 */
var isBalanced = function(root) {
    
    if (! root ) {
        return true;
    }
    let ret = multiHelper( root );
    if (ret > 0) {
        return true;
    } else {
        return false;
    }
    
};

var multiHelper = function( root ) {
    // miuns mean self is not a balanced tree,
    // positive means balanced and return depth
    if ( !root.left && !root.right ) {
        return 1;
    }
    let leftDepth = 0;
    if ( root.left ) {
        leftDepth = multiHelper( root.left );
        if( leftDepth < 0 ) {
            return -1;
        }
    }
    let rightdepth = 0;
    if ( root.right ) {
        rightdepth = multiHelper( root.right );
        if ( rightdepth < 0 ) {
            return -1;
        }
    }
    // console.log( root.val, leftDepth,  rightdepth);
    if ( Math.abs(leftDepth - rightdepth) > 1 ) {
        return -1;
    }
    return Math.max( leftDepth,  rightdepth) + 1; 
}

/**
 * 
[3,9,20,null,null,15,7]
[3,null,20,15,7]
[3,null,20]
[3]
[3,9]
[]
 */