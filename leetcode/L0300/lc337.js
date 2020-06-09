/**
337. House Robber III

The thief has found himself a new place for his thievery again. There is only one entrance to this area, called the "root." Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that "all houses in this place forms a binary tree". It will automatically contact the police if two directly-linked houses were broken into on the same night.

Determine the maximum amount of money the thief can rob tonight without alerting the police.

Example 1:

Input: [3,2,3,null,3,null,1]

     3
    / \
   2   3
    \   \ 
     3   1

Output: 7 
Explanation: Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.
Example 2:

Input: [3,4,5,1,3,null,1]

     3
    / \
   4   5
  / \   \ 
 1   3   1

Output: 9
Explanation: Maximum amount of money the thief can rob = 4 + 5 = 9.
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
var rob = function(root) {
    if ( !root ) {
        return 0;
    }
    
    const helper = (node) => {
        let leftRes = { yes: 0, no: 0 };
        let rightRes = { yes: 0, no: 0 };
        if ( node.left ) {
            leftRes = helper( node.left );
        }
        if ( node.right ) {
             rightRes = helper( node.right );
        }
        const res = { yes: 0, no: 0 }
        res.yes = leftRes.no  + rightRes.no + node.val;
        res.no = Math.max(leftRes.yes, leftRes.no ) + 
            Math.max(rightRes.yes, rightRes.no);
        
        return res;
    }
    
    const ret = helper( root );
    
    return Math.max( ret.yes, ret.no );
    
    
};


/** 
[3,2,3,null,3,null,1]
[]
[3,4,5,1,3,null,1]
[3,4,5]
[3]
[3,4]
[3,4,5,1]
*/