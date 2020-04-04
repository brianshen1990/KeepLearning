/**
130. Surrounded Regions

Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

Example:

X X X X
X O O X
X X O X
X O X X
After running your function, the board should be:

X X X X
X X X X
X X X X
X O X X
Explanation:

Surrounded regions shouldn’t be on the border, which means that any 'O' on the border of the board are not flipped to 'X'. Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'. Two cells are connected if they are adjacent cells connected horizontally or vertically.


*/


/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    let row = board.length;
    if ( row === 0 ) {
        return;
    }
    let col = board[0].length;
    if ( col === 0 ) {
        return;
    }
    
    for ( let i = 0; i < col; i ++  ) {
        if ( board[0][i] === 'O' ) {
            // console.log('jj');
            helper(board, 0, i, row, col); 
        }
        if ( board[row-1][i] === 'O' ) {
            // console.log('jj1');
            helper(board, row-1, i, row, col); 
        } 
    }
    for (  let i = 1; i < row - 1 ; i++ ) {
        if ( board[i][0] === 'O' ) {
            // console.log('jj2');
            helper(board, i, 0, row, col);    
        }
        if ( board[i][col-1] === 'O' ) {
            // console.log('jj3');
            helper(board, i, col-1, row, col); 
        } 
    }
    // console.log( board );
    for ( let i = 0; i < row ; i++ ) {
        for ( let j = 0; j < col ; j++ ) {
            if ( board[i][j] === 'O' ) {
                board[i][j] = 'X';
            } else if ( board[i][j] === 'T' ) {
                board[i][j] = 'O';
            }
        }
    }
};

var helper = function( board, i, j, row, col ) {
    if ( board[i][j] !== 'O' ) {
        return; 
    }
    board[i][j] = 'T';  
    if ( i < row-1 ) {
        helper(board, i+1, j, row, col);
    }
    if ( i > 1 ) {
        helper(board, i-1, j, row, col);
    }
    if ( j < col-1 ) {
        helper(board, i, j+1, row, col);
    }
    if ( j > 1 ) {
        helper(board, i, j-1, row, col);
    }
}

/**
[["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
[["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","X","X","X"]]
[["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","O","X"]]
[["X","X","X","O"]]
[["O","X","O","O"], ["X","X","O","O"]]
 */