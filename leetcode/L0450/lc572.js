/**

572. Subtree of Another Tree

Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

Example 1:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
Given tree t:
   4 
  / \
 1   2
Return true, because t has the same structure and node values with a subtree of s.
 

Example 2:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
    /
   0
Given tree t:
   4
  / \
 1   2
Return false.

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
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    // middle iter compare
    const middleIter = (node) => {
        if ( node ) {
            let left = middleIter(node.left);
            let right = middleIter(node.right);
            return [...left, node.val, ...right];
        }
        return [];
    }
    const tArr = middleIter(t);
    const tArrStr = tArr.join("_");
    // console.log( tArr );
    
    
    const find = (node) => {
        if ( node ) {
            let left = find(node.left);
            if ( left.res ) return { res: true, arr:[] };
            
            let right = find(node.right);
            if ( right.res ) return { res: true, arr:[] };
            
            const arr = [ ...left.arr, node.val, ...right.arr ];
            // console.log(node.val,  arr )
            if ( node.val === t.val && arr.length === tArr.length ) {
                return { res: arr.join("_") === tArrStr, arr };
            } else {
                return { res: false, arr };
            }
        }
        return { res:false, arr: []};
    }
    
    return find(s).res;
};

/**
[3,4,5,1,2]
[4,1,2]
[3,4,5,1,2,null, null,null,null, 0]
[4,1,2]
[3,4,5,1,2]
[3,4,5,1,2]
[1]
[2]
[1]
[1]
 */