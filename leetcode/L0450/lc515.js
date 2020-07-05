/**

515. Find Largest Value in Each Tree Row

You need to find the largest value in each row of a binary tree.

Example:
Input: 

          1
         / \
        3   2
       / \   \  
      5   3   9 

Output: [1, 3, 9]
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
var largestValues = function(root) {
    const ret = [];
    if (!root) {
        return ret;
    }
    
    let cur = [root];
    while ( cur.length > 0 ) {
        let next = [];
        ret.push( Math.max( ... cur.map( item => item.val ) ) );
        
        cur.map( item => {
            item.left ? next.push( item.left ) : null;
            item.right ? next.push( item.right ) : null;
        })
        
        cur = next;
    }
    return ret;
    
};



/**
[1,3,2,5,3,null,9]
[1]
[1,2,3]
 */