/**

538. Convert BST to Greater Tree

Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.

Example:

Input: The root of a Binary Search Tree like this:
              5
            /   \
           2     13

Output: The root of a Greater Tree like this:
             18
            /   \
          20     13
Note: This question is the same as 1038: https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/
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
var convertBST = function(root) {
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
[5,2,13]
[5,2]
[5]
[]
[8,5,1,7,10,12]
[8,5,1,7]
[8,10,12]
 */