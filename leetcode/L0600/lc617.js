/**
 * 
617. Merge Two Binary Trees

Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

Example 1:

Input: 
	Tree 1                     Tree 2                  
          1                         2                             
         / \                       / \                            
        3   2                     1   3                        
       /                           \   \                      
      5                             4   7                  
Output: 
Merged tree:
	     3
	    / \
	   4   5
	  / \   \ 
	 5   4   7
 

Note: The merging process must start from the root nodes of both trees.

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
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    
    if ( !(t1 || t2) ) return null;
    
    let ret = new TreeNode(0);
    
    const helper= ( node1, node2, fillNode ) => {
        fillNode.val = ( node1 ? node1.val : 0 ) + ( node2 ? node2.val : 0 );
        if ( node1 || node2 ) {
            if ( (node1 && node1.left) || (node2 && node2.left) ) {
                fillNode.left = new TreeNode(0);
                helper( node1 && node1.left, node2 && node2.left, fillNode.left );
            }
            
            if ( (node1 && node1.right) || (node2 && node2.right) ) {
                fillNode.right = new TreeNode(0);
                helper( node1 && node1.right, node2 && node2.right, fillNode.right );
            }
        }
    }
    
    helper( t1, t2, ret );
    return ret;
};

/**
[1,3,2,5]
[2,1,3,null,4,null,7]
[]
[1,3,2,5]
[2,1,3,null,4,null,7]
[]
[]
[]
*/