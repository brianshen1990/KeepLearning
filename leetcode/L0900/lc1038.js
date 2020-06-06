/**
1038. Binary Search Tree to Greater Sum Tree

Given the root of a binary search tree with distinct values, modify it so that every node has a new value equal to the sum of the values of the original tree that are greater than or equal to node.val.

As a reminder, a binary search tree is a tree that satisfies these constraints:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:



Input: [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
Output: [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
 

Constraints:

The number of nodes in the tree is between 1 and 100.
Each node will have value between 0 and 100.
The given tree is a binary search tree.
Note: This question is the same as 538: https://leetcode.com/problems/convert-bst-to-greater-tree/
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
 * @return {TreeNode}
 */
var bstToGst = function(root) {
    // right, middle, left
    if (!root) {
        return root;
    }

    let acc = 0;
    const helper = (_root) => {
        if ( _root.right ) {
            helper( _root.right );
        }
        
        const temp = _root.val;
        _root.val += acc;
        acc += temp;
        
        if ( _root.left ) {
            helper( _root.left );
        }
        
    }
    
    helper(root);
    return root;  
};

/**
[8,5,1,7,10,12]
[8,5,1,7]
[8,10,12]
[4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
 */