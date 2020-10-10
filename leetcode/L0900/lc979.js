/**
979. Distribute Coins in Binary Tree

Given the root of a binary tree with N nodes, each node in the tree has node.val coins, and there are N coins total.

In one move, we may choose two adjacent nodes and move one coin from one node to another.  (The move may be from parent to child, or from child to parent.)

Return the number of moves required to make every node have exactly one coin.

 

Example 1:



Input: [3,0,0]
Output: 2
Explanation: From the root of the tree, we move one coin to its left child, and one coin to its right child.
Example 2:



Input: [0,3,0]
Output: 3
Explanation: From the left child of the root, we move two coins to the root [taking two moves].  Then, we move one coin from the root of the tree to the right child.
Example 3:



Input: [1,0,2]
Output: 2
Example 4:



Input: [1,0,0,null,3]
Output: 4
 

Note:

1<= N <= 100
0 <= node.val <= N
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
var distributeCoins = function(root) {
    
    let steps = 0;
    const helper = (node) => {
        if ( !node ) return 0;
        
        const leftOver = helper( node.left );
        const rightOver = helper( node.right );
        
        steps += Math.abs( leftOver ) + Math.abs( rightOver );
        return  node.val + leftOver + rightOver - 1;        
    }
    helper( root );
    return steps;
};

/**
[3,0,0]
[0,3,0]
[1,0,2]
[1,0,0,null,3]
[0,0,null,null,3]
[0,0,1,null,3]
[0,0,2,null,3,0,1]
 */