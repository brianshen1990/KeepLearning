/**
124. Binary Tree Maximum Path Sum

Given a non-empty binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

Example 1:

Input: [1,2,3]

       1
      / \
     2   3

Output: 6
Example 2:

Input: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7

Output: 42

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
var maxPathSum = function(root) {    
    let max = [root.val];
    helper(root, max);
    return max[0];
};
var helper = function(root, max) {
    if ( root.val > max[0] ) {
        max[0] = root.val;
    }
    if( !root.left && !root.right ) {
        return root.val;
    }
    
    let leftMax = 0;
    let rightMax = 0;
    if ( root.left !== null ) {
        leftMax = helper(root.left, max);
    }
    if ( root.right !== null ) {
        rightMax = helper(root.right, max);
    }
    // console.log( leftMax, rightMax, root.val, max[0]);
    if ( leftMax > 0 && rightMax > 0 ) {
        // if current node's value is bigger
        if ( leftMax + rightMax + root.val > max[0] ) {
            max[0] = leftMax + rightMax + root.val;
            // console.log( max[0] );
        }
        // choose the bigger one, because we can only iterate one side
        return Math.max( leftMax, rightMax) +  root.val;
    }
    if (leftMax > 0 ) {
        if (leftMax + root.val > max[0] ) {
            max[0] = leftMax + root.val;
        }
        return leftMax + root.val;
    }
    if ( rightMax > 0 ) {
        if ( rightMax + root.val > max[0] ) {
            max[0] = rightMax + root.val;
        }
        return rightMax + root.val;
    }
    // this is very important, since when all are <= 0
    return root.val;
}


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
var maxPathSum2nd = function(root) {
    if (!root) {
        return -2147483648;
    }
    
    const helper = (iRoot) => {
        const res = {
            maxSum: -Number.MAX_VALUE,
            oneSideMaxSum: -Number.MAX_VALUE
        }
        
        if (!iRoot) {
            return res;
        } 
        
        const left = helper(iRoot.left);
        const right = helper(iRoot.right);
        res.maxSum = Math.max(
            Math.max(left.oneSideMaxSum, 0) + 
            Math.max(right.oneSideMaxSum, 0) + iRoot.val,
            left.maxSum, 
            right.maxSum);
        res.oneSideMaxSum = Math.max( 
            Math.max(left.oneSideMaxSum, 0) +  iRoot.val,
            Math.max(right.oneSideMaxSum, 0) + iRoot.val)
        
        return res;
    }
    
    const ret = helper(root);
    // console.log( ret );
    return ret.maxSum;
};

/**
[1,2,3]
[1,2,-3]
[-10,9,20,null,null,15,7]
[10,9,20,null,null,15,7]
[1]
[1,0,1,1,2,0,-1,0,1,-1,0,-1,0,1,0]
 */