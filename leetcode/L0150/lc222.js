/**
222. Count Complete Tree Nodes

Given a complete binary tree, count the number of nodes.

Note:

Definition of a complete binary tree from Wikipedia:
In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

Example:

Input: 
    1
   / \
  2   3
 / \  /
4  5 6

Output: 6

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
 * @return {number}
 */
var countNodes = function(root) {
    if ( ! root ) {
        return 0;
    }
    let count = 0;
    let arr = [root]

    while ( arr.length > 0 ) {
        count += arr.length;
        let newArr = [];
        for ( let i = 0; i < arr.length ; i++ ) {
            if ( arr[i].left ) {
                newArr.push( arr[i].left );
            } 
            if ( arr[i].right ) {
                newArr.push( arr[i].right ); 
            }
        }
        arr = newArr;
    }
    return count;    
};


/**
[1,2,3,4,5,6]
 */