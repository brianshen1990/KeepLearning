/**

1305. All Elements in Two Binary Search Trees

Given two binary search trees root1 and root2.

Return a list containing all the integers from both trees sorted in ascending order.

 

Example 1:


Input: root1 = [2,1,4], root2 = [1,0,3]
Output: [0,1,1,2,3,4]
Example 2:

Input: root1 = [0,-10,10], root2 = [5,1,7,0,2]
Output: [-10,0,0,1,2,5,7,10]
Example 3:

Input: root1 = [], root2 = [5,1,7,0,2]
Output: [0,1,2,5,7]
Example 4:

Input: root1 = [0,-10,10], root2 = []
Output: [-10,0,10]
Example 5:


Input: root1 = [1,null,8], root2 = [8,1]
Output: [1,1,8,8]
 

Constraints:

Each tree has at most 5000 nodes.
Each node's value is between [-10^5, 10^5].
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    // middle order + merge sort
    const middleIter = (node, arr) => {
        if ( node ) {
            middleIter(node.left, arr);
            arr.push(node.val);
            middleIter(node.right, arr);
        }
    }
    
    const arr1 = [];
    middleIter( root1, arr1 );
    const arr2 = [];
    middleIter( root2, arr2 );
    
    const ret = [];
    let index1 = 0;
    let index2 = 0;
    while ( index1 < arr1.length && index2 < arr2.length ) {
        if ( arr1[index1] <= arr2[index2] ) {
            ret.push( arr1[index1++] );
        } else {
            ret.push( arr2[index2++] );
        }
    }
    while ( index1 < arr1.length ) {
        ret.push( arr1[index1++] );
    }
    while ( index2 < arr2.length ) {
        ret.push( arr2[index2++] );
    }
    return ret;
    
};

/**
[2,1,4]
[1,0,3]
[0,-10,10]
[5,1,7,0,2]
[]
[5,1,7,0,2]
[0,-10,10]
[]
[1,null,8]
[8,1]
 */