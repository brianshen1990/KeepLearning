/**
437. Path Sum III

You are given a binary tree in which each node contains an integer value.

Find the number of paths that sum to a given value.

The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.

Example:

root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

Return 3. The paths that sum to 8 are:

1.  5 -> 3
2.  5 -> 2 -> 1
3. -3 -> 11
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
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    
    const helper = (node, map) => {
        // console.log( node && node.val, Object.keys(map) );
        let ret = 0;
        let nextMap = {};
        if ( node ) {
            Object.keys(map).map( item => {
                nextMap[ parseInt(item) + node.val ] = map[ item ];
            });
            nextMap[ node.val ] = nextMap[ node.val ] || 0;
            nextMap[ node.val ]++;
            
            if ( sum in nextMap ) {
                // console.log("hit");
                ret += nextMap[sum]; 
                // console.log("hit", ret, nextMap[sum]);
            }
            if ( node.left ) {
                ret += helper( node.left, nextMap );
            }
            if ( node.right ) {
                ret += helper( node.right, nextMap );
            }
        }
        return ret;
    }
    return helper( root, {} );
    
};


/** 
[10,5,-3,3,2,null,11,3,-2,null,1]
8
[10,5,-3,3,2,null,11,3,-2,null,1]
6
[]
0
[1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,1,2,3,3,3,4,3,2,2,1,3,5,654,323,23]
10
*/