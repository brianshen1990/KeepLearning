/**

1315. Sum of Nodes with Even-Valued Grandparent

Given a binary tree, return the sum of values of nodes with even-valued grandparent.  (A grandparent of a node is the parent of its parent, if it exists.)

If there are no nodes with an even-valued grandparent, return 0.

 

Example 1:



Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
Output: 18
Explanation: The red nodes are the nodes with even-value grandparent while the blue nodes are the even-value grandparents.
 

Constraints:

The number of nodes in the tree is between 1 and 10^4.
The value of nodes is between 1 and 100.
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
 var sumEvenGrandparent = function(root) {
    
    let sum = 0 ;
    const helper = (node, parent, grand) => {
        if ( !node ) return;
        if ( grand && grand.val % 2 === 0 ) {
            sum += node.val;
        }
        helper( node.left, node, parent );
        helper( node.right, node, parent );
    }
    helper(root, null, null);
    return sum;
};

/**
[6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
[6,7,8]
[6,7,8,2,7,1,3,9,null,1,4]
 */