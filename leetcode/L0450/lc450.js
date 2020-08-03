/**

450. Delete Node in a BST

Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

Basically, the deletion can be divided into two stages:

Search for a node to remove.
If the node is found, delete the node.
Note: Time complexity should be O(height of tree).

Example:

root = [5,3,6,2,4,null,7]
key = 3

    5
   / \
  3   6
 / \   \
2   4   7

Given key to delete is 3. So we find the node with value 3 and delete it.

One valid answer is [5,4,6,2,null,null,7], shown in the following BST.

    5
   / \
  4   6
 /     \
2       7

Another valid answer is [5,2,6,null,4,null,7].

    5
   / \
  2   6
   \   \
    4   7

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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    let dummy = new TreeNode(-1, root, null);
    
    if ( !root ) {
        return null;
    }
    
    let node = root;
    let parent = dummy;
    while ( node ) {
        if ( node.val === key ) {
            // delete
            if ( node.left === null && node.right === null ) {
                // delete directly
                parent.left === node ? ( parent.left = null ) : ( parent.right = null );
            } else if ( node.left === null ) {
                parent.left === node ? ( parent.left = node.right ) : ( parent.right = node.right );
            } else if ( node.right === null ) {
                parent.left === node ? ( parent.left = node.left ) : ( parent.right = node.left ); 
            } else {
                parent.left === node ? ( parent.left = node.right ) : ( parent.right = node.right ); 
                let rightLeft = node.right;
                while ( rightLeft && rightLeft.left ) {
                    rightLeft = rightLeft.left;
                }
                rightLeft.left = node.left;
            }
            break;
        } else if ( node.val > key ) {
            parent = node;
            node = node.left;
        } else {
            parent = node;
            node = node.right;
        }
    }
    return dummy.left;
};


/**
[5,3,6,2,4,null,7]
3
[5,3,6,2,4,null,7]
5
[5,3,6,2,4,null,7]
1
[5,3,6,2,4,null,7]
6
[5,3,6,2,4,null,7]
8
[5,3,7,2,4,6,8]
5
 */