/**
114. Flatten Binary Tree to Linked List

Given a binary tree, flatten it to a linked list in-place.

For example, given the following tree:

    1
   / \
  2   5
 / \   \
3   4   6
The flattened tree should look like:

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6


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
var flatten = function(root) {
    
    if( !root ) {
        return root;
    }
    
    if( !root.left && !root.right ) {
        return root;
    }
    
    if ( root.left ) {
        root.left = flatten( root.left );    
    }
    if ( root.right ) {
        root.right = flatten( root.right );    
    }
    
    if( root.right ) {
        if ( root.left ) {
            let tempRight = root.right;
            root.right = root.left;
            let nextRight = root.right;
            while( nextRight.right ) {
                nextRight = nextRight.right;
            }
            nextRight.right = tempRight;
            root.left = null;
        } 
    } else {
        root.right = root.left;
        root.left = null;
    }
    
    return root;
    
};


/**
 * 
[]
[1]
[1,2,null,5]
[1,2,5]
[1,2,5,3,4,null,6]
[1,2,6,3,4,5,7]
 */