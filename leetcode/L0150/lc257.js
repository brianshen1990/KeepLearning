/**
257. Binary Tree Paths

Given a binary tree, return all root-to-leaf paths.

Note: A leaf is a node with no children.

Example:

Input:

   1
 /   \
2     3
 \
  5

Output: ["1->2->5", "1->3"]

Explanation: All root-to-leaf paths are: 1->2->5, 1->3
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    
    let ret = [];
    
    const helper = (node, temp, res) => {
        if (!node) {
            return;
        }
        temp.push(node.val);
        if ( node.left || node.right ) {
            if ( node.left ) {
                helper(node.left, temp, res);
            }
            if ( node.right ) {
                helper(node.right, temp, res);
            }
        } else {
            // leaf
            res.push( [...temp] );
        }
        temp.pop();
    }
    
    helper(root, [], ret);
    
    return ret.map( item => item.join("->") );
    
};

/**
[1,2,3,null,5]
[1,2,3]
[1]
[]
 */