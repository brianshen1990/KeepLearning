/**
235. Lowest Common Ancestor of a Binary Search Tree

Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Given binary search tree:  root = [6,2,8,0,4,7,9,null,null,3,5]


 

Example 1:

Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.
Example 2:

Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
 

Note:

All of the nodes' values will be unique.
p and q are different and both values will exist in the BST.

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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // binary search tree!
    const helper = ( node, small, big ) => {
        if ( node.val === small.val || node.val === big.val ) {
            return node;
        } 
        if ( node.val > small.val && node.val < big.val ) {
            return node;
        }
        
        if ( node.val < small.val ) {
            return helper(node.right, small, big);
        } else {
            return helper(node.left, small, big);
        }
    }
    if ( p.val > q.val ) {
        let temp = p;
        p = q;
        q = temp;
    }    
    return helper( root, p, q );
};

/**
[6,2,8,0,4,7,9,null,null,3,5]
2
8
[6,2,8,0,4,7,9,null,null,3,5]
8
2
[6,2,8,0,4,7,9,null,null,3,5]
2
4
[6,2,8,0,4,7,9,null,null,3,5]
2
6
 */

const ret = [1,2,3].reduce( (prod, val) => prod * val );
console.log(ret);