/**
894. All Possible Full Binary Trees

A full binary tree is a binary tree where each node has exactly 0 or 2 children.

Return a list of all possible full binary trees with N nodes.  Each element of the answer is the root node of one possible tree.

Each node of each tree in the answer must have node.val = 0.

You may return the final list of trees in any order.



Example 1:

Input: 7
Output: [[0,0,0,null,null,0,0,null,null,0,0],[0,0,0,null,null,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,null,null,null,null,0,0],[0,0,0,0,0,null,null,0,0]]
Explanation:



Note:

1 <= N <= 20
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
  * @param {number} N
  * @return {TreeNode[]}
  */
 var allPossibleFBT = function(N) {

     const helper = ( count ) => {
         if ( count % 2 === 0 ) return [];
         const ret = [];
         if ( count === 1 ) {
             ret.push( new TreeNode(0) );
             return ret;
         }
         for ( let i = 1 ; i < count ; i += 2 ) {
             const leftArr = helper( i );
             const rightArr = helper( count - 1 - i );

             leftArr.forEach( left => {
                 rightArr.forEach( right => {
                     let node = new TreeNode(0, left, right);
                     ret.push( node );
                 })
             })
         }
         return ret;
     }
     return helper( N );
 };


/**
1
2
7
16
13
19
20
 */
