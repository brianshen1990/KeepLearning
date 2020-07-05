/**

529. Minesweeper

Let's play the minesweeper game (Wikipedia, online game)!

You are given a 2D char matrix representing the game board. 'M' represents an unrevealed mine, 'E' represents an unrevealed empty square, 'B' represents a revealed blank square that has no adjacent (above, below, left, right, and all 4 diagonals) mines, digit ('1' to '8') represents how many mines are adjacent to this revealed square, and finally 'X' represents a revealed mine.

Now given the next click position (row and column indices) among all the unrevealed squares ('M' or 'E'), return the board after revealing this position according to the following rules:

If a mine ('M') is revealed, then the game is over - change it to 'X'.
If an empty square ('E') with no adjacent mines is revealed, then change it to revealed blank ('B') and all of its adjacent unrevealed squares should be revealed recursively.
If an empty square ('E') with at least one adjacent mine is revealed, then change it to a digit ('1' to '8') representing the number of adjacent mines.
Return the board when no more squares will be revealed.
 

Example 1:

Input: 

[['E', 'E', 'E', 'E', 'E'],
 ['E', 'E', 'M', 'E', 'E'],
 ['E', 'E', 'E', 'E', 'E'],
 ['E', 'E', 'E', 'E', 'E']]

Click : [3,0]

Output: 

[['B', '1', 'E', '1', 'B'],
 ['B', '1', 'M', '1', 'B'],
 ['B', '1', '1', '1', 'B'],
 ['B', 'B', 'B', 'B', 'B']]

Explanation:

Example 2:

Input: 

[['B', '1', 'E', '1', 'B'],
 ['B', '1', 'M', '1', 'B'],
 ['B', '1', '1', '1', 'B'],
 ['B', 'B', 'B', 'B', 'B']]

Click : [1,2]

Output: 

[['B', '1', 'E', '1', 'B'],
 ['B', '1', 'X', '1', 'B'],
 ['B', '1', '1', '1', 'B'],
 ['B', 'B', 'B', 'B', 'B']]

Explanation:

 

Note:

The range of the input matrix's height and width is [1,50].
The click position will only be an unrevealed square ('M' or 'E'), which also means the input board contains at least one clickable square.
The input board won't be a stage when game is over (some mines have been revealed).
For simplicity, not mentioned rules should be ignored in this problem. For example, you don't need to reveal all the unrevealed mines when the game is over, consider any cases that you will win the game or flag any squares.
 */


/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
    
    const NUM ="12345678";
    const ROW = board.length;
    const COL = board[0].length;
    if ( board[click[0]][click[1]]  === 'M') {
        // unrevealed Mine;
        board[click[0]][click[1]] = 'X';
        return board;
    }
    
    
    // BFS
    let cur = [ `${click[0]},${click[1]}` ];
    
    while ( cur.length > 0 ) {
        let curSet = new Set(cur);
        let next = new Set();

        for ( let i = 0 ; i < cur.length ; i++ ) {
            const tempPos = cur[i].split(",").map( item => parseInt(item) );
            let row = tempPos[0], col = tempPos[1];
            let minNum = 0;
            if ( row > 0 && board[row-1][col] === 'M' ) { minNum++; } // up
            if ( row > 0 && col > 0 && board[row-1][col-1] === 'M' ) { minNum++; } // up left
            if ( row > 0 && col < COL-1 && board[row-1][col+1] === 'M') { minNum++; } // up right
            if ( col > 0 && board[row][col-1] === 'M' ) { minNum++; } // left
            if ( col < COL-1 && board[row][col+1] === 'M' ) { minNum++; } // right
            if ( row < ROW-1 && board[row+1][col] === 'M' ) { minNum++; } // down
            if ( row < ROW-1 && col > 0 && board[row+1][col-1] === 'M' ) { minNum++; } // down left
            if ( row < ROW-1 && col < COL-1 && board[row+1][col+1] === 'M' ) { minNum++; } // down left
            
            if ( minNum > 0 ) {
                board[row][col] = `${minNum}`;
                continue
            }
            
            board[row][col] = 'B';
            
            if ( row > 0 && board[row-1][col] === 'E' && !curSet.has(`${row-1},${col}`) && !next.has(`${row-1},${col}`) ) {
                next.add( `${row-1},${col}` ); // up 
            }
            if ( row > 0 && col > 0 && board[row-1][col-1] === 'E' && !curSet.has(`${row-1},${col-1}`) && !next.has(`${row-1},${col-1}`) ) {
                next.add( `${row-1},${col-1}` ); // up left
            }
            if ( row > 0 && col < COL-1 && board[row-1][col+1] === 'E' && !curSet.has(`${row-1},${col+1}`) && !next.has(`${row-1},${col+1}`) ) {
                next.add( `${row-1},${col+1}` ); // up right
            }
            
            if ( col > 0 && board[row][col-1] === 'E' && !curSet.has(`${row},${col-1}`) && !next.has(`${row},${col-1}`) ) {
                next.add( `${row},${col-1}` ); // left
            }
            if ( col < board[0].length-1 && board[row][col+1] === 'E' && !curSet.has(`${row},${col+1}`) && !next.has(`${row},${col+1}`) ) {
                next.add( `${row},${col+1}` ); // right
            }
            
            
            if ( row < board.length-1 && board[row+1][col] === 'E' && !curSet.has(`${row+1},${col}`) && !next.has(`${row+1},${col}`) ) {
                next.add( `${row+1},${col}` ); // down
            }
            if ( row < board.length-1 && col > 0 && board[row+1][col-1] === 'E' && !curSet.has(`${row+1},${col-1}`) && !next.has(`${row+1},${col-1}`) ) {
                next.add( `${row+1},${col-1}` ); // down left
            }
            if ( row < board.length-1 && col < COL-1 && board[row+1][col+1] === 'E' && !curSet.has(`${row+1},${col+1}`) && !next.has(`${row+1},${col+1}`) ) {
                next.add( `${row+1},${col+1}` ); // down right
            }
            
        }
        cur = [ ...next ];
    }
    return board;
    
};



/**
[["E","E","E","E","E"],["E","E","M","E","E"],["E","E","E","E","E"],["E","E","E","E","E"]]
[3,0]
[["E","E","E","E","E"],["E","E","M","E","E"],["E","E","E","E","E"],["E","E","E","E","E"]]
[0,1]
[["E","E","E","E","E"],["E","E","M","E","E"],["E","E","E","E","E"],["E","E","E","E","E"]]
[0,2]
[["E","E","E","E","E"],["E","E","M","E","E"],["E","E","E","E","E"],["E","E","E","E","E"]]
[1,4]
[["B", "1", "E", "1", "B"],["B", "1", "M", "1", "B"],["B", "1", "1", "1", "B"],["B", "B", "B", "B", "B"]]
[1,2]
 */