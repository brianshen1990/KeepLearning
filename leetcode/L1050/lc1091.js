/**
1091. Shortest Path in Binary Matrix

In an N by N square grid, each cell is either empty (0) or blocked (1).

A clear path from top-left to bottom-right has length k if and only if it is composed of cells C_1, C_2, ..., C_k such that:

Adjacent cells C_i and C_{i+1} are connected 8-directionally (ie., they are different and share an edge or corner)
C_1 is at location (0, 0) (ie. has value grid[0][0])
C_k is at location (N-1, N-1) (ie. has value grid[N-1][N-1])
If C_i is located at (r, c), then grid[r][c] is empty (ie. grid[r][c] == 0).
Return the length of the shortest such clear path from top-left to bottom-right.  If such a path does not exist, return -1.

 

Example 1:

Input: [[0,1],[1,0]]


Output: 2

Example 2:

Input: [[0,0,0],[1,1,0],[1,1,0]]


Output: 4

 

Note:

1 <= grid.length == grid[0].length <= 100
grid[r][c] is 0 or 1
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    if ( grid[0][0] === 1 || grid[grid.length-1][grid.length-1] === 1 ) return -1;
    if ( grid.length === 1 ) return 1;
    
    
    const already = new Set();
    let cur = [ '0_0' ];
    let level = 1;
    let found = false;
    
    while ( cur.length > 0 ) {
        // console.log( cur );
        cur.forEach( item => already.add(item) );
        level++;

        let next = new Set();
        cur.forEach( item => {
            const [x,y] = item.split("_").map( item => parseInt(item) );
            [ [x-1, y-1], [x-1, y], [x-1, y+1],[x,y-1],
                [x, y+1], [x+1, y-1], [x+1, y], [x+1, y+1] ].forEach( point => {
                if ( point[0] >= 0 && point[0] < grid.length && 
                     point[1] >= 0 && point[1] < grid.length && 
                    grid[point[0]][point[1]] === 0 ) {
                    // valid
                    const str = `${point[0]}_${point[1]}`;
                    if ( point[0] === grid.length-1 && point[1] === grid.length-1 ) {
                        found = true;
                    }
                    if ( ( !already.has(str) ) && (!next.has(str) ) ) {
                        next.add( str );
                    }
                }
            });
        })
        if ( found ) return level;
        cur = [...next];
    }
    return -1;
};


/**
[[0,1],[1,0]]
[[0,0,0],[1,1,0],[1,1,0]]

 */