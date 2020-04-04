/**
101. Symmetric Tree

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3
 

Note:
Bonus points if you could solve it both recursively and iteratively.

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
var isSymmetric = function(root) {
    if( !root ) {
        return true;
    }
    
    if ( !root.left && !root.right  ) {
        return true;
    } else if ( root.left && root.right ) {
        return helper( root.left, root.right ); 
    } else {
        return false;
    }
};

var helper = function(rootL, rootR) {
    if( rootL && rootR ) {
        if( rootL.val === rootR.val ) {
            let ret = false;
            ret = helper( rootL.right, rootR.left );
            if( !ret ) {
                return false;
            }
            ret = helper( rootL.left, rootR.right );
            if( !ret ) {
                return false;
            }
            return true;
        } else {
            return false;
        }
    } else if (!rootL && !rootR) {
        return true;
    } else {
        return false;
    }  
}