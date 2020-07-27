/*
2 给你一个 cell = 0 的end position, 判断这个 board 的其他的所有的0 是否能 reach 到 它。 比如上面这个， 加入 end position 是 左上角的那个 0， 就要返回 false, 因为右上角 那 3 个 reach 不到它。

[ [0,-1,0,0],
[0,0,-1,0],
[0,0,0,-1] ]

*/

const checkReach = (matrix, x, y) => {
  const ROW = matrix.length;
  const COL = matrix[0].length;
  
  const helperSpread = (x, y) => {
    matrix[x][y] = -1;
    if ( x > 0 && matrix[x-1][y]===0 ) {
      helperSpread(x-1, y);
    }
    if ( x < ROW-1 && matrix[x+1][y] === 0 ) {
      helperSpread(x+1, y);
    }
    if ( y > 0 && matrix[x][y-1] === 0 ) {
      helperSpread(x, y-1);
    }
    if ( y < COL-1 && matrix[x][y+1] === 0  ) {
      helperSpread(x, y+1);
    }
  }
  
  helperSpread(x, y);
  for ( let i = 0 ; i < ROW ; i++ ) {
    for ( let j = 0 ; j < COL ; j++ ) {
      if ( matrix[i][j] === 0 ) {
        return false;
      }
    }
  }
  return true;
}

const matrix02_01 = [ 
  [0,-1,0,0],
  [0,0,-1,0],
  [0,0,0,-1] 
];
// console.log ( checkReach(matrix02_01, 0, 0) ) // false;

const matrix02_02 = [ 
  [0,-1,0,0],
  [0,0,0,0],
  [0,0,0,-1] 
];
// console.log ( checkReach(matrix02_02, 0, 0) ) // true;
