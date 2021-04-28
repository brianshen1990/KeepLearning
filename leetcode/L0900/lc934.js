/**
934. Shortest Bridge

In a given 2D binary array A, there are two islands.  (An island is a 4-directionally connected group of 1s not connected to any other 1s.)

Now, we may change 0s to 1s so as to connect the two islands together to form 1 island.

Return the smallest number of 0s that must be flipped.  (It is guaranteed that the answer is at least 1.)

 

Example 1:

Input: A = [[0,1],[1,0]]
Output: 1
Example 2:

Input: A = [[0,1,0],[0,0,0],[0,0,1]]
Output: 2
Example 3:

Input: A = [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
Output: 1
 

Constraints:

2 <= A.length == A[0].length <= 100
A[i][j] == 0 or A[i][j] == 1
 */
/**
 * @param {number[][]} A
 * @return {number}
 */
 var shortestBridge = function(A) {
    const ROW = A.length;
    const COL = A[0].length;
    
    // get outer
    let firstDot = null;
    for ( let i = 0 ; i < ROW ; i++ ) {
        for ( let j = 0 ; j < COL ; j++ ) {
            if ( A[i][j] === 1 ) {
                firstDot = [i,j];
                break;
            }
        }
        if ( firstDot ) {
            break;
        }
    }
    
    // BFS
    const helperInitalBFS = ( row, col ) => {
        if ( row < 0 || row >= ROW || col < 0 || col >= COL ) {
            return;
        }
        if ( A[row][col] === 0 || A[row][col] === 2 ) {
            return;
        }
        A[row][col] = 2;
        helperInitalBFS(row-1, col);
        helperInitalBFS(row+1, col);
        helperInitalBFS(row, col-1);
        helperInitalBFS(row, col+1);
    };
    helperInitalBFS(firstDot[0], firstDot[1]);
    // console.log( A );
    
    // now BFS again
    const helperExpandBFS = () => {
        for ( let i = 0 ; i < ROW ; i++ ) {
            for ( let j = 0 ; j < COL ; j++ ) {
                if ( A[i][j] === 2 ) {
                    if ( i > 0 ) {
                        if ( A[i-1][j] === 1 ) return true;
                        if ( A[i-1][j] === 0 ) A[i-1][j] = 3;
                    }
                    if ( i < ROW-1 ) {
                        if ( A[i+1][j] === 1 ) return true;
                        if ( A[i+1][j] === 0 ) A[i+1][j] = 3;
                    }
                    if ( j > 0 ) {
                        if ( A[i][j-1] === 1 ) return true;
                        if ( A[i][j-1] === 0 ) A[i][j-1] = 3;
                    }
                    if ( j < COL-1 ) {
                        if ( A[i][j+1] === 1 ) return true;
                        if ( A[i][j+1] === 0 ) A[i][j+1] = 3;
                    }  
                }
                
            }
        }
        for ( let i = 0 ; i < ROW ; i++ ) {
            for ( let j = 0 ; j < COL ; j++ ) {
                if ( A[i][j] === 3 ) A[i][j] = 2;
            }
        }
        return false;
    };
    let depth = 0;
    while ( !helperExpandBFS() ) {
        depth++;   
    }
    
    return depth;
    
    
};

/**
[[0,1],[1,0]]
[[0,1,0],[0,0,0],[0,0,1]]
[[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
 */