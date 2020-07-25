/**
653. Two Sum IV - Input is a BST

Given a Binary Search Tree and a target number, return true if there exist two elements in the BST such that their sum is equal to the given target.

Example 1:

Input: 
    5
   / \
  3   6
 / \   \
2   4   7

Target = 9

Output: True
 

Example 2:

Input: 
    5
   / \
  3   6
 / \   \
2   4   7

Target = 28

Output: False
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
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    let ret = false;
    if (!root) {
        return false;
    } 
    const arr = [];
    const helper = (node) => {
        if (!node) { return; }
        node.left && helper( node.left );
        arr.push(node.val);
        node.right && helper( node.right );
    }
    helper(root);
    // console.log( arr );
    let fir = 0, last = arr.length-1;
    while ( fir < last) {
        const temp = arr[fir] + arr[last];
        if ( temp === k ) {
            return true;
        } if ( temp > k ) {
            last--;
        } else {
            fir++;
        }
    } 
    return false;
    
};

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTargetNLogN = function(root, k) {
    let ret = false;
    
    const find = (node, target, exclude) => {
      if ( !node ) {
        return false;
      }
      if ( node.val === target && exclude !== node ) {
        return true;
      }
      if ( node.left && find( node.left, target, exclude ) ) {
        return true;
      }
      if ( node.right && find( node.right, target, exclude ) ) {
        return true;
      }
      return false;
    }
    const helper = ( node ) => {
        if ( !node ) {
          return false;
        }
        let target = k - node.val;
        if ( find( root, target, node ) ) {
          return true;
        }
        if ( node.left && helper( node.left ) ) {
          return true;
        }
        if ( node.right && helper( node.right ) ) {
          return true;
        }
        return false
    }
    return helper( root );
};

/**
[5,3,6,2,4,null,7]
9
*/