/**
Intuit 网上coding competition的一道题给一个矩阵，矩阵里的每个元素是1，但是其中分布着一些长方形区域， 这些长方形区域中的元素为0. 要求输出每个长方形的位置（用长方形的左上角元素坐标和右下角元素坐标表示）。
example：
input:
[
  [1,1,1,1,1,1],
  [0,0,1,0,1,1],
  [0,0,1,0,1,0],
  [1,1,1,0,1,0],
  [1,0,0,1,1,1]
]
output:
[
  [1,0,2,1],
  [1,3,3,3],
  [2,5,3,5],
  [4,1,4,2]
]

*/

const findRectangle = (points) => {
  const ret = [];
  const ROW = points.length;
  const COL = points[0].length;
  for ( let i = 0 ; i < ROW ; i++ ) {
    for ( let j = 0 ; j < COL ; j++ ) {
      if ( points[i][j] === 0 ) {
        const rec = [i, j];
        let y = i;
        while ( y < ROW && points[y][j] === 0 ) { y++; }
        y--;
        
        let x = j;
        while ( x < COL && points[i][x] === 0 ) { x++; }
        x--;
        
        rec.push(y);
        rec.push(x);
        ret.push(rec);
        for ( let n = i ; n <= y ; n++ ) {
          for ( let m = j ; m <= x ; m++ ) {
            points[n][m] = 1;
          }
        }
      }   
    }
  }
  return ret;
}
const input = [
  [1,1,1,1,1,1],
  [0,0,1,0,1,1],
  [0,0,1,0,1,0],
  [1,1,1,0,1,0],
  [1,0,0,1,1,1]
];
console.log( findRectangle(input) ) ;
// [
//   [1,0,2,1],
//   [1,3,3,3],
//   [2,5,3,5],
//   [4,1,4,2]
// ]