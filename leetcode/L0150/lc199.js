/**
199. Binary Tree Right Side View

Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

Example:

Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---

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
 * @return {number[]}
 */
var rightSideView = function(root) {
    const res = [];
    
    if (!root) {
        return res;
    }
    
    let queue = [root];
    while ( queue.length > 0 ) {
        let temp = [];
        res.push( queue[queue.length-1].val );
        
        for ( let i = 0 ; i < queue.length ; i++ ) {
            if ( queue[i].left ) {
                temp.push(queue[i].left);
            }
            if ( queue[i].right ) {
                temp.push(queue[i].right);
            }
        }
        queue = temp;
    }
    return res;
};


/**
[1,2,3,null,5,null,4]
[]
[1,2,3]
[1,2,3,null,5]
*/
