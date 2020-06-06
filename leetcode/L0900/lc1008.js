/**
1008. Construct Binary Search Tree from Preorder Traversal

Return the root node of a binary search tree that matches the given preorder traversal.

(Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value < node.val, and any descendant of node.right has a value > node.val.  Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)

It's guaranteed that for the given test cases there is always possible to find a binary search tree with the given requirements.

Example 1:

Input: [8,5,1,7,10,12]
Output: [8,5,10,1,7,null,12]

 

Constraints:

1 <= preorder.length <= 100
1 <= preorder[i] <= 10^8
The values of preorder are distinct.
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
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    if ( preorder.length === 0 ) {
        return null;
    }
    
    const helper = (list) => {
        if ( list.length === 0 ) {
            return null;
        }
        
        const root = new TreeNode(list[0]);
        const leftList = [];
        const rightList = [];
        let index = 1;
        while ( index < list.length && list[index] < list[0] ) {
            leftList.push( list[index] );
            index++;
        }
        while ( index < list.length ) {
            rightList.push( list[index] );
            index++;
        }
        
        root.left = helper( leftList );
        root.right = helper( rightList );
        return root;
    }
    
    return helper( preorder );
};


/**
[8,5,1,7,10,12]
[8,5,1,7]
[8,10,12]
 */