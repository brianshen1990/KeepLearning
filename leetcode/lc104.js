/**
104. Maximum Depth of Binary Tree

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.



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
var maxDepth = function(root) {
    if( !root ) {
        return 0;
    }
    return helper( root, 0 );
};

var helper = function( root, depth ) {
    if ( !root ) {
        return depth;
    } else  {
        let ret = depth + 1;
        let maxDepth = ret;
        if ( root.left ) {
            maxDepth = helper( root.left, depth+1);
            ret = maxDepth;
        }
        if ( root.right ) {
            maxDepth = helper( root.right, depth+1);
            if ( maxDepth > ret ) {
                ret = maxDepth;
            }
        }
        return ret;
    }
    
}

/**
 * 
[]
[1]
[3,9,20,null,null,15,7]
[3,null,20,null,7]
 */