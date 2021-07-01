/**
1382. Balance a Binary Search Tree

Given a binary search tree, return a balanced binary search tree with the same node values.

A binary search tree is balanced if and only if the depth of the two subtrees of every node never differ by more than 1.

If there is more than one answer, return any of them.

 

Example 1:



Input: root = [1,null,2,null,3,null,4,null,null]
Output: [2,1,3,null,null,null,4]
Explanation: This is not the only correct answer, [3,1,4,null,2,null,null] is also correct.
 

Constraints:

The number of nodes in the tree is between 1 and 10^4.
The tree nodes will have distinct values between 1 and 10^5.
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
 var balanceBST = function(root) {
    const arr = [];
    
    const helperIter = (node) => {
        if ( !node ) return;
        if ( node.left ) {
            helperIter( node.left );
        }
        arr.push( node.val );
        if ( node.right ) {
            helperIter( node.right );
        }
    }
    helperIter(root);

    // not included
    const helperConstruct = ( start, end) => {
        if ( end <= start ) return null;
        if ( end === start + 1 ) {
            return new TreeNode(arr[start]);
        }
        const middle = Math.floor( ( start + end ) / 2 );
        const ret = new TreeNode(arr[middle]);
        ret.left = helperConstruct(start, middle);
        ret.right = helperConstruct(middle + 1, end);
        return ret;
    }
    
    return helperConstruct(0, arr.length);
    
};

/**
[1,null,2,null,3,null,4,null,null]
[1,null,2,null,3,null,4,null,5]
[2,1,3,null,null,null,4,null,6,5,7]
[2,1,3,null,null,null,4]
 */