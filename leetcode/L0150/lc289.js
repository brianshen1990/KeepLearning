/**
289. Game of Life

According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies, as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population..
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
Write a function to compute the next state (after one update) of the board given its current state. The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously.

Example:

Input: 
[
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
]
Output: 
[
  [0,0,0],
  [1,0,1],
  [0,1,1],
  [0,1,0]
]
Follow up:

Could you solve it in-place? Remember that the board needs to be updated at the same time: You cannot update some cells first and then use their updated values to update other cells.
In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches the border of the array. How would you address these problems?
 */

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    if ( board.length === 0 || board[0].length === 0 ) {
        return;
    }
    
    const rows = board.length;
    const cols = board[0].length;
    
    const toggles = [];
    
    for ( let i = 0; i < rows ; i++ ) {
        for ( let j = 0; j < cols ; j++ ) {
            let cnt = 0;
            // (i-1,j-1) |  (i-1,j ) | (i-1, j+1)
            // (i,  j-1) |           | (i,   j+1)
            // (i+1,j-1) |  (i+1,j)  | (i+1, j+1)
            i > 0 && j > 0 && board[i-1][j-1] === 1 && ++cnt;
            i > 0 && board[i-1][j] === 1 && ++cnt;
            i > 0 && j < cols-1 && board[i-1][j+1] === 1 && ++cnt;
            j > 0 && board[i][j-1] === 1 && ++cnt ;
            j < cols-1 && board[i][j+1] === 1 && ++cnt ;
            i < rows-1 && j > 0 && board[i+1][j-1] === 1 && ++cnt;
            i < rows-1 && board[i+1][j] === 1 && ++cnt;
            i < rows-1 && j < cols-1 && board[i+1][j+1] === 1 && ++cnt;
            
            // console.log( i, j, cnt )
            if ( ( board[i][j] === 0 && cnt === 3 ) || ( board[i][j] === 1 && (cnt < 2 || cnt > 3) ) ) {
                toggles.push([i, j]);
            }
        }
    }
    
    // console.log( toggles );
    toggles.map( item => {
        board[item[0]][item[1]] = 1 - board[item[0]][item[1]];  
    });
};


/**
[[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
[[0,1,0,0,1,1,0],[1,1,1,1,1,1,1],[1,1,0,0,0,0,1],[1,1,0,0,1,0,0]]
 */