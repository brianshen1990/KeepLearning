/*
36. Valid Sudoku
Medium
636
211


Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

A partially filled sudoku which is valid.

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

Example 1:

Input:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: true
Example 2:

Input:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being 
    modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
The given board contain only digits 1-9 and the character '.'.
The given board size is always 9x9.
Accepted
195,798
Submissions
482,912

*/


/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let _helperRow = function(_board) {
    let ret = true;
    for (let i = 0; i< 9; i++){
      let temp = {};
      for (let j = 0; j< 9; j++){
        if (_board[i][j] === "."){
          continue;
        }
        if(_board[i][j] >= '0' && _board[i][j] <= '9'){
          if(! temp[ _board[i][j] ]){
            temp[ _board[i][j] ] = true;
          }else{
            ret = false;
            break;
          }
        }else{
          break;
        }
      }
      if(!ret){
        break;
      }
    }
    return ret;
  }  

  let _helperCol = function(_board){
    let ret = true;
    for (let i = 0; i< 9; i++){
      let temp = {};
      for (let j = 0; j< 9; j++){
        if (_board[j][i] === "."){
          continue;
        }
        if(_board[j][i] >= '0' && _board[j][i] <= '9'){
          if(! temp[ _board[j][i] ]){
            temp[ _board[j][i] ] = true;
          }else{
            ret = false;
            break;
          }
        }else{
          break;
        }
      }
      if(!ret){
        break;
      }
    }
    return ret;

  }

  let _helperSqu = function(_board){
    let ret = true;
    for (let row = 0; row < 9 ; row+=3) {
      for (let col = 0; col < 9; col+=3) {
        let temp = {};
        for(let i = 0 ; i< 3; i++){
          for(let j = 0; j< 3; j++){
            if (_board[row+i][col+j] === "."){
              continue;
            }
            if(_board[row+i][col+j] >= '0' && _board[row+i][col+j] <= '9'){
              if(! temp[ _board[row+i][col+j] ]){
                temp[ _board[row+i][col+j] ] = true;
              }else{
                ret = false;
                break;
              }
            }else{
              ret = false;
              break;
            }
            if(!ret){
              break;
            }
          }
          if(!ret){
            break;
          }
        }
        if(!ret){
          break;
        }
      }
      if(!ret){
        break;
      }
    }
    return ret;
  }

  if(!_helperRow(board)){
    return false;
  }
  if(!_helperCol(board)){
    return false;
  }
  if(!_helperSqu(board)){
    return false;
  }
  return true;

};
 
let test = function () {
    console.log(isValidSudoku([
        ["5","3",".",".","7",".",".",".","."],
        ["6",".",".","1","9","5",".",".","."],
        [".","9","8",".",".",".",".","6","."],
        ["8",".",".",".","6",".",".",".","3"],
        ["4",".",".","8",".","3",".",".","1"],
        ["7",".",".",".","2",".",".",".","6"],
        [".","6",".",".",".",".","2","8","."],
        [".",".",".","4","1","9",".",".","5"],
        [".",".",".",".","8",".",".","7","9"]
      ]) ) ;
    console.log(isValidSudoku([
        ["8","3",".",".","7",".",".",".","."],
        ["6",".",".","1","9","5",".",".","."],
        [".","9","8",".",".",".",".","6","."],
        ["8",".",".",".","6",".",".",".","3"],
        ["4",".",".","8",".","3",".",".","1"],
        ["7",".",".",".","2",".",".",".","6"],
        [".","6",".",".",".",".","2","8","."],
        [".",".",".","4","1","9",".",".","5"],
        [".",".",".",".","8",".",".","7","9"]
      ]) === false);
    
}
test();