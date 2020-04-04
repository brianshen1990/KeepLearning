/**
79. Word Search

Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let row = board.length;
    if( row <= 0 ) {
        return false;
    }
    let col = board[0].length;
    if( col <= 0 ) {
        return false;
    }
    if( word.length === 0 ) {
        return false;
    }
    if( row * col < word.length ) {
        return false;
    }
    
    let found = false;
    for ( let i = 0 ; i < row; i++ ) {
        for ( let j = 0; j < col ; j++ ) {
            if ( board[i][j] === word[0] ) {
                // found a possible start
                board[i][j] = 0;    // mark as visited
                found = helper(board, word, 1, row, col, i, j);
                if( found ) {
                    break;
                }
                board[i][j] = word[0];  // restore if failure
            }
        }
        if( found ) {
            break;
        }
    }
    console.log( board );
    return found;
};

var helper = function( board, word, index, row, col, curRow, curCol ) {
    if( index === word.length ) {
        return true;
    }
    let found = false;
    // Top
    if ( curRow > 0 && board[curRow-1][curCol] === word[index] ) {
        board[curRow-1][curCol] = 0;
        found = helper( board, word, index + 1, row, col, curRow-1, curCol);
        if (found) {
            return found;
        }
        board[curRow-1][curCol] =  word[index];
    }

    // Bottom
    if ( curRow+1 < row && board[curRow+1][curCol] === word[index] ) {
        board[curRow+1][curCol] = 0;
        found = helper( board, word, index + 1, row, col, curRow+1, curCol);
        if (found) {
            return found;
        }
        board[curRow+1][curCol] =  word[index];
    }

    // Left
    if ( curCol > 0 && board[curRow][curCol-1] === word[index] ) {
        board[curRow][curCol-1] = 0;
        found = helper( board, word, index + 1, row, col, curRow, curCol-1);
        if (found) {
            return found;
        }
        board[curRow][curCol-1] =  word[index];
    }

    // Right
    if ( curCol+1 < col && board[curRow][curCol+1] === word[index] ) {
        board[curRow][curCol+1] = 0;
        found = helper( board, word, index + 1, row, col, curRow, curCol+1);
        if (found) {
            return found;
        }
        board[curRow][curCol+1] =  word[index];
    }
    return false;
}

console.log( exist( [
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
  ],  "ABCCED") === true )

console.log( exist( [
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
  ],  "SEE") === true )

console.log( exist( [
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
  ],  "ABCB") === false )