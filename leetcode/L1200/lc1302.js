/**

1302. Deepest Leaves Sum

Given a binary tree, return the sum of values of its deepest leaves.
 

Example 1:



Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
Output: 15
 

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
var deepestLeavesSum = function(root) {
    if (!root) return 0;
    
    let next = [root];
    let ret = 0 ;
    
    while ( next.length > 0 ) {
        ret = next.map( item => item.val ).reduce( (acc, cur) => acc + cur, 0 );
        
        let nextNext = [];
        next.forEach( item => {
            if ( item.left ) nextNext.push( item.left );
            if ( item.right ) nextNext.push( item.right );
        })
        next = nextNext;
    }
    
    return ret;  
};


/**
[1,2,3,4,5,null,6,7,null,null,null,null,8]
[1]
[1,2]
 */