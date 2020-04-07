/**
106. Construct Binary Tree from Inorder and Postorder Traversal
Given inorder and postorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

inorder = [9,3,15,20,7]
postorder = [9,15,7,20,3]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if( inorder.length === 0 ) {
        return null;
    }
    if( inorder.length === 0 ) {
        return new TreeNode(inorder[0].val);
    }
    
    
    let rootVal = postorder[postorder.length-1];
    let indexIn = inorder.indexOf(rootVal);
    let root = new TreeNode(rootVal);
    
    root.left = buildTree(inorder.slice(0, indexIn), postorder.slice(0, indexIn) );
    root.right = buildTree(inorder.slice(indexIn+1), postorder.slice(indexIn, postorder.length-1) );
    return root;
};


/**
 * 
[9,3,15,20,7]
[9,15,7,20,3]
[3,15,20,7]
[15,7,20,3]
[3,20,7]
[7,20,3]
[3]
[3]
[]
[]
 */