/**
1034. Coloring A Border

Given a 2-dimensional grid of integers, each value in the grid represents the color of the grid square at that location.

Two squares belong to the same connected component if and only if they have the same color and are next to each other in any of the 4 directions.

The border of a connected component is all the squares in the connected component that are either 4-directionally adjacent to a square not in the component, or on the boundary of the grid (the first or last row or column).

Given a square at location (r0, c0) in the grid and a color, color the border of the connected component of that square with the given color, and return the final grid.

 

Example 1:

Input: grid = [[1,1],[1,2]], r0 = 0, c0 = 0, color = 3
Output: [[3, 3], [3, 2]]
Example 2:

Input: grid = [[1,2,2],[2,3,2]], r0 = 0, c0 = 1, color = 3
Output: [[1, 3, 3], [2, 3, 3]]
Example 3:

Input: grid = [[1,1,1],[1,1,1],[1,1,1]], r0 = 1, c0 = 1, color = 2
Output: [[2, 2, 2], [2, 1, 2], [2, 2, 2]]
 

Note:

1 <= grid.length <= 50
1 <= grid[0].length <= 50
1 <= grid[i][j] <= 1000
0 <= r0 < grid.length
0 <= c0 < grid[0].length
1 <= color <= 1000

 */


/**
 * @param {number[][]} grid
 * @param {number} r0
 * @param {number} c0
 * @param {number} color
 * @return {number[][]}
 */
 var colorBorder = function(grid, r0, c0, color) {
    // BFS
    const ROW = grid.length;
    const COL = grid[0].length;
    
    let next = [[r0, c0]];
    const oldColor = grid[r0][c0]; 
          
    while ( next.length > 0 ) {
        const cache = new Set();
        let nnext = [];
        next.forEach( item => {
            const [r,c] = item;
            grid[r][c] = 0;
        });
        
        next.forEach( item => {
            let nextCount = 0;
            const [r,c] = item;
            if ( r > 0 && ( grid[r-1][c] === oldColor || grid[r-1][c] === 0 ||  grid[r-1][c] === 1001 ) ) {
                nextCount++;
            }
            if ( r > 0 && grid[r-1][c] === oldColor ) {
                if ( !( `${r-1}_${c}` in cache ) ) {
                    cache[ `${r-1}_${c}` ] = true;
                    nnext.push( [r-1, c] );
                }
            }
            
            if ( r < ROW-1 && ( grid[r+1][c] === oldColor || grid[r+1][c] === 0 ||  grid[r+1][c] === 1001 ) ) {
                nextCount++;
            }
            if ( r < ROW-1 && grid[r+1][c] === oldColor ) {
                if ( !( `${r+1}_${c}` in cache ) ) {
                    cache[ `${r+1}_${c}` ] = true;
                    nnext.push( [r+1, c] );
                }
            }
            if ( c > 0 &&  ( grid[r][c-1] === oldColor || grid[r][c-1] === 0 ||  grid[r][c-1] === 1001 ) ) {
                nextCount++;
            }
            if ( c > 0 && grid[r][c-1] === oldColor ) {
                if ( !( `${r}_${c-1}` in cache ) ) {
                    cache[ `${r}_${c-1}` ] = true;
                    nnext.push( [r, c-1] );
                }
            }
            if ( c < COL-1 &&  ( grid[r][c+1] === oldColor || grid[r][c+1] === 0 ||  grid[r][c+1] === 1001 ) ) {
                nextCount++;
            }
            if ( c < COL-1 && grid[r][c+1] === oldColor ) {
                if ( !( `${r}_${c+1}` in cache ) ) {
                    cache[ `${r}_${c+1}` ] = true;
                    nnext.push( [r, c+1] );
                }
            }
            if ( nextCount < 4 ) {
                grid[r][c] = 1001;
            }
        })
        
        next = nnext;
    }
    
    for ( let i = 0 ; i < ROW ; i++ ) {
        for ( let j = 0 ; j < COL ; j++ ) {
            if ( grid[i][j] === 0 ) {
                grid[i][j] = oldColor;
            } else if ( grid[i][j] === 1001 ) {
                grid[i][j] = color;
            } 
        }
    }
    return grid;
};


/** 
[[1,1],[1,2]]
0
0
3
[[1,2,2],[2,3,2]]
0
1
3
[[1,1,1],[1,1,1],[1,1,1]]
1
1
2
[[1,1,1],[1,1,1],[1,1,1]]
1
1
1
[[1,1,1],[1,2,1],[1,1,1]]
1
1
2
[[2,1,2],[1,1,1],[2,1,2]]
1
1
3
[[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]
0
0
2
[[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1]]
0
0
2
[[1,1,1,1,1]]
0
0
2
[[1],[1],[1],[1],[1]]
0
0
2
[[1]]
0
0
2
*/