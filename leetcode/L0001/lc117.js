/**
117. Populating Next Right Pointers in Each Node II

Given a binary tree

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

 

Follow up:

You may only use constant extra space.
Recursive approach is fine, you may assume implicit stack space does not count as extra space for this problem.
 

Example 1:



Input: root = [1,2,3,4,5,null,7]
Output: [1,#,2,3,#,4,5,7,#]
Explanation: Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
 

Constraints:

The number of nodes in the given tree is less than 6000.
-100 <= node.val <= 100



/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if( !root ) {
        return root;
    }
    let arr = [root];
    
    while( true ) {
        let tempArr = [];
        for( let i = 0; i < arr.length; i++ ) {
            if ( arr[i].left ) {
                tempArr.push( arr[i].left );
            }
            if( arr[i].right ) {
                tempArr.push( arr[i].right );
            }
        }
        if( tempArr.length === 0 ) {
            break;
        }
        // console.log( tempArr.length );
        for( let i = 0; i < tempArr.length -1 ; i++  ) {
            tempArr[i].next = tempArr[i+1];
        }
        tempArr[tempArr.length -1].next = null;
        arr = tempArr;
        // console.log(arr);
    }
    return root;
};

/**
 * 
[1,2,3,4,5,null,7]
[1,2,3,null,5,null,7]
[]
[1]
[1,2]
 */