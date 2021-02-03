/**
892. Surface Area of 3D Shapes

You are given an n x n grid where you have placed some 1 x 1 x 1 cubes. Each value v = grid[i][j] represents a tower of v cubes placed on top of cell (i, j).

After placing these cubes, you have decided to glue any directly adjacent cubes to each other, forming several irregular 3D shapes.

Return the total surface area of the resulting shapes.

Note: The bottom face of each shape counts toward its surface area.

 

Example 1:


Input: grid = [[2]]
Output: 10
Example 2:


Input: grid = [[1,2],[3,4]]
Output: 34
Example 3:


Input: grid = [[1,0],[0,2]]
Output: 16
Example 4:


Input: grid = [[1,1,1],[1,0,1],[1,1,1]]
Output: 32
Example 5:


Input: grid = [[2,2,2],[2,1,2],[2,2,2]]
Output: 46
 

Constraints:

n == grid.length
n == grid[i].length
1 <= n <= 50
0 <= grid[i][j] <= 50
 */


/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
    const N = grid.length;
    
    let ret = 0 ;
    // top and bottom 
    ret = 2 * N * N;
    for ( let row = 0 ; row < N ; row++ ) {
        for ( let col = 0 ; col < N ; col++ ) {
            if ( grid[row][col] === 0 ) {
                ret = ret - 2;
            }
        }
    }
    // console.log( "bottom top", ret );
    
    // edge 
    for ( let row = 0 ; row < N ; row++ ) {
        for ( let col = 0 ; col < N ; col++ ) {
            // N
            if ( row > 0 ) {
                ret += grid[row][col] > grid[row-1][col] ? grid[row][col] - grid[row-1][col] : 0;
            } else {
                ret += grid[row][col];
            }
            
            // S
            if ( row < N - 1 ) {
                ret += grid[row][col] > grid[row+1][col] ? grid[row][col] - grid[row+1][col] : 0 ;    
            } else {
                ret += grid[row][col];
            }
            
            // E
            if ( col > 0 ) {
                ret += grid[row][col] > grid[row][col-1] ? grid[row][col] - grid[row][col-1] : 0;
            } else {
                ret += grid[row][col];
            }
            
            // W
            if ( col < N-1 ) {
                ret += grid[row][col] > grid[row][col+1] ? grid[row][col] - grid[row][col+1] : 0;
            } else {
                ret += grid[row][col];
            }
        }
    }
    // console.log( "all", ret );
    return ret;
    
};/**
* @param {number[][]} grid
* @return {number}
*/
var surfaceArea = function(grid) {
   const N = grid.length;
   
   let ret = 0 ;
   // top and bottom 
   ret = 2 * N * N;
   for ( let row = 0 ; row < N ; row++ ) {
       for ( let col = 0 ; col < N ; col++ ) {
           if ( grid[row][col] === 0 ) {
               ret = ret - 2;
           }
       }
   }
   // console.log( "bottom top", ret );
   
   // edge 
   for ( let row = 0 ; row < N ; row++ ) {
       for ( let col = 0 ; col < N ; col++ ) {
           // N
           if ( row > 0 ) {
               ret += grid[row][col] > grid[row-1][col] ? grid[row][col] - grid[row-1][col] : 0;
           } else {
               ret += grid[row][col];
           }
           
           // S
           if ( row < N - 1 ) {
               ret += grid[row][col] > grid[row+1][col] ? grid[row][col] - grid[row+1][col] : 0 ;    
           } else {
               ret += grid[row][col];
           }
           
           // E
           if ( col > 0 ) {
               ret += grid[row][col] > grid[row][col-1] ? grid[row][col] - grid[row][col-1] : 0;
           } else {
               ret += grid[row][col];
           }
           
           // W
           if ( col < N-1 ) {
               ret += grid[row][col] > grid[row][col+1] ? grid[row][col] - grid[row][col+1] : 0;
           } else {
               ret += grid[row][col];
           }
       }
   }
   // console.log( "all", ret );
   return ret;
   
};


/**
[[2]]
[[1,2],[3,4]]
[[1,0],[0,2]]
[[1,1,1],[1,0,1],[1,1,1]]
[[2,2,2],[2,1,2],[2,2,2]]
 */