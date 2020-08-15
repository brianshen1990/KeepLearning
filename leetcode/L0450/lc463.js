/**

463. Island Perimeter

You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

 

Example:

Input:
[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

Output: 16

Explanation: The perimeter is the 16 yellow stripes in the image below:
 */


/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  if ( ! (grid.length > 0 && grid[0].length > 0) ) {
      return 0
  }
  
  const ROW = grid.length;
  const COL = grid[0].length;
  
  const helper = ( i, j ) => {
      grid[i][j] = -1;
      
      let ret = 0;
      if ( i > 0  ) {
          if ( grid[i-1][j] === 1 ) { ret += helper( i-1, j );
          } else if ( grid[i-1][j] === 0 ) { ret++;
          } else { }
      } else { ret++; }
      
      if ( i < ROW-1 ) {
          if ( grid[i+1][j] === 1 ) { ret += helper( i+1, j );
          } else if ( grid[i+1][j] === 0 ) { ret++;
          } else { }
      } else {  ret++ }
      
      if ( j > 0 ) {
          if ( grid[i][j-1] === 1 ) { ret += helper( i, j-1 );
          } else if ( grid[i][j-1] === 0 ) { ret++;
          } else {  }
      } else {
          ret++;
      }
      
      if ( j < COL-1 ) {
          if ( grid[i][j+1] === 1 ) { ret += helper( i, j+1 );
          } else if ( grid[i][j+1] === 0 ) { ret++;
          } else { }
      } else {
          ret++;
      }
      // console.log( i, j, ret );
      return ret;
  }
  
  for ( let i = 0 ; i < ROW ; i++ ) {
      for ( let j = 0 ; j < COL ; j++ ) {
          if ( grid[i][j] === 1 ) {
              return helper( i, j );
          }
      }
  }
  return 0;
};

/**
[[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
[[0,1,0,0],[1,1,1,0],[0,1,0,0],[0,1,0,0]]
[[0,1,0,0],[1,1,1,0],[0,1,0,0],[0,0,0,0]]
[[0,1,0,0],[1,1,1,0],[0,0,0,0],[0,0,0,0]]
[[0,1,0,0],[1,1,0,0],[0,0,0,0],[0,0,0,0]]
[[0,1,0,0],[0,1,0,0],[0,0,0,0],[0,0,0,0]]
[[0,1,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
[[0,0,0,0],[0,0,1,0],[0,0,0,0],[0,0,0,0]]
[[1,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
 */