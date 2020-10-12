/**
965. Univalued Binary Tree

A binary tree is univalued if every node in the tree has the same value.

Return true if and only if the given tree is univalued.

 

Example 1:


Input: [1,1,1,1,1,null,1]
Output: true
Example 2:


Input: [2,2,2,5,2]
Output: false
 

Note:

The number of nodes in the given tree will be in the range [1, 100].
Each node's value will be an integer in the range [0, 99].

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
 * @return {boolean}
 */
var isUnivalTree = function(root) {

    const helper  = (node, val) => {
        if ( !node ) return true;
        if ( node.val === val ) {
            return helper( node.left, val ) && helper( node.right, val );
        } else {
            return false;
        }
    }
    
    return helper( root, root && root.val )
};


/*
[1,1,1,1,1,null,1]
[2,2,2,5,2]
[1]
*/