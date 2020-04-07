/**
129. Sum Root to Leaf Numbers

Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.

An example is the root-to-leaf path 1->2->3 which represents the number 123.

Find the total sum of all root-to-leaf numbers.

Note: A leaf is a node with no children.

Example:

Input: [1,2,3]
    1
   / \
  2   3
Output: 25
Explanation:
The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.
Therefore, sum = 12 + 13 = 25.
Example 2:

Input: [4,9,0,5,1]
    4
   / \
  9   0
 / \
5   1
Output: 1026
Explanation:
The root-to-leaf path 4->9->5 represents the number 495.
The root-to-leaf path 4->9->1 represents the number 491.
The root-to-leaf path 4->0 represents the number 40.
Therefore, sum = 495 + 491 + 40 = 1026.

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
var sumNumbers = function(root) {
    if (!root) {
        return 0;
    }
    let sum = [0];
    helper(root, 0, sum);
    return sum[0];
};

var helper = function(root, prev, sum) {
    if ( !root.left && !root.right ) {
        sum[0] += parseInt(prev + root.val );
        return;
    }
    let nextPrev = ( prev + root.val ) * 10;
    if ( root.left ) {
        helper( root.left, nextPrev, sum );
    }
    if ( root.right ) {
        helper( root.right, nextPrev, sum );
    }
}

/**
 * 
[1,2,3]
[4,9,0,5,1]
[1,2]
[1]
[]
 */