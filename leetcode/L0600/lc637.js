/**
637. Average of Levels in Binary Tree

Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
Example 1:
Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]
Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
Note:
The range of node's value is in the range of 32-bit signed integer.

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
var averageOfLevels = function(root) {
    
    const ret = [];
    if (!root) return ret;
    
    let next = [root];
    while ( next.length > 0 ) {
        let future = [];
        ret.push( next.reduce( (acc, cur) => acc+ cur.val, 0) / next.length );
        next.forEach( item => {
            if ( item.left ) {
                future.push(item.left);
            } 
            if (item.right) {
                future.push(item.right);
            }
        })
        next = future;
    }
    
    return ret;
    
};

/**
[3,9,20,15,7]
[3,9,20,null, null,15,7]
[]
[3]
*/