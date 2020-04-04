/**
111. Minimum Depth of Binary Tree

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its minimum depth = 2.



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
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) {
        return 0;
    }
    return helper( root );
};

var helper = function( root ) {
    if ( !root.left && !root.right ) {
        return 1;
    }
    let leftDepth = -1;
    if ( root.left ) {
        leftDepth = helper( root.left ) + 1;
    }
    let rightdepth = -1;
    if ( root.right ) {
        rightdepth = helper( root.right ) + 1;
    }
    let ret = -1;
    if ( rightdepth > 0 ) {
        if( leftDepth > 0  ) {
            ret = Math.min(leftDepth, rightdepth);
        } else {
            ret = rightdepth;
        }
    } else {
        ret = leftDepth;
    }
    return ret;
}

/**
 * 
[3,9,20,null,null,15,7]
[3,null,20,15,7]
[2]
[]
[2,9]
 */