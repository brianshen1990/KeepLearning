/*
37. Sudoku Solver
Hard

617

42

Favorite

Share
Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

Each of the digits 1-9 must occur exactly once in each row.
Each of the digits 1-9 must occur exactly once in each column.
Each of the the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
Empty cells are indicated by the character '.'.


A sudoku puzzle...


...and its solution numbers marked in red.

Note:

The given board contain only digits 1-9 and the character '.'.
You may assume that the given Sudoku puzzle will have a single unique solution.
The given board size is always 9x9.

*/


/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
   const LEN = 9;
   const map = {};
   const charCode1 = '0'.charCodeAt(0);
   for ( let i = 0 ; i < LEN ; i++ ) {
       for ( let j = 0 ; j < LEN ; j++ ) {
           if ( board[i][j] !== '.' ) {
               board[i][j] = board[i][j].charCodeAt(0) - charCode1;
           }
       }
   }

   // construct map    
   for ( let i = 0 ; i < LEN ; i++ ) {
       for ( let j = 0 ; j < LEN ; j++ ) {
           if ( board[i][j] === '.' ) {
               const available = new Array(LEN+1).fill(true);
               for ( let k = 0 ; k < LEN ; k++ ) {
                   if ( board[i][k] >= 1 && board[i][k] <= 9 ) {
                       available[ board[i][k] ] = false;
                   }
                   if ( board[k][j] >= 1 && board[k][j] <= 9 ) {
                       available[ board[k][j] ] = false;
                   }
               }
               for ( let m = Math.floor(i / 3) * 3; m < Math.floor(i / 3) * 3 + 3 ; m++ ) {
                   for ( let n = Math.floor(j / 3) * 3; n < Math.floor(j / 3) * 3 + 3 ; n++ ) {
                       if ( board[m][n] >= 1 && board[m][n] <= 9 ) {
                           available[ board[m][n] ] = false;
                       }
                   }
               }
               // map[`${i}_${j}`] = available.join(",");
               map[`${i}_${j}`]  = new Set( available.map( (item,index) => {return { item, index };} ).filter( item => item.item && item.index !== 0 ).map( item => item.index ) );
           }
       }
   }  
   // console.log( map );
   
   // handle all len == 1
   while ( true ) {
       const handleArr = Object.keys(map).filter( item => map[item].size === 1 );
       if ( handleArr.length === 0 ) {
           break;
       }
       // console.log( "handle only 1 elements", ...handleArr );
       for ( let q = 0 ; q < handleArr.length ; q++ ) {
           const [i, j] = handleArr[q].split("_");   
           board[i][j] = [...map[ handleArr[q] ]][0]; 
           delete map[ handleArr[q] ];
           for ( let k = 0 ; k < LEN ; k++ ) {
               if ( `${i}_${k}` in map && map[ `${i}_${k}` ].has( board[i][j] ) ) {
                   map[ `${i}_${k}` ].delete( board[i][j] );
               }
               if ( `${k}_${j}` in map && map[ `${k}_${j}` ].has( board[i][j] ) ) {
                   map[ `${k}_${j}` ].delete( board[i][j] );
               }
           }
           for ( let m = Math.floor(i / 3) * 3; m < Math.floor(i / 3) * 3 + 3 ; m++ ) {
               for ( let n = Math.floor(j / 3) * 3; n < Math.floor(j / 3) * 3 + 3 ; n++ ) {
                   if ( `${m}_${n}` in map && map[ `${m}_${n}` ].has( board[i][j] ) ) {
                       map[ `${m}_${n}` ].delete( board[i][j] );
                   }
               }
           }
       }
   }
   // console.log( map );
   
   
   const helper = () => {
       let find = false;
       for ( let i = 0 ; i < LEN ; i++ ) {
           for ( let j = 0 ; j < LEN ; j++ ) {
               if ( board[i][j] === '.' ) {
                  
                   // get available 
                   find = true;
                   const available = new Array(LEN+1).fill(true);
                   for ( let k = 0 ; k < LEN ; k++ ) {
                       if ( board[i][k] >= 1 && board[i][k] <= 9 ) {
                           available[ board[i][k] ] = false;
                       }
                       if ( board[k][j] >= 1 && board[k][j] <= 9 ) {
                           available[ board[k][j] ] = false;
                       }
                   }
                   for ( let m = Math.floor(i / 3) * 3; m < Math.floor(i / 3) * 3 + 3 ; m++ ) {
                       for ( let n = Math.floor(j / 3) * 3; n < Math.floor(j / 3) * 3 + 3 ; n++ ) {
                           if ( board[m][n] >= 1 && board[m][n] <= 9 ) {
                               available[ board[m][n] ] = false;
                           }
                       }
                   }
                   for ( let k = 1 ; k < available.length ; k++ ) {
                        
                        // console.log(i, j, k, available[k]);
                        
                       if ( available[k] ) {
                           board[i][j] = k;
                           if ( helper() ) {
                               return true;
                           } 
                       }
                   }
                   board[i][j] = '.'; // restore
                   return false;
               }
           }
       }
       
       if ( !find ) {
           console.log("here true");
           console.log( board );
           return true; // means all have been filled;
       }
       // console.log("here false");
       return false;
   }
   
   // console.log( board );
   helper();
   for ( let i = 0 ; i < LEN ; i++ ) {
       for ( let j = 0 ; j < LEN ; j++ ) {
           if ( board[i][j] !== '.' ) {
               board[i][j] = `${board[i][j]}`;
           }
       }
   }
};
 
let test = function () {
   console.log(solveSudoku([[".",".","9","7","4","8",".",".","."],["7",".",".",".",".",".",".",".","."],[".","2",".","1",".","9",".",".","."],[".",".","7",".",".",".","2","4","."],[".","6","4",".","1",".","5","9","."],[".","9","8",".",".",".","3",".","."],[".",".",".","8",".","3",".","2","."],[".",".",".",".",".",".",".",".","6"],[".",".",".","2","7","5","9",".","."]]
   ));

  // [
  //   ["5","3","4","6","7","8","9","1","2"],
  //   ["6","7","2","1","9","5","3","4","8"],
  //   ["1","9","8","3","4","2","5","6","7"],
  //   ["8","5","9","7","6","1","4","2","3"],
  //   ["4","2","6","8","5","3","7","9","1"],
  //   ["7","1","3","9","2","4","8","5","6"],
  //   ["9","6","1","5","3","7","2","8","4"],
  //   ["2","8","7","4","1","9","6","3","5"],
  //   ["3","4","5","2","8","6","1","7","9"]
  // ]

}
test();

/**
[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
[[".",".","9","7","4","8",".",".","."],["7",".",".",".",".",".",".",".","."],[".","2",".","1",".","9",".",".","."],[".",".","7",".",".",".","2","4","."],[".","6","4",".","1",".","5","9","."],[".","9","8",".",".",".","3",".","."],[".",".",".","8",".","3",".","2","."],[".",".",".",".",".",".",".",".","6"],[".",".",".","2","7","5","9",".","."]]
 */