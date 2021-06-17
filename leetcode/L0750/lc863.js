/**

863. All Nodes Distance K in Binary Tree

We are given a binary tree (with root node root), a target node, and an integer value k.

Return a list of the values of all nodes that have a distance k from the target node.  The answer can be returned in any order.

 

Example 1:

Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2

Output: [7,4,1]

Explanation: 
The nodes that are a distance 2 from the target node (with value 5)
have values 7, 4, and 1.



Note that the inputs "root" and "target" are actually TreeNodes.
The descriptions of the inputs above are just serializations of these objects.
 

Note:

The given tree is non-empty.
Each node in the tree has unique values 0 <= node.val <= 500.
The target node is a node in the tree.
0 <= k <= 1000.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
 var distanceK = function(root, target, k) {    
    
    const helperParent =  (node, parent) => {
        if ( !node ) return;
        node.parent = parent;
        helperParent( node.left, node );
        helperParent( node.right, node );
    }
    helperParent( root, null );
    
    const cache = new Set();
    let next = [ target ];
    
    while ( next.length > 0 && k > 0 ) {
        const nnext = [];
        next.forEach( node => cache.add(node) );
        
        next.forEach( node => {
            if ( node.left && !cache.has(node.left) ) {
                cache.add( node.left );
                nnext.push( node.left );
            }
            if ( node.right && !cache.has(node.right) ) {
                cache.add( node.right );
                nnext.push( node.right );
            }
            if ( node.parent && !cache.has(node.parent) ) {
                cache.add( node.parent );
                nnext.push( node.parent );
            }
        });
        next = nnext;
        k--;
    }
    return next.map( node => node.val );
    
};

/**
[3,5,1,6,2,0,8,null,null,7,4]
5
100
[3,5,1,6,2,0,8,null,null,7,4]
5
2
[3,5,1,6,2,0,8,null,null,7,4]
2
2
[3,5,1,6,2,0,8,null,null,7,4]
5
1
[3,5,1,6,2,0,8,9,10,7,4]
2
2
[3,5,1,6,2,0,8,9,10,7,4]
2
0
[3,5,1,6,2,0,8,9,10,7,4,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
2
2
[3,5,1,6,2,0,8,9,10,7,4,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
5
3
[3,5,1,6,2,0,8,9,10,7,4,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
3
2
[3,5,1,6,2,0,8,9,10,7,4,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
3
0
[3,5,1,6,2,0,8,9,10,7,4,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
2
3
[3,5,1,6,2,0,8,9,10,7,4,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
2
0
[3,5,1,6,2,0,8,9,10,7,4,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
2
20
[3,5,1,6,2,0,8,9,10,7,4,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
2
4
[3]
3
0
[3,5,1,6,2,0,8,null,null,7,4]
7
4
[0,5,1,null,null,2,6,null,3,null,null,4,null,7]
7
3
  */
