/**
687. Longest Univalue Path

Given the root of a binary tree, return the length of the longest path, where each node in the path has the same value. This path may or may not pass through the root.

The length of the path between two nodes is represented by the number of edges between them.

 

Example 1:


Input: root = [5,4,5,1,1,5]
Output: 2
Example 2:


Input: root = [1,4,5,4,4,5]
Output: 2
 

Constraints:

The number of nodes in the tree is in the range [0, 104].
-1000 <= Node.val <= 1000
The depth of the tree will not exceed 1000.
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
 var longestUnivaluePath = function(root) {
    if ( !root ) return 0;
    
    let ret = 0;
    const cache = new Set();
    
    const helperLook = (node, value) => {
        if ( !node ) return 0;
        if ( node.val === value ) {
            let left = helperLook(node.left, node.val);
            let right = helperLook(node.right, node.val);
            cache.add( node );
            ret = Math.max( ret, left + right + 1 );
            return Math.max(left, right) + 1;
        }
        return 0;
    }
    const helper = node => {
        if ( !node ) return;
        if ( !cache.has(node) ) {
            let left = helperLook(node.left, node.val);
            let right = helperLook(node.right, node.val);
            cache.add( node );
            // console.log( left, right )
            ret = Math.max( ret, left + right + 1 );
        } else {
            // console.log("skipped");
        }
        helper( node.left );
        helper( node.right );
    }
    
    helper( root )
    return ret -1 ;
    
};


/**
[5,4,5,1,1,5]
[1,4,5,4,4,5]
[4,4,5,4,4,5]
[1,2,3,4,5]
[4,4,4,4,4,5]
[1,4,5,4,4,5,5]
[1,4,5,4,4,5,5,4]
[1,4,5,4,4,5,5,4,null,4]
[]
[1]
*/