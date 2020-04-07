/**
98. Validate Binary Search Tree

Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:

    2
   / \
  1   3

Input: [2,1,3]
Output: true
Example 2:

    5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.

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
var isValidBST = function(root) {
    if( !root ) {
        return true;
    }
    return Helper( root, undefined, undefined )
    
};

var Helper = function( root, min, max ) {
    // check if self is in the right position
    // console.log( root.val, min, max );
    if ( min !== undefined ) {
        if ( root.val <= min ) {
            return false;
        }
    }
    if( max !== undefined ) {
        if( root.val >= max ) {
            return false
        }
    }
    // check left and right 
    if( root.left ) {
        if( root.left.val >= root.val ) {
            return false;
        }
    }
    if( root.right ) {
        if( root.right.val <= root.val ) {
            return false;
        }
    }
    let ret = false;
    if ( root.left ) {
        ret = Helper( root.left, min, root.val );
        if( !ret ) {
            return false;
        }
    }
    if (  root.right ) {
        ret = Helper( root.right, root.val, max );
        if( !ret ) {
            return false;
        }
    }
    return true;
}