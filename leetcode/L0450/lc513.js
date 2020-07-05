/**

513. Find Bottom Left Tree Value

Given a binary tree, find the leftmost value in the last row of the tree.

Example 1:
Input:

    2
   / \
  1   3

Output:
1
Example 2:
Input:

        1
       / \
      2   3
     /   / \
    4   5   6
       /
      7

Output:
7
Note: You may assume the tree (i.e., the given root node) is not NULL.
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
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    if ( !root ) {
        return;
    }
    
    let ret = root.val;
    let cur = [ root ];
    
    while ( cur.length > 0 ) {
        ret = cur[0].val;
        let next = [];
        
        cur.map( item => {
            if ( item.left ) {
                next.push( item.left );
            }
            if ( item.right ) {
                next.push( item.right );
            }
        })
        
        cur = next;
    }
    return ret;
};



/**
[2,1,3]
[2]
[1,2,3,4,null,5,6,7]
 */