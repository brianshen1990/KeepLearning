/**
655. Print Binary Tree

Print a binary tree in an m*n 2D string array following these rules:

The row number m should be equal to the height of the given binary tree.
The column number n should always be an odd number.
The root node's value (in string format) should be put in the exactly middle of the first row it can be put. The column and the row where the root node belongs will separate the rest space into two parts (left-bottom part and right-bottom part). You should print the left subtree in the left-bottom part and print the right subtree in the right-bottom part. The left-bottom part and the right-bottom part should have the same size. Even if one subtree is none while the other is not, you don't need to print anything for the none subtree but still need to leave the space as large as that for the other subtree. However, if two subtrees are none, then you don't need to leave space for both of them.
Each unused space should contain an empty string "".
Print the subtrees following the same rules.
Example 1:
Input:
     1
    /
   2
Output:
[["", "1", ""],
 ["2", "", ""]]
Example 2:
Input:
     1
    / \
   2   3
    \
     4
Output:
[["", "", "", "1", "", "", ""],
 ["", "2", "", "", "", "3", ""],
 ["", "", "4", "", "", "", ""]]
Example 3:
Input:
      1
     / \
    2   5
   / 
  3 
 / 
4 
Output:

[["",  "",  "", "",  "", "", "", "1", "",  "",  "",  "",  "", "", ""]
 ["",  "",  "", "2", "", "", "", "",  "",  "",  "",  "5", "", "", ""]
 ["",  "3", "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]
 ["4", "",  "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]]
Note: The height of binary tree is in the range of [1, 10].
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
 * @return {string[][]}
 */
var printTree = function(root) {
    
    const helperGetHeight = ( node ) => {
        if ( !node ) return 0;
        if ( node.left || node.right ) {
            return 1 + Math.max( helperGetHeight(node.left),  
                                helperGetHeight(node.right) );
        } else {
            return 1;
        }
    }
    
    const height = helperGetHeight(root); 
    const width = Math.pow(2, height)-1;
    console.log( height, width );
    
    const matrix = [];
    for ( let i = 0 ; i < height ; i++ ) {
        matrix.push( new Array( width ).fill("") );
    }
    
    const helperFill = (node, row, col, level) => {
        // console.log( node&&node.val, row, col, level )
        if ( !node ) return;
        matrix[row][col] = node.val.toString();
        const distance = Math.pow( 2,  level);
        helperFill( node.left, row+1, col-distance, level-1 );
        helperFill( node.right, row+1, col+distance, level-1 );
    }
    
    helperFill( root, 0, Math.floor(width/2), height-2 );
    return matrix;
};

/**
[1,2]
[1,2,3,null, 4]
[1]
[1,2,5,3,null,null, null, 4]
*/