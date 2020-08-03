/**
427. Construct Quad Tree

Given a n * n matrix grid of 0's and 1's only. We want to represent the grid with a Quad-Tree.

Return the root of the Quad-Tree representing the grid.

Notice that you can assign the value of a node to True or False when isLeaf is False, and both are accepted in the answer.

A Quad-Tree is a tree data structure in which each internal node has exactly four children. Besides, each node has two attributes:

val: True if the node represents a grid of 1's or False if the node represents a grid of 0's. 
isLeaf: True if the node is leaf node on the tree or False if the node has the four children.
class Node {
    public boolean val;
    public boolean isLeaf;
    public Node topLeft;
    public Node topRight;
    public Node bottomLeft;
    public Node bottomRight;
}
We can construct a Quad-Tree from a two-dimensional area using the following steps:

If the current grid has the same value (i.e all 1's or all 0's) set isLeaf True and set val to the value of the grid and set the four children to Null and stop.
If the current grid has different values, set isLeaf to False and set val to any value and divide the current grid into four sub-grids as shown in the photo.
Recurse for each of the children with the proper sub-grid.

If you want to know more about the Quad-Tree, you can refer to the wiki.

Quad-Tree format:

The output represents the serialized format of a Quad-Tree using level order traversal, where null signifies a path terminator where no node exists below.

It is very similar to the serialization of the binary tree. The only difference is that the node is represented as a list [isLeaf, val].

If the value of isLeaf or val is True we represent it as 1 in the list [isLeaf, val] and if the value of isLeaf or val is False we represent it as 0.

 

Example 1:


Input: grid = [[0,1],[1,0]]
Output: [[0,1],[1,0],[1,1],[1,1],[1,0]]
Explanation: The explanation of this example is shown below:
Notice that 0 represnts False and 1 represents True in the photo representing the Quad-Tree.

Example 2:



Input: grid = [[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0]]
Output: [[0,1],[1,1],[0,1],[1,1],[1,0],null,null,null,null,[1,0],[1,0],[1,1],[1,1]]
Explanation: All values in the grid are not the same. We divide the grid into four sub-grids.
The topLeft, bottomLeft and bottomRight each has the same value.
The topRight have different values so we divide it into 4 sub-grids where each has the same value.
Explanation is shown in the photo below:

Example 3:

Input: grid = [[1,1],[1,1]]
Output: [[1,1]]
Example 4:

Input: grid = [[0]]
Output: [[1,0]]
Example 5:

Input: grid = [[1,1,0,0],[1,1,0,0],[0,0,1,1],[0,0,1,1]]
Output: [[0,1],[1,1],[1,0],[1,0],[1,1]]
 

Constraints:

n == grid.length == grid[i].length
n == 2^x where 0 <= x <= 6
 */

/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function(grids) {
    const helper = ( grid, row, col, len ) => {
        // console.log( row, col, len )
        if ( len === 1 ) {
            return new Node( grid[row][col], 1);
        } 
        
        const matrix = [ grid[row][col], 
                         grid[row][col+len/2],
                         grid[row+len/2][col],
                         grid[row+len/2][col+len/2] ];
        
        //console.log(row, col, len, matrix );
        for ( let i = 0 ; i < len/2 ; i++ ) {
            for ( let j = 0 ; j < len / 2 ; j++ ) {
                if ( grid[row+i][col+j] !== matrix[0] ) {
                    matrix[0] = -1;
                }
                if ( grid[row+i][col+j+len/2] !== matrix[1] ) {
                    matrix[1] = -1;
                }
                if ( grid[row+i+len/2][col+j] !== matrix[2] ) {
                    matrix[2] = -1;
                }
                if ( grid[row+i+len/2][col+j+len/2] !== matrix[3] ) {
                    matrix[3] = -1;
                } 
            }
        }
        //console.log(row, col, len, matrix );
        const node = [null, null, null, null];
        if ( matrix[0] === matrix[1] && matrix[1] === matrix[2] && 
            matrix[2] === matrix[3] && matrix[0] !== -1 ) {
            return new Node(matrix[0], 1);
        } else {
            if ( matrix[0] !== -1 ) {
                node[0] = new Node( matrix[0], 1);
            } else {
                node[0] = helper( grid, row, col, len/2 );
            }
            if ( matrix[1] !== -1 ) {
                node[1] = new Node( matrix[1], 1);
            } else {
                node[1] = helper( grid, row, col+len/2, len/2 );
            }
            if ( matrix[2] !== -1 ) {
                node[2] = new Node( matrix[2], 1);
            } else {
                node[2] = helper( grid, row+len/2, col, len/2 );
            }
            if ( matrix[3] !== -1 ) {
                node[3] = new Node( matrix[3], 1);
            } else {
                node[3] = helper( grid, row+len/2, col+len/2, len/2 );
            }
        }
        return new Node(0, 0, node[0], node[1], node[2], node[3]);
    }
    
    return helper(grids, 0, 0, grids.length );
    
};

/** 
[[0,1],[1,0]]
[[1,1],[1,1]]
[[0]]
[[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0]]
[[1,1,0,0],[1,1,0,0],[0,0,1,1],[0,0,1,1]]
[[1,1,0,0,0,0,0,0],[1,1,0,0,0,0,0,0],[1,1,0,0,0,0,1,1],[1,1,0,0,0,0,1,1],[0,0,0,0,0,0,1,1],[0,0,0,0,0,0,1,1],[1,1,1,1,1,1,0,0],[1,1,1,1,1,1,0,0]]
[[0,0,0,0,1,1,0,0],[0,0,0,0,1,1,0,0],[1,1,0,0,1,1,1,1],[1,1,0,0,1,1,1,1],[1,1,0,0,1,1,1,1],[1,1,0,0,1,1,1,1],[1,1,0,0,0,0,1,1],[1,1,0,0,0,0,1,1]]
*/