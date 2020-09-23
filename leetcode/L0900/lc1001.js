/**
1001. Grid Illumination

You are given a grid of size N x N, and each cell of this grid has a lamp that is initially turned off.

You are also given an array of lamp positions lamps, where lamps[i] = [rowi, coli] indicates that the lamp at grid[rowi][coli] is turned on. When a lamp is turned on, it illuminates its cell and all other cells in the same row, column, or diagonal.

Finally, you are given a query array queries, where queries[i] = [rowi, coli]. For the ith query, determine whether grid[rowi][coli] is illuminated or not. After answering the ith query, turn off the lamp at grid[rowi][coli] and its 8 adjacent lamps if they exist. A lamp is adjacent if its cell shares either a side or corner with grid[rowi][coli].

Return an array of integers ans, where ans[i] should be 1 if the lamp in the ith query was illuminated, or 0 if the lamp was not.

 

Example 1:


Input: N = 5, lamps = [[0,0],[4,4]], queries = [[1,1],[1,0]]
Output: [1,0]
Explanation: We have the initial grid with all lamps turned off. In the above picture we see the grid after turning on the lamp at grid[0][0] then turning on the lamp at grid[4][4].
The 0th query asks if the lamp at grid[1][1] is illuminated or not (the blue square). It is illuminated, so set ans[0] = 1. Then, we turn off all lamps in the red square.

The 1st query asks if the lamp at grid[1][0] is illuminated or not (the blue square). It is not illuminated, so set ans[1] = 1. Then, we turn off all lamps in the red rectangle.

Example 2:

Input: N = 5, lamps = [[0,0],[4,4]], queries = [[1,1],[1,1]]
Output: [1,1]
Example 3:

Input: N = 5, lamps = [[0,0],[0,4]], queries = [[0,4],[0,1],[1,4]]
Output: [1,1,0]
 

Constraints:

1 <= N <= 109
0 <= lamps.length <= 20000
lamps[i].length == 2
0 <= lamps[i][j] < N
0 <= queries.length <= 20000
queries[i].length == 2
0 <= queries[i][j] < N
 */



/**
 * @param {number} N
 * @param {number[][]} lamps
 * @param {number[][]} queries
 * @return {number[]}
 */
var gridIllumination = function(N, lamps, queries) {
    const lampSet = new Set();
    const lightCache = {
        row: {},
        col: {},
        sum: {},
        diff: {} 
    };
    
    lamps.forEach( item => {
        const [row, col] = item;
        lampSet.add( `${row}_${col}` );
        lightCache.row[row] = lightCache.row[row] || 0;
        lightCache.row[row]++;
        lightCache.col[col] = lightCache.col[col] || 0;
        lightCache.col[col]++;
        lightCache.sum[row+col] = lightCache.sum[row+col] || 0;
        lightCache.sum[row+col]++;
        lightCache.diff[row-col] = lightCache.diff[row-col] || 0;
        lightCache.diff[row-col]++;
    });
    
    return queries.map( item => {
        let ret = false;
        const [row, col] = item;
        if ( ( row in lightCache.row && lightCache.row[row] > 0 ) || 
             ( col in lightCache.col && lightCache.col[col] > 0 ) || 
             ( (row+col) in lightCache.sum && lightCache.sum[row+col] > 0 ) || 
             ( (row-col) in lightCache.diff && lightCache.diff[row-col] > 0 ) ) {
            ret = true;
            
            // when true, there could be a light
            for ( let i = row-1 ; i <= row+1 ; i++ ) {
                for ( let j = col-1 ; j < col+1 ; j++ ) {
                    if ( i >= 0 && i < N && j >=0 && j < N ) {
                        const str = `${i}_${j}`;
                        if ( lampSet.has( str ) ) {
                            lampSet.delete( str );
                            lightCache.row[i]--;
                            lightCache.col[j]--;
                            lightCache.sum[i+j]--;
                            lightCache.diff[i-j]--;
                        }
                    }
                }
            } 
        } 
        return ret;
    })
    
};


/**
5
[[0,0],[4,4]]
[[1,1],[1,0]]
5
[[0,0],[4,4]]
[[1,1],[1,1]]
5
[[0,0],[0,4]]
[[0,4],[0,1],[1,4]]
 */