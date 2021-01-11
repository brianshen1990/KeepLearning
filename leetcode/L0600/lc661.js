/**
661. Image Smoother

Given a 2D integer matrix M representing the gray scale of an image, you need to design a smoother to make the gray scale of each cell becomes the average gray scale (rounding down) of all the 8 surrounding cells and itself. If a cell has less than 8 surrounding cells, then use as many as you can.

Example 1:
Input:
[[1,1,1],
 [1,0,1],
 [1,1,1]]
Output:
[[0, 0, 0],
 [0, 0, 0],
 [0, 0, 0]]
Explanation:
For the point (0,0), (0,2), (2,0), (2,2): floor(3/4) = floor(0.75) = 0
For the point (0,1), (1,0), (1,2), (2,1): floor(5/6) = floor(0.83333333) = 0
For the point (1,1): floor(8/9) = floor(0.88888889) = 0
Note:
The value in the given matrix is in the range of [0, 255].
The length and width of the given matrix are in the range of [1, 150].
 */

/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
    const ROW = M.length;
    const COL = M[0].length;
    
    const ret = [];
    for ( let i = 0 ; i < ROW ; i++ ) {
        ret.push( new Array(COL).fill(0) );
    }
    
    for ( let row = 0 ; row < ROW ; row++ ) {
        for ( let col = 0 ; col < COL; col++ ) {
            let count = 1 ;
            let sum = M[row][col];
            if ( row > 0 ) {
                count++;
                sum += M[row-1][col]
            }
            if ( row < ROW-1 ) {
                count++;
                sum += M[row+1][col];
            }
            if ( col > 0 ) {
                count++;
                sum += M[row][col-1];
            }
            if ( col < COL-1 ) {
                count++;
                sum += M[row][col+1];
            }
            if ( row > 0 && col > 0 ) {
                count++;
                sum += M[row-1][col-1];
            }
            if ( row > 0 && col < COL-1 ) {
                count++;
                sum += M[row-1][col+1];
            }
            if ( row < ROW-1 && col > 0 ) {
                count++;
                sum += M[row+1][col-1];
            }
            if ( row < ROW-1 && col < COL-1) {
                count++;
                sum += M[row+1][col+1];
            }
            ret[row][col] = Math.floor( sum / count );
        }
    }
    return ret;
};

/**
[[1,1,1],[1,0,1],[1,1,1]]
[[1]]
[[1,1,1]]
[[1],[1],[1]]
[[2,3,4],[5,6,7],[8,9,10],[11,12,13],[14,15,16]]
*/