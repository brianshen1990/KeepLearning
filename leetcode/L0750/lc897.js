/**

897. Increasing Order Search Tree

Given a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only 1 right child.

Example 1:
Input: [5,3,6,2,4,null,8,1,null,null,null,7,9]

       5
      / \
    3    6
   / \    \
  2   4    8
 /        / \ 
1        7   9

Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

 1
  \
   2
    \
     3
      \
       4
        \
         5
          \
           6
            \
             7
              \
               8
                \
                 9  
 

Constraints:

The number of nodes in the given tree will be between 1 and 100.
Each node will have a unique integer value from 0 to 1000.

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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    const dummy = new TreeNode(-1);
    dummy.right = root;
    
    const helper = ( node, parent ) => {
        const ret = { head:node, end: node };
        if ( !node ) return ret;
        
        if ( node.left ) {
            const { head, end } = helper( node.left, null );
            // console.log(node.val, "---left", head && head.val, end && end.val)
            if ( parent ) parent.right = head;
            end.right = node;
            ret.head = head;
            node.left = null;
        }
        
        if ( node.right ) {
            const { head, end } = helper( node.right, node );
            // console.log(node.val,"---right", head && head.val, end && end.val)
            ret.end = end;
        }
        
        return ret;
    }
    
    helper( root, dummy );
    return dummy.right;
};


/**

[5,3,6,2,4,null,8,1,null,null,null,7,9]
[1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
[5,3,6]

 */