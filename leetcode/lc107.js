/**
107. Binary Tree Level Order Traversal II

Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]

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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    let ret = [];
    if( !root ) {
        return ret;
    }
    ret.push( [root] );
    while( true ) {
        let temp = [];
        let prev = ret[ret.length-1];
        for ( let i = 0; i< prev.length ; i++ ) {
            if( prev[i].left ) {
                temp.push( prev[i].left );
            }
            if( prev[i].right ) {
                temp.push( prev[i].right );
            }
        }
        if (temp.length > 0) {
            ret.push( temp );
        } else {
            break;
        }
    }
    for ( let i = 0; i < ret.length ; i++) {
        for ( let j = 0; j< ret[i].length; j++ ) {
            ret[i][j] = ret[i][j].val;
        }
    }
    ret = ret.reverse()
    return ret; 
};
