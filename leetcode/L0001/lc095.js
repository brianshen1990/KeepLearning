/**
95. Unique Binary Search Trees II

Given an integer n, generate all structurally unique BST's (binary search trees) that store values 1 ... n.

Example:

Input: 3
Output:
[
  [1,null,3,2],
  [3,2,null,1],
  [3,1,null,null,2],
  [2,1,3],
  [1,null,2,null,3]
]
Explanation:
The above output corresponds to the 5 unique BST's shown below:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    // let temp = new TreeNode(1);
    // return [temp,temp];
    if( n <= 0 ) {
        return [];
    }
    let arr = [];
    for( let i = 0; i< n; i++ ) {
        arr.push(i+1);
    }
    return helper( arr);
};

var helper = function( arr ) {
    if ( arr.length === 1 ) {
        return [ new TreeNode(arr[0]) ];
    } 
    let ret = [];
    for ( let i = 0; i < arr.length ; i++ ) {
        let leftCond = [];
        let rightCond = [];
        if( i === 0 ) {
            // only construct right
            rightCond = helper( arr.slice(i+1) );
            for ( let j = 0; j < rightCond.length ; j++ ) {
                let temp = new TreeNode(arr[i]);
                temp.right = rightCond[j];
                ret.push( temp );
            }
        } else if( i === arr.length - 1) {
            // only constaruct left node
            leftCond = helper( arr.slice(0, i) );
            for ( let j = 0; j < leftCond.length ; j++ ) {
                let temp = new TreeNode(arr[i]);
                temp.left = leftCond[j];
                ret.push( temp );
            }
        } else {
            // both sides
            rightCond = helper( arr.slice(i+1) );
            leftCond = helper( arr.slice(0, i) );
            // now cross them
            for ( let j = 0; j < leftCond.length ; j++ ) {
                for ( let k = 0 ; k< rightCond.length ; k++ ) {
                    let temp = new TreeNode(arr[i]);
                    temp.left = leftCond[j];
                    temp.right = rightCond[k];
                    ret.push( temp );
                }
            }
        }   
    }
    return ret;
}
