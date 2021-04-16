/**
688. Knight Probability in Chessboard

On an NxN chessboard, a knight starts at the r-th row and c-th column and attempts to make exactly K moves. The rows and columns are 0 indexed, so the top-left square is (0, 0), and the bottom-right square is (N-1, N-1).

A chess knight has 8 possible moves it can make, as illustrated below. Each move is two squares in a cardinal direction, then one square in an orthogonal direction.

 



 

Each time the knight is to move, it chooses one of eight possible moves uniformly at random (even if the piece would go off the chessboard) and moves there.

The knight continues moving until it has made exactly K moves or has moved off the chessboard. Return the probability that the knight remains on the board after it has stopped moving.

 

Example:

Input: 3, 2, 0, 0
Output: 0.0625
Explanation: There are two moves (to (1,2), (2,1)) that will keep the knight on the board.
From each of those positions, there are also two moves that will keep the knight on the board.
The total probability the knight stays on the board is 0.0625.
 

Note:

N will be between 1 and 25.
K will be between 0 and 100.
The knight always initially starts on the board.

 */


/**
 * @param {number} N
 * @param {number} K
 * @param {number} r
 * @param {number} c
 * @return {number}
 */
 var knightProbability = function(N, K, r, c) {
    const cache = {};
    
    for ( let row = 0 ; row < N ; row++ ) {
        for ( let col = 0 ; col < N ; col++ ) {
            const _key = `${row}_${col}`;
            cache[_key] = [];
            if ( row >= 1 && col >= 2 ) cache[_key].push( `${row-1}_${col-2}` );
            if ( row >= 2 && col >= 1 ) cache[_key].push( `${row-2}_${col-1}` );
            
            if ( row >= 2 && col <= N-2 ) cache[_key].push( `${row-2}_${col+1}` );
            if ( row >= 1 && col <= N-3 ) cache[_key].push( `${row-1}_${col+2}` );
            
            if ( row <= N-2 && col <= N-3 ) cache[_key].push( `${row+1}_${col+2}` );
            if ( row <= N-3 && col <= N-2 ) cache[_key].push( `${row+2}_${col+1}` );
            
            if ( row <= N-3 && col >= 1 ) cache[_key].push( `${row+2}_${col-1}` );
            if ( row <= N-2 && col >= 2 ) cache[_key].push( `${row+1}_${col-2}` );
        }
    }
    
    // all posiible => 8 ^ K
    const base = Math.pow(8, K);
    
    let next = {
        [`${r}_${c}`] : 1 
    };
    // each K, how many still on the chess and count
    for ( let i = 0 ; i < K ; i++ ) {
        let nnext = {};
        Object.keys(next).forEach( item => {
            const count = next[item];
            cache[item].forEach( nItem => {
                nnext[nItem] =  nnext[nItem] || 0;
                nnext[nItem] += count;
            })
        })
        next = nnext;
        if ( Object.keys(next) === 0 ) return 0;
    }
    // console.log( next, base )
    return Object.values(next).reduce( (acc, ele) => acc + ele, 0 ) / base;
};


/**
3
2
0
0
25
100
0
0
1
100
0
0
17
100
0
0
1
0
0
0
10
10
5
5
25
100
10
10
*/