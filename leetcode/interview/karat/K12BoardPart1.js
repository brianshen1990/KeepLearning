/*
1. 有一个有 (-1, 0) 组成的board: -1  是 wall, 0 是可以走的。 给你一个 cell = 0  的position， 返回它上下左右四个方向的是 0 的neighbors. 
[ [0,-1,0,0],
[0,0,-1,0],
[0,0,0,-1] ] */

const findAllNei = (matrix, x, y) => {
  
  const ROW = matrix.length;
  const COL = matrix[0].length;

  const ret = [];
  if ( x > 0 && matrix[x-1][y] === 0 ) {
    ret.push( [x-1, y]);
  }
  if ( x < ROW-1 && matrix[x+1][y] === 0 ) {
    ret.push( [x+1, y]);
  }
  if ( y > 0 && matrix[x][y-1] === 0 ) {
    ret.push( [x, y-1]);
  }
  if ( y < COL-1 && matrix[x][y+1] === 0 ) {
    ret.push( [x, y+1]);
  }
  return ret;
}
const mat = [ 
  [0,-1,0,0],
  [0,0,-1,0],
  [0,0,0,-1] ];

// console.log( findAllNei( mat, 0, 0 ) ) ; // [ [1,0] ]
// console.log( findAllNei( mat, 1, 1 ) ) ; // [ [1,0], [2,1] ]
