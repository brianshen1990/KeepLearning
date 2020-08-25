/**

1530. Number of Good Leaf Nodes Pairs

Given the root of a binary tree and an integer distance. A pair of two different leaf nodes of a binary tree is said to be good if the length of the shortest path between them is less than or equal to distance.

Return the number of good leaf node pairs in the tree.

 

Example 1:


Input: root = [1,2,3,null,4], distance = 3
Output: 1
Explanation: The leaf nodes of the tree are 3 and 4 and the length of the shortest path between them is 3. This is the only good pair.
Example 2:


Input: root = [1,2,3,4,5,6,7], distance = 3
Output: 2
Explanation: The good pairs are [4,5] and [6,7] with shortest path = 2. The pair [4,6] is not good because the length of ther shortest path between them is 4.
Example 3:

Input: root = [7,1,4,6,null,5,3,null,null,null,null,null,2], distance = 3
Output: 1
Explanation: The only good pair is [2,5].
Example 4:

Input: root = [100], distance = 1
Output: 0
Example 5:

Input: root = [1,1,1], distance = 2
Output: 1
 

Constraints:

The number of nodes in the tree is in the range [1, 2^10].
Each node's value is between [1, 100].
1 <= distance <= 10

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
 * @param {number} distance
 * @return {number}
 */
var countPairs = function(root, distance) {
    
  const helper = (node) => {
      if ( !node ) {
          return { val: 0, keys: {} }
      }
      if (! ( node.left || node.right ) ) {
          return { val: 0, keys: { 1: 1} }
      }
      let left = {}
      let right = {}
      let ret = 0
      if ( node.left ) {
          const temp = helper( node.left );
          ret += temp.val
          left = temp.keys;
      } 
      if ( node.right) {
          const temp = helper( node.right );
          ret += temp.val
          right = temp.keys;
      }
      // console.log( node.val, left, right );
      Object.keys( left ).map( deepL => {
          for ( let i = 1 ; i <= distance - parseInt(deepL) ; i++ ) {
              if ( i in right ) {
                  ret += left[deepL] * right[i];
              }
          }        
      })
      Object.keys( right ).map( deepR => {
          left[deepR] = left[deepR] || 0;
          left[deepR] += right[deepR];
      });
      let retObj = {}
      Object.keys( left ).map( key => {
          retObj[ parseInt(key)+1 ] = left[key];
      }) 
     
      return { val: ret, keys: retObj }
  }
  
  const res = helper( root );
  return res.val;

};


/**
[1,2,3,null,4]
3
[1,2,3,4,5,6,7]
3
[7,1,4,6,null,5,3,null,null,null,null,null,2]
3
[100]
1
[1,1,1]
2
[1,2,3]
1
[1,2,3]
2
[1,2,3]
3
 */