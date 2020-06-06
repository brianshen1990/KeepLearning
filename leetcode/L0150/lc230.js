/**
230. Kth Smallest Element in a BST

Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

 

Example 1:

Input: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
Output: 1
Example 2:

Input: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
Output: 3
Follow up:
What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?

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
 * @return {number}
 */
var kthSmallest = function(_root, _k) {
    
    const inorder = (root, cnt, k) => {
        // console.log(root.val, cnt.val, k)
        let res = Number.MAX_VALUE;
        if ( root.left ) {
            res = inorder(root.left, cnt, k);
            if ( res !== Number.MAX_VALUE ) {
                return res;
            }
        }
        
        if ( cnt.val === k ) {
            return root.val;
        }
        // console.log( cnt.val, root.val );
        cnt.val = cnt.val + 1;
        
        
        if ( root.right ) {
            res = inorder(root.right, cnt, k);
            if ( res !== Number.MAX_VALUE ) {
                return res;
            }
        }
        return res;
        
    }
    const count = {
        val: 1
    };
        
    return inorder( _root, count, _k );
    
};



/**
[3,1,4,null,2]
1
[5,3,6,2,4,null,null,1]
3
[5,3,6,2,4,null,null,1]
6
[1]
1
 */