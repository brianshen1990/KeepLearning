/**
105. Construct Binary Tree from Preorder and Inorder Traversal

Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    // console.log(preorder, inorder);
    if( preorder.length === 0 ) {
        return null;
    }
    if( preorder.length === 0 ) {
        return new TreeNode(preorder[0].val);
    }
    
    let rootVal = preorder[0];
    let indexIn = inorder.indexOf(rootVal);
    let root = new TreeNode(rootVal);
    root.left = buildTree(preorder.slice(1, indexIn+1), inorder.slice(0, indexIn) );
    root.right = buildTree(preorder.slice(indexIn+1), inorder.slice(indexIn+1)  );
    return root;
};

/**
 * 
[3,9,20,15,7]
[9,3,15,20,7]
[3,20,15]
[3,15,20]
[3,20,7]
[3,20,7]
[3]
[3]
[]
[]
 */