/**
236. Lowest Common Ancestor of a Binary Tree
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Given the following binary tree:  root = [3,5,1,6,2,0,8,null,null,7,4]


 

Example 1:

Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.
Example 2:

Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
 

Note:

All of the nodes' values will be unique.
p and q are different and both values will exist in the binary tree.
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
    const _helper = (_root, _p, _q) => {
        if ( _root === _p || _root === _q || !_root) {
            return _root;
        }

        // divide 
        const left = _helper(_root && _root.left, _p, _q);
        const right = _helper(_root && _root.right, _p, _q);

        // console.log(_root && _root.val, left && left.val, right && right.val,  )
        // conquer
        if ( left && right ) {
            // one node per side 
            return _root; 
        } else {
            return left || right;
        }
    }
    
    
    const ret =  _helper(root, p, q);
    return ret;
};


/**
[3,5,1,6,2,0,8,null,null,7,4]
5
1
[3,5,1,6,2,0,8,null,null,7,4]
5
4
[]
1
2
[-1,0,3,-2,4,null,null,8]
8
4
 */

