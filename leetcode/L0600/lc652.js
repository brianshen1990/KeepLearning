/**
652. Find Duplicate Subtrees

Given the root of a binary tree, return all duplicate subtrees.

For each kind of duplicate subtrees, you only need to return the root node of any one of them.

Two trees are duplicate if they have the same structure with the same node values.

 

Example 1:


Input: root = [1,2,3,4,null,2,4,null,null,4]
Output: [[2,4],[4]]
Example 2:


Input: root = [2,1,1]
Output: [[1]]
Example 3:


Input: root = [2,2,2,3,null,3,null]
Output: [[2,3],[3]]
 

Constraints:

The number of the nodes in the tree will be in the range [1, 10^4]
-200 <= Node.val <= 200

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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
  const cache = {};
  const ret = [];
  
  const helper = ( node ) => {
      if ( !node ) return "#";
      
      const left = helper(node.left);
      const right = helper(node.right);
      const val = `${node.val},${left},${right}`;
      cache[val] = cache[val] || 0;
      cache[val]++;
      if ( cache[val] === 2 ) {
          ret.push(node);
      }
      return val;
  }
  helper(root);
  console.log(cache);
  return ret;
};

/**
[0,0,0,0,null,null,0,null,null,null,0]
[1,2,3,4,null,2,4,null,null,4]
[2,1,1]
[2,2,2,3,null,3,null]
*/